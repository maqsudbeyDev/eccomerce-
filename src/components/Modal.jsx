import React, { useState } from 'react';
import Login from './Login';
import SignUp from '../pages/SignUp';


const Modal = ({ setShowModal, setUser, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true); // Modalda login yoki sign upni ko'rsatish

  const closeModal = () => setShowModal(false); // Modalni yopish uchun funksiya

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button onClick={closeModal} className="absolute top-2 right-2 text-xl text-gray-600">X</button>

        {isLogin ? (
          <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUp setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}

        {/* SignUp va Login o'rtasida almashtirish */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-700"
          >
            {isLogin ? 'Ro\'yxatdan o\'tish' : 'Kirishingizni amalga oshiring'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
