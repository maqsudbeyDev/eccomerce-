import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className='flex flex-col gap-5'>
          <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
          <p>Subscribe</p>
          <span className='text-[13px]'>Get 10% off your first order</span>
            <form className='flex items-center'>
            <input className='w-[200px] pl-5 py-2 rounded-md border-white  bg-gray-800' type="email" placeholder='Enter your email'/>
            <button className='px-5 py-2 bg-black ml-2 rounded-md'><IoSend /></button>
            </form>
        </div>

        {/* Navigation */}
        <div className='flex gap-20'>
        <div>
         <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</a></li>
            <li><a href="#" className="hover:text-white">exclusive@gmail.com</a></li>
            <li><a href="#" className="hover:text-white">+998 91 280 43 83</a></li>
          </ul>
         </div>
        <div>
         <h3 className="text-xl font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Login / Register</a></li>
            <li><a href="#" className="hover:text-white">Cart</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
          </ul>
         </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Biz bilan bog‘laning</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MyBrand. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
