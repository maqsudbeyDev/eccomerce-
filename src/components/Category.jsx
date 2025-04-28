import React from 'react'
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";

const categories = [
  { icon: <FiSmartphone />, label: "Phones" },
  { icon: <HiOutlineComputerDesktop />, label: "Computers" },
  { icon: <BsSmartwatch />, label: "SmartWatch" },
  { icon: <IoCameraOutline />, label: "Camera", active: true },
  { icon: <CiHeadphones />, label: "HeadPhones" },
  { icon: <SiYoutubegaming />, label: "Gaming" },
];

const Category = () => {
  return (
    <div className="my-16 px-4 md:px-12">
      <p className="text-2xl pl-[50px] font-bold text-center md:text-left mb-10">Browse By Category</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-[50px]">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center gap-3 px-5 py-8 rounded-lg transition duration-300 cursor-pointer 
              ${cat.active ? 'bg-red-500 text-white' : 'bg-white border border-gray-300 hover:bg-gray-100 hover:shadow-md'}
            `}
          >
            <div className="text-4xl">{cat.icon}</div>
            <span className="text-sm font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
