import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { NavLink } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Cart = () => {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getTotalPrice,
    } = useContext(CartContext);

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="flex items-center justify-center mt-8 flex-col gap-6 md:gap-8 text-center">
                    <p className="text-xl md:text-2xl font-bold">Your cart is empty</p>
                    <NavLink
                        className="px-6 md:px-12 flex gap-2 items-center py-2 bg-red-500 text-white rounded-md hover:bg-red-400 duration-300"
                        to={"/product"}
                    >
                        Product <b className="text-2xl"><MdOutlineProductionQuantityLimits /></b>
                    </NavLink>
                </div>
            ) : (
                <div className="w-full">
                    {/* Table headers */}
                    <div className="hidden md:grid grid-cols-5 py-4 text-xl font-bold px-4 shadow-lg border-2 my-2 text-center">
                        <h1>Product</h1>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>SubTotal</p>
                        <p>Delete</p>
                    </div>

                    {/* Cart items */}
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:grid md:grid-cols-5 justify-around items-center gap-4 border shadow-md p-4 rounded text-center"
                            >
                                {/* Product */}
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain"
                                    />
                                    <p>
                                        {item.title.length > 20
                                            ? item.title.slice(0, 15) + "..."
                                            : item.title}
                                    </p>
                                </div>

                                {/* Price */}
                                <p className="text-gray-600">${item.price}</p>

                                {/* Quantity control */}
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="px-2 bg-gray-200 rounded"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="px-2 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Subtotal */}
                                <div className="font-semibold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                {/* Delete */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 font-semibold"
                                >
                                    ❌
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total summary */}
                    <div className="flex flex-col gap-4 border-2 border-black/20 my-6 max-w-md mx-auto p-5 rounded-lg bg-gray-50">
                        <p className="text-xl md:text-2xl font-semibold">Cart Total</p>
                        <div className="flex justify-between border-b py-2">
                            <p className="text-lg font-medium">Subtotal:</p>
                            <p className="text-lg font-medium">${getTotalPrice().toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between border-b py-2">
                            <span className="text-lg font-medium">Shipping:</span>
                            <p className="text-lg font-medium">Free</p>
                        </div>
                        <div className="flex justify-between border-b py-2">
                            <p className="text-lg font-medium">Total:</p>
                            <span className="text-lg font-medium">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <NavLink
                            to="/checkout"
                            className="w-full text-center py-3 bg-red-500 rounded-md text-white hover:bg-red-400 duration-300"
                        >
                            Proceed to Checkout
                        </NavLink>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
