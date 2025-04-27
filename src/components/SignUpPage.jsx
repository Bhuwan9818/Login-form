import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="flex gap-2 sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col bg-gray-100">
        <form
          onSubmit={handleSignup}
          className=" p-8 rounded-md flex flex-col gap-2 w-full max-w-md bg-gray-100"
        >
          <h2 className="text-2xl sm:text-3xl w-[60%] font-semibold mb-6">
            Create your PopX account
          </h2>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 mb-2 text-sm text-[#6C25FF]">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border  border-gray-400 border-[1px] rounded-md mb-4"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="relative">
              <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 mb-2 text-sm text-[#6C25FF]">
                Phone number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border  border-gray-400 border-[1px] rounded-md mb-4 "
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="relative">
              <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 mb-2 text-sm text-[#6C25FF]">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border  border-gray-400 border-[1px] rounded-md mb-4"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="relative">
              <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 mb-2 text-sm text-[#6C25FF]">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border  border-gray-400 border-[1px] rounded-md mb-4"
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="relative">
              <label className="block absolute top-[-10px] bg-gray-100 px-3 left-4 mb-2 text-sm text-[#6C25FF]">
                Company name*
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 border-[1px] rounded-md mb-4"
                required
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <label className="block mb-2 text-sm font-medium ">
            Are you an Agency?
          </label>
          <div className="flex gap-4 mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center ">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;