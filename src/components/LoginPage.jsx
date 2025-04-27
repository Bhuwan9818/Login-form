import React, { useState } from "react";
import {
  useNavigate,
} from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    // setEmail("");
    // setPassword("");
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      setUser(savedUser);
      alert("Login successful");
      navigate("/profile");
      setEmail("");
      setPassword("");
    } else {
      setError("Invalid email or password");
      alert("Invalid email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-2 justify-end h-screen sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col white">
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 p-8 rounded-md shadow-md w-full max-w-sm h-full"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 w-[50%]">
            Sign in to your PopX account
          </h2>
          <p className="text-sm text-gray-600 mb-6 w-[75%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
            sint.
          </p>

          <div className="relative">
          <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 text-sm font-medium text-[#6C25FF] mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
            className="w-full p-2 border rounded mb-4"

          />
          </div>

          <div className="relative">
          <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 text-sm font-medium text-[#6C25FF] mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            className="w-full p-2 border rounded mb-6"
          />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;