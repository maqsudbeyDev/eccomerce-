import React from "react";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p className="text-center text-red-500">Foydalanuvchi topilmadi</p>;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">Akkount ma'lumotlari</h2>

        {/* Profil rasmi */}
        {user.photo ? (
          <div className="flex justify-center">
            <img
              src={user.photo}
              alt="Profil"
              className="w-24 h-24 object-cover rounded-full border"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-full border">
              Rasm
            </div>
          </div>
        )}

        {/* Foydalanuvchi ma'lumotlari */}
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-700">Ism:</p>
            <p className="text-gray-600">{user.name}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Telefon raqam:</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Parol:</p>
            <p className="text-gray-600">{user.password}</p>
          </div>
        </div>

        {/* Ro'yxatdan o'tgan sana */}
        <div className="text-center text-gray-500 text-sm mt-4">
          <p>Ro'yxatdan o'tgan sana: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
