import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/UseFetch';
import { HashLoader } from 'react-spinners';
import { FaTruckFast } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const url = `https://dummyjson.com/products/${id}`;
    const { data: product, error, isPending } = useFetch(url);

    const handleBuyNow = () => {
        const productToAdd = {
            ...product,
            quantity
        };
        addToCart(productToAdd);
        navigate('/cart'); // Agar sizda cart sahifa bo'lsa
    };

    return (
        <div className="flex items-center justify-center flex-col">
            {error && <h2 className='text-red-500'>{error}</h2>}

            {isPending && (
                <div className="flex justify-center items-center h-64">
                    <HashLoader size={100} color="#36d7b7" />
                </div>
            )}

            {product && (
                <div className="flex flex-col lg:flex-row items-center w-full justify-center px-4 gap-10">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/3 max-w-md">
                        <img className="w-full h-auto object-cover rounded-lg shadow" src={product.images[0]} alt={product.title} />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col justify-center w-full lg:w-1/2 gap-3 mt-6 lg:mt-0">
                        <p className="text-2xl lg:text-3xl font-bold">{product.title}</p>
                        <b className="text-lg lg:text-xl">Brand: {product.category}</b>
                        <span className="text-lg font-semibold">Price: {product.price}$</span>
                        <h3 className="font-semibold">{product.description}</h3>
                        <h4 className="font-semibold">Stock: {product.stock}</h4>
                        <span className="font-semibold">Guarantee: {product.warrantyInformation || 'N/A'}</span>
                        <h5 className="font-semibold">Return: {product.returnPolicy || 'N/A'}</h5>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                            <div className="flex">
                                <button
                                    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                                    className="hover:scale-105 rounded-l-md hover:shadow-lg transition duration-300 p-2 px-4 border"
                                >
                                    --
                                </button>
                                <button className="hover:scale-105 transition duration-300 px-8 py-2 border">
                                    {quantity}
                                </button>
                                <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="hover:scale-105 rounded-r-md hover:shadow-lg transition duration-300 p-2 px-4 border bg-red-500 text-white"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={handleBuyNow}
                                className="hover:scale-105 rounded-md hover:shadow-lg transition duration-300 py-2 px-10 bg-red-500 text-white"
                            >
                                Buy Now
                            </button>
                        </div>

                        <div className='flex items-center gap-5 border-2 pl-5 w-[450px] py-5 rounded-md mt-4'>
                            <span className='text-4xl'><FaTruckFast /></span>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-semibold'>Free Delivery</p>
                                <span>Enter your postal code for Delivery Availability</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <button className="mt-16 bg-gray-800 text-white px-6 py-2 rounded" onClick={() => navigate(-1)}>Ortga qaytish</button>
        </div>
    );
};

export default ProductDetail;
