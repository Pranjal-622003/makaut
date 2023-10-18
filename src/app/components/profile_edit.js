import React from 'react';
const ProfileEditing = () => {
  return (
    <>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded">
        Save Changes
      </button>
        <div>
        
        </div>
      </form>
  </>
  );
};

export default ProfileEditing;
