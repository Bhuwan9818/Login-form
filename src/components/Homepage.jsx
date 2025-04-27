import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
      <div className="flex p-5 gap-2 justify-end h-screen sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex-col bg-gray-100">
        <h1 className="text-2xl font-[600]">Welcome to PopX</h1>
        <p className="text-gray-500 text-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, animi! Perferendis voluptatem sit iure dolorum!
        </p>
        <div>
          <div className="flex gap-2 justify-center items-center flex-col">
            <div className="flex gap-2 justify-center font-[500] items-center text-white flex-col bg-[#6C25FF] p-2 rounded-md w-full">
              <Link to='/signup'>Create account</Link>  
            </div>
            <div className="flex gap-2 justify-center font-[500] items-center flex-col bg-[#CEBAFB] p-2 rounded-md w-full">
            <Link to='/login'>Already Registered? Login</Link>  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
