// src/components/Checkout.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";

const Checkout = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [coupon, setCoupon] = useState("");

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Buyurtmangiz qabul qilindi! 🙌");
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Billing & Payment
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* --- LEFT: Billing Details Form --- */}
        <form className="flex-1 bg-white p-6 shadow rounded-lg space-y-4">
          <h3 className="text-xl font-semibold mb-2">Billing Details</h3>

          {/** First & Last Name **/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">First Name*</label>
              <input
                type="text"
                required
                placeholder="John"
                className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name*</label>
              <input
                type="text"
                required
                placeholder="Doe"
                className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
              />
            </div>
          </div>

          {/** Company Name **/}
          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input
              type="text"
              placeholder="Acme Corp"
              className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
            />
          </div>

          {/** Address **/}
          <div>
            <label className="block mb-1 font-medium">Street Address*</label>
            <input
              type="text"
              required
              placeholder="123 Main St"
              className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              placeholder="Suite 100"
              className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
            />
          </div>

          {/** City & Phone **/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Town/City*</label>
              <input
                type="text"
                required
                placeholder="Tashkent"
                className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number*</label>
              <input
                type="tel"
                required
                placeholder="+998 99 123 4567"
                className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
              />
            </div>
          </div>

          {/** Email **/}
          <div>
            <label className="block mb-1 font-medium">Email Address*</label>
            <input
              type="email"
              required
              placeholder="john.doe@example.com"
              className="w-full border rounded p-2 bg-gray-50 placeholder-gray-400"
            />
          </div>
        </form>

        {/* --- RIGHT: Order Summary & Payment --- */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow rounded-lg flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>

          {/* Order Items */}
          <div className="space-y-4 mb-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-12 h-12 object-contain rounded"
                  />
                  <span className="font-medium text-gray-700">
                    {item.title.length > 20
                      ? item.title.slice(0, 15) + "..."
                      : item.title}
                  </span>
                </div>
                <span className="font-medium">
                  ${item.quantity * item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-b py-3 mb-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <span>Bank Transfer</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span>Cash on Delivery</span>
              </label>

              {/* Card Icons */}
              <div className="flex gap-3 mt-2 text-2xl text-gray-500">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcAmex />
                <FaCcPaypal />
              </div>
            </div>
          </div>

          {/* Coupon */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 border rounded p-2 bg-gray-50 placeholder-gray-400"
            />
            <button className="bg-red-500 text-white px-4 rounded hover:bg-red-600 transition">
              Apply
            </button>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
