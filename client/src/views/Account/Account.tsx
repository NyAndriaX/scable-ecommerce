import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyAccount from '@/components/Account/MyAccount';
import Sidebar from '@/components/Account/Sidebar';
import Details from '@/components/Account/Details';
import { useUserInfo } from '@/store/userStore';

const Account: React.FC = () => {
  const user = useUserInfo();

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex border border-b p-6 text-center justify-center">
        <h1>My Account</h1>
      </div>
      <div className="flex flex-row">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<MyAccount user={user} />} />
          <Route path="/details" element={<Details user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
