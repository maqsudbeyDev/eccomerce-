import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    discount: 40,
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    votes: 88,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr93UN25Mmp2PpfUFI_RP4CfWmsdPOk__gVA&s",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    discount: 35,
    price: 960,
    oldPrice: 1160,
    rating: 4.2,
    votes: 75,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAtKlBhBi8d_9fQS1zH84GDMKT0gwhEMTaw&s",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    discount: 30,
    price: 370,
    oldPrice: 400,
    rating: 4.7,
    votes: 99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABcCPpyXk6SlSgfvSfRD_Ytpumig17-eGwg&s",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    discount: 25,
    price: 375,
    oldPrice: 400,
    rating: 4.6,
    votes: 99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtCF0QUJGBSkmPXLjiHauWCf4yCHpUTUOvg&s",
  },
];

export default function FlashSales() {
  const [time, setTime] = useState(60 * 60 * 24 * 3 + 60 * 23 + 19);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");
  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="w-full px-4 md:px-16 py-8 mt-16">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-red-500 font-semibold">Today's</p>
          <h2 className="text-2xl font-bold">Flash Sales</h2>
        </div>
        <div className="flex gap-4 text-center text-xs md:text-sm">
          <div>
            <p className="font-bold text-lg">{formatTime(days)}</p>
            <span>Days</span>
          </div>
          <div>
            <p className="font-bold text-lg">{formatTime(hours)}</p>
            <span>Hours</span>
          </div>
          <div>
            <p className="font-bold text-lg">{formatTime(minutes)}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p className="font-bold text-lg">{formatTime(seconds)}</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              -{product.discount}%
            </span>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button>
                <FaRegHeart className="text-gray-500 hover:text-red-500" />
              </button>
              <button>
                <BsEye className="text-gray-500 hover:text-black" />
              </button>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain mt-4"
            />
            <p className="text-sm font-semibold mt-4">{product.name}</p>
            <div className="flex gap-2 items-center mt-1">
              <span className="text-red-500 font-bold text-lg">${product.price}</span>
              <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
            </div>
            <div className="text-yellow-400 text-sm">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-500 ml-1">({product.votes})</span>
            </div>
            
              <button className="mt-4 bg-black text-white w-full py-1 text-sm">
                Add To Cart
              </button>
           
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <NavLink to={'/product'} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          View All Products
        </NavLink>
      </div>
      <hr className="mt-[100px] border-[2px] text-black"/>
    </div>
  );
}
