import React, { SetStateAction, Dispatch, Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Transition, Dialog, Tab } from '@headlessui/react';

interface MenuMobileProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, setIsOpen }) => (
  <Transition.Root show={isOpen} as={Fragment}>
    <Dialog
      as="div"
      className="relative z-10"
      onClose={() => setIsOpen(false)}
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black/25"
          onClick={() => setIsOpen(false)}
        />
      </Transition.Child>
      <div className="fixed inset-0 z-40 flex">
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-gray-200">
                {/* List des categorie ... */}
              </div>
              <Tab.Panels className="mt-2">
                <Tab.Panel>
                  {/* List des models ... */}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            {/* Auth & cart menus */}
            <div className="space-y-6 border-t border-gray-200 py-6 px-4">
              {/* Connected ... */}
              {/* Not connected */}
              <Link
                to="/login"
                className="-m-2 block p-2 font-medium text-gray-900"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                Create account
              </Link>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);
export default MenuMobile;
