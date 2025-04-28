import React from 'react'
import image from '../../img/Side Image.png'
import image1 from '../../img/Services@2x.png'
import image2 from '../../img/Services (3).png'
import image3 from '../../img/Services (1).png'
import image4 from '../../img/Services (2).png'
import image5 from '../../img/Services (4).png'
import image6 from '../../img/Services (5).png'
import image7 from '../../img/Services (6).png'
import people1 from '../../img/Frame 874.png'
import people2 from '../../img/Frame 875.png'
import people3 from '../../img/Frame 876.png'
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 space-y-28">

            {/* Top - Our Story */}
            <div className='flex flex-col md:flex-row items-center gap-10'>
                <div className='md:w-1/2 space-y-6'>
                    <p className='text-4xl md:text-5xl font-bold'>Our Story</p>
                    <p className='text-gray-600'>
                        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                    </p>
                    <p className='text-gray-600'>
                        Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <img className='w-full h-auto rounded-xl shadow-lg' src={image} alt="About Image" />
                </div>
            </div>

            {/* Middle - Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {[
                    { img: image1, value: '10.5K', desc: 'Sellers active on our site' },
                    { img: image2, value: '33K', desc: 'Monthly Product Sale', bg: 'bg-red-500 text-white' },
                    { img: image3, value: '45.5K', desc: 'Customers active on our site' },
                    { img: image4, value: '25K', desc: 'Annual gross sale on our site' }
                ].map((item, idx) => (
                    <div key={idx} className={`flex flex-col items-center cursor-pointer w-[230px] h-[200px] justify-center p-6 rounded-lg shadow-md border hover:scale-105 transition-transform duration-300 ${item.bg || ''}`}>
                        <img src={item.img} alt="" width={60} />
                        <p className='text-xl font-semibold mt-4'>{item.value}</p>
                        <span className='text-sm text-center'>{item.desc}</span>
                    </div>
                ))}
            </div>

            {/* Bottom - Team Members */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {[
                    { name: 'Tom Cruise', title: 'Founder & Chairman', img: people1 },
                    { name: 'Emma Watson', title: 'Managing Director', img: people2 },
                    { name: 'Will Smith', title: 'Product Designer', img: people3 }
                ].map((person, idx) => (
                    <div key={idx} className='flex flex-col items-center text-center'>
                        <img className='w-80 h-auto  shadow-md' src={person.img} alt={person.name} />
                        <div className='mt-6 space-y-2'>
                            <p className='text-2xl font-bold'>{person.name}</p>
                            <h3 className='text-gray-500'>{person.title}</h3>
                            <div className='flex justify-center gap-4 text-xl text-gray-600'>
                                <a href='https://www.instagram.com/maqsudbey_/'><FiTwitter /></a>
                                <a href='https://www.instagram.com/maqsudbey_/'><FaInstagram /></a>
                                <a href='https://www.instagram.com/maqsudbey_/'><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 px-4 py-8">
  {[
    { img: image5, value: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over' },
    { img: image6, value: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support' },
    { img: image7, value: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center text-center cursor-pointer w-[270px] h-[200px] justify-center p-6 rounded-2xl shadow-md border hover:scale-105 transition-transform duration-300 bg-white"
    >
      <img src={item.img} alt="" width={60} />
      <p className="text-md font-semibold my-4">{item.value}</p>
      <span className="text-sm">{item.desc}</span>
    </div>
  ))}
</div>

        </div>
    )
}

export default About
