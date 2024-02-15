import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/common/Logo/Logo';
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Popover } from '@headlessui/react';

interface MenuDesktopProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({ setIsOpen }) => {
  return (
    <nav className="relative">
      <div
        aria-label="Top"
        className="mx-auto max-w-7xl border-gray-200 bg-black px-4 sm:px-6 lg:px-8"
      >
        {/* Mobile hamburger menu */}
        <div className="flex h-16 items-center">
          <button
            type="button"
            className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* Logo */}
          <div className="ml-4 flex lg:ml-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          {/* Flyout menu */}
          <Popover.Group className="z-50 hidden lg:ml-8 lg:flex lg:self-stretch items-center">
            <div className="flex h-full space-x-8">
              {/* cart menus */}
              <Popover className="flex">
                <>
                  <div className="relative flex">
                    <Popover.Button></Popover.Button>
                  </div>
                </>
              </Popover>
            </div>
          </Popover.Group>
          {/* Auth  & cart menus*/}
          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <div className="hidden items-center justify-end md:flex md:flex-1">
                {/* connected */}
              </div>
              <div className="hidden items-center justify-end md:flex md:flex-1"></div>
              {/* Not connected */}
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-white hover:text-opacity-80"
                >
                  Sign in
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link
                  to="/register"
                  className="text-sm font-medium text-white hover:text-opacity-80"
                >
                  Create account
                </Link>
              </>
            </div>
          </div>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
            <Link to="/carts" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 shrink-0 text-white group-hover:text-opacity-80"
                aria-hidden="true"
              />
              {/* <CartStatus /> */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuDesktop;
