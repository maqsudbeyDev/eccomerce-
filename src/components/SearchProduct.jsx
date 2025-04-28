import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Search ikonkasi uchun react-icons dan foydalanamiz

const SearchProduct = ({ setSearchQuery }) => {
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center border-2 p-3 rounded-md w-full max-w-md shadow-md transition-all duration-300 hover:shadow-xl">
                <FaSearch className="text-gray-500 text-lg" />
                <input
                    type="search"
                    placeholder="Mahsulotni qidiring..."
                    onChange={handleChange}
                    className="bg-transparent flex-1 text-lg text-gray-800 pl-3 outline-none"
                />
            </div>
        </div>
    );
};

export default SearchProduct;
