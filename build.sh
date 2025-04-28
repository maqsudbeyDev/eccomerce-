#!/bin/bash

R='\033[0;31m'
G='\033[0;32m'
NOCOLOR='\033[0m'

# Function to run docker compose commands
run_docker() {
    project_dir=$1
    service_name=$2

    cd "/srv/kutubxona_project/${project_dir}" || { echo -e "${R}Failed to change directory${NOCOLOR}"; exit 1; }
    sleep 1

    # Backup the existing dist folder
    if [ -d "dist" ]; then
        echo -e "${G}Backing up existing dist folder...${NOCOLOR}"
        rm -rf old_dist
        mv dist old_dist
    fi

    # Install npm dependencies
    if npm install; then
        echo -e "${G}npm install success${NOCOLOR}"
        
        # Build the Vite app
        if npm run build; then
            echo -e "${G}npm run build success${NOCOLOR}"
        else
            echo -e "${R}Error npm run build.${NOCOLOR}"
            # Restore the backup if build fails
            if [ -d "old_dist" ]; then
                mv old_dist dist
                echo -e "${R}Build failed. Restored old dist folder.${NOCOLOR}"
            fi
            exit 130
        fi
    else
        echo -e "${R}Error npm install.${NOCOLOR}"
        # Restore the backup if npm install fails
        if [ -d "old_dist" ]; then
            mv old_dist dist
            echo -e "${R}npm install failed. Restored old dist folder.${NOCOLOR}"
        fi
        exit 130
    fi

    # Remove old_dist after successful build
    if [ -d "old_dist" ]; then
        rm -rf old_dist
        echo -e "${G}Removed old dist folder after successful build.${NOCOLOR}"
    fi

    # Change directory back to the root of the project
    cd "/srv/kutubxona_project/" || { echo -e "${R}Failed to change directory${NOCOLOR}"; exit 1; }

    # Run docker-compose commands
    if echo "$SUDO_PASSWORD" | sudo -S docker compose -f docker-compose.yml down --remove-orphans $service_name; then
        echo -e "${G}docker-compose down success${NOCOLOR}"
        if echo "$SUDO_PASSWORD" | sudo -S docker compose -f docker-compose.yml up -d $service_name; then
            echo -e "${G}docker-compose up -d success${NOCOLOR}"
        else
            echo -e "${R}error docker-compose up -d.${NOCOLOR}"
            exit 130
        fi
    else
        echo -e "${R}error sudo docker-compose down${NOCOLOR}"
        exit 130
    fi
}

# Define your project directory and service name
PROJECT_DIR="kutubxona-frontend"
SERVICE_NAME="vite-app"

# Run the build process
run_docker "$PROJECT_DIR" "$SERVICE_NAME"
