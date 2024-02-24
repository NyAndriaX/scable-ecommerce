import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyAccount: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 py-10">
      <ul className="flex flex-wrap sm:pl-20 md:pl-36 lg:pl-40 gap-8 justify-start">
        <li
          className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 text-center cursor-pointer"
          style={{ boxShadow: '1px 1px 4px 1px #eaeaea' }}
          onClick={() => navigate('/account/details')}
        >
          <p className="text-xl p-2">Account Details</p>
          <div className="border border-b"></div>
          <p className="text-xs p-2 text-gray-500">
            View or change your sign-in information
          </p>
        </li>
        <li
          className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 text-center cursor-pointer"
          style={{ boxShadow: '1px 1px 4px 1px #eaeaea' }}
          onClick={() => navigate('/account/details')}
        >
          <p className="text-xl p-2">Account Details</p>
          <div className="border border-b"></div>
          <p className="text-xs p-2 text-gray-500">
            View or change your sign-in information
          </p>
        </li>
        <li
          className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 text-center cursor-pointer"
          style={{ boxShadow: '1px 1px 4px 1px #eaeaea' }}
          onClick={() => navigate('/account/details')}
        >
          <p className="text-xl p-2">Account Details</p>
          <div className="border border-b"></div>
          <p className="text-xs p-2 text-gray-500">
            View or change your sign-in information
          </p>
        </li>
        <li
          className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 text-center cursor-pointer"
          style={{ boxShadow: '1px 1px 4px 1px #eaeaea' }}
          onClick={() => navigate('/account/details')}
        >
          <p className="text-xl p-2">Account Details</p>
          <div className="border border-b"></div>
          <p className="text-xs p-2 text-gray-500">
            View or change your sign-in information
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MyAccount;
