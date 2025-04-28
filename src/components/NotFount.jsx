import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-700 px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <img className="w-[300px]" src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">Sahifa topilmadi</h2>
      <p className="text-center max-w-md">
        Uzr, siz qidirgan sahifa mavjud emas yoki o‘chirib yuborilgan. Iltimos, bosh sahifaga qayting.
      </p>
      <Link
        to="/"
        className="mt-3 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
