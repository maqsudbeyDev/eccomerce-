import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Woman's Fashion", path: "/womens-fashion" },
  { name: "Men's Fashion", path: "/mens-fashion" },
  { name: "Electronics", path: "/electronics" },
  { name: "Home & Lifestyle", path: "/home-lifestyle" },
  { name: "Medicine", path: "/medicine" },
  { name: "Sports & Outdoor", path: "/sports-outdoor" },
  { name: "Baby's & Toys", path: "/babies-toys" },
  { name: "Groceries & Pets", path: "/groceries-pets" },
  { name: "Health & Beauty", path: "/health-beauty" },
];

const slides = [
  {
    title: "iPhone 14 Series",
    discount: "Up to 10%",
    description: "off Voucher",
    image:
      "https://images.macrumors.com/t/-WhF9d3h7Je2kQsIQjH4OMFVSNs=/1600x/article-new/2022/09/iphone-14-pro.jpg",
  },
  {
    title: "Samsung Galaxy S24",
    discount: "Up to 15%",
    description: "Limited Time Offer",
    image:
      "https://images.livemint.com/img/2023/03/08/1600x900/iphone_14_yelo_1678247306691_1678247321231_1678247321231.jpg",
  },
  {
    title: "Smart TVs",
    discount: "Flat 20%",
    description: "on all brands",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflAeVpDpl8syWSrQglfMaIQIPcZPH-kd3zw&s",
  },
];

export default function SidebarBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 py-4 pl-4">
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li key={i}>
              <NavLink
                to={cat.path}
                className="flex justify-between items-center text-base md:text-xl ml-4 text-gray-800 hover:text-black cursor-pointer">
                {cat.name}
                <span className="text-sm md:text-lg mr-5">›</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Banner */}
      <div className="w-full md:w-3/4 relative ml-0 md:ml-5 mt-5 md:mt-8 md:mr-32 mb-5 bg-black text-white flex flex-col md:flex-row items-center justify-between p-4 md:p-6 overflow-hidden transition-all duration-500">
        <div className="text-center md:text-left max-w-md ml-0 md:ml-10">
          <p className="text-lg md:text-xl mb-2"> {slides[currentSlide].title}</p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            {slides[currentSlide].discount} <br /> {slides[currentSlide].description}
          </h2>
          <button className="mt-4 text-sm underline flex items-center gap-1 mx-auto md:mx-0">
            Shop Now <span>→</span>
          </button>
        </div>
        <img
          src={slides[currentSlide].image}
          alt="Slide"
          className="w-full md:w-1/2 object-cover max-h-64 md:max-h-full mt-4 md:mt-0"
        />

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 mt-2 md:mt-5 rounded-full cursor-pointer ${
                currentSlide === idx ? "bg-red-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
