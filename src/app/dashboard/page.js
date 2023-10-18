"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import ProfileEditing from '../components/profile_edit';
import Previousorder from '../components/order_history';
import Itemlike from '../components/LikedItem';
import Fillform from '../components/Fillform';



const Sidebar = ({ handleProfileClick, handleOrderClick,handleLikeClick,handleAddItemClick }) => {
  const { data: session } = useSession(); 
 

  return (
    <div className="flex flex-col w-full h-screen p-4 sm:w-3/4 bg-amber-200">
      <div className="mb-4 tex-xl">
        <div className="flex items-center">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={25}
          height={20}
        />
          {session?.user?.name && (
            <span>{session.user.name}</span>
          )}
          <div className="mr-2 cursor-pointer" onClick={handleProfileClick}>
            <span>
              <img src="/pencil.png" height={40} width={40} alt="Pencil Icon" />
            </span>
          </div>
        </div>
      </div>
      <div className="text-xl cursor-pointer" onClick={handleOrderClick}>
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/cart.png" height={20} width={20} alt="Cart Icon" />
          </div>
          <span>My Items</span>
        </div>
      </div>


      <div className="text-xl cursor-pointer" onClick={handleLikeClick}>
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/like.png" height={20} width={20} alt="Cart Icon" />
          </div>
          <span>My Liked Items</span>
        </div>
      </div>

      <div className="text-xl cursor-pointer" onClick={handleAddItemClick}>
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/form.jpg" height={20} width={20} alt="Cart Icon" />
          </div>
          <span>Fill this form </span>
        </div>
      </div>


    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="w-full h-screen p-4 sm:w-3/4">
      <h2 className="mb-4 text-2xl font-bold">Edit Profile</h2>
      <ProfileEditing />
    </div>
  );
};

const OrderHistory = () => {
  return (
    <div className="w-full h-screen p-4 bg-white sm:w-3/4">
      <h2 className="mb-4 text-2xl font-bold">My Items</h2>
      <Previousorder/>
    </div>
  );
};


const LikeItems = () => {
  return (
    <div className="w-full h-screen p-4 bg-white sm:w-3/4">
      <h2 className="mb-4 text-2xl font-bold">Liked Items</h2>
      <Itemlike/>
    </div>
  );
};

const FormFillUp = () => {
  return (
    <div className="w-full h-screen p-4 bg-white sm:w-3/4">
      <h2 className="mb-4 text-2xl font-bold">Form</h2>
      <Fillform/>
    </div>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleProfileClick = () => {
    setActiveTab('MyProfile');
  };

  const handleOrderClick = () => {
    setActiveTab('MyOrders');
  };

  const handleLikeClick = () => {
    setActiveTab('MyLikeItem');
  };


  const handleAddItemClick= () => {
    setActiveTab('MyForm');
  };
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/4">
        <Sidebar handleProfileClick={handleProfileClick} handleOrderClick={handleOrderClick} 
       handleLikeClick={handleLikeClick}  handleAddItemClick={handleAddItemClick}/>
      </div>
      <div className="w-full sm:w-3/4">
        {activeTab === 'MyOrders' && <OrderHistory />}
        {activeTab === 'MyProfile' && <ProfileSection />}
        {activeTab === 'MyLikeItem' && <LikeItems />}
        {activeTab === 'MyForm' && <FormFillUp />}

      </div>
    </div>
  );
};

export default Page;
