import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyAccount from '@/components/Account/MyAccount';
import Sidebar from '@/components/Account/Sidebar';
import Details from '@/components/Account/Details/Details';

const Account: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex border border-b p-6 text-center justify-center">
        <h1>My Account</h1>
      </div>
      <div className="flex flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MyAccount />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
