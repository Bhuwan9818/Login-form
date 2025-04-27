import React from "react";
import ProfileImageUploader from "./ImageUploader";

function Profile({ user }) {
  if (!user) {
    return <div className="p-4">No user information available.</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <div className="gap-2 w-[30%] bg-gray-100 h-screen shadow-md ">
        <div className="bg-white py-5">
          <h1 className="text-2xl px-4">Account Settings</h1>
        </div>
        <div className="p-4 bg-gray-100 rounded-md flex gap-4">
          <div className="w-20">
            <ProfileImageUploader></ProfileImageUploader>
          </div>
          <div className="flex gap-2 justify-center flex-col">
            <p className="capitalize font-[500]">{user.fullName}</p>
            <p className="font-[400]">{user.email}</p>
          </div>
        </div>
        <div className="px-4 bg-gray-100 pb-6 border-b border-dashed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            itaque sit laboriosam eos quas ipsa eaque doloremque, explicabo
            tempora iusto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;