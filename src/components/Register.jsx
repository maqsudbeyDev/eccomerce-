import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "+998",
    password: "",
    photo: null,
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files.length > 0) {
      setForm({ ...form, photo: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.phone.startsWith("+998") || form.phone.length !== 13) {
      setError("Telefon raqami +998 bilan boshlanishi va 13 belgidan iborat bo'lishi kerak.");
      return;
    }

    if (form.password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    const userData = {
      name: form.name,
      phone: form.phone,
      password: form.password,
      photo: form.photo ? URL.createObjectURL(form.photo) : null,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    window.location.href = "/account"; // Akkount sahifasiga o'tkazish
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Ro'yxatdan o'tish</h2>

        {error && (
          <p className="text-red-600 text-sm bg-red-100 p-2 rounded-md text-center">{error}</p>
        )}

        {/* Rasm preview va yuklash */}
        <div className="flex flex-col items-center space-y-2">
          {preview ? (
            <img
              src={preview}
              alt="Profil"
              className="w-24 h-24 object-cover rounded-full border"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              Rasm
            </div>
          )}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="text-sm"
          />
        </div>

        {/* Ism */}
        <div>
          <label className="block text-gray-700 mb-1">Ism</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block text-gray-700 mb-1">Telefon raqam</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            maxLength="13"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Parol */}
        <div>
          <label className="block text-gray-700 mb-1">Parol</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        {/* Submit tugmasi */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
        >
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default Register;
