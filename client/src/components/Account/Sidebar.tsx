import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const showSidebar = location.pathname !== '/account';

  return showSidebar ? (
    <div className="w-1/4">
      <ul className="flex flex-col px-8 gap-4">
        <li>My Account</li>
        <li>Account Details</li>
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
