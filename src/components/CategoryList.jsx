import React from 'react';
import { useFetch } from '../hooks/UseFetch';
import { HashLoader } from 'react-spinners';

const CategoryList = ({ onCategorySelect }) => {
    let url = 'https://dummyjson.com/products/category-list';
    let { data, error, isPending } = useFetch(url);

    // Check if data is not null and is an array
    const categories = data && Array.isArray(data) ? data : [];

    const handleCategoryChange = (e) => {
        onCategorySelect(e.target.value); 
        {isPending && <div className="flex justify-center items-center h-64">
                <HashLoader size={100} color="#36d7b7" /></div>}
    };

    return (
        <div>
            {error && <h2 className='error'>{error}</h2>}
           
            <div className="rounded-lg shadow-lg text-center">
                {/* <h2 className="text-2xl font-semibold mb-6 text-gray-800">Category</h2> */}
                <select
                    onChange={handleCategoryChange}
                    className="w-full p-3 text-lg rounded-md border border-gray-300 bg-white cursor-pointer transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
                >
                    <option value="">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category} className="text-lg">
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CategoryList;
