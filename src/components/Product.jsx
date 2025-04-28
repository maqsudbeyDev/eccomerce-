import React, { useContext, useState } from 'react';
import CategoryList from './CategoryList';
import SearchProduct from './SearchProduct';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = product.products.filter((p) => {
        const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="px-4 md:px-12 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <CategoryList onCategorySelect={handleCategorySelect} />
                <SearchProduct setSearchQuery={setSearchQuery} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleClick(product.id)}
                            className="group border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer relative"
                        >
                            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md z-10">
                                -{product.discountPercentage}%
                            </span>

                            <img
                                loading="lazy"
                                src={product.images?.[0] || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANNtSLS0Bj-mULbizZ0dRLMAHoBZ2L_UPTQ&s"}
                                alt={product.title}
                                className="w-full h-40 object-contain bg-white p-4"
                            />

                            <div className="p-4">
                                <p className="text-md font-semibold mb-2 text-gray-800">
                                    {product.title.length > 25 ? product.title.slice(0, 25) + '...' : product.title}
                                </p>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-lg font-bold text-red-600">${product.price}</span>
                                    <span className="text-sm line-through text-gray-400">${product.oldPrice}</span>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                        className="flex-1 bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800 transition"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClick(product.id);
                                        }}
                                        className="flex-1 bg-gray-700 text-white text-sm py-2 rounded-md hover:bg-gray-900 transition"
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 text-lg col-span-full">No products found in this category or search.</p>
                )}
            </div>
        </div>
    );
};

export default Product;