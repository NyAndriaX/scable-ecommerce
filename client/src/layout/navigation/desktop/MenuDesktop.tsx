import User from '@/components/User';
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon';
import { User as UserInterface} from '@/types/interface';
import Logo from '@/components/common/Logo/Logo';
import { Popover, Transition } from '@headlessui/react';
import { Link, NavigateFunction } from 'react-router-dom';
import { Dispatch, forwardRef, SetStateAction,Fragment } from 'react';
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline';

interface MenuDesktopProps {
  userData: UserInterface | null;
  navigate:NavigateFunction
  onMouseEnter: (open: boolean) => void;
  onMouseLeave: (open: boolean) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuDesktop = forwardRef<HTMLButtonElement, MenuDesktopProps>(
  ({ setIsOpen, userData, onMouseEnter, onMouseLeave }, ref) => {
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
                  {userData && (
                    <Popover className="relative hidden leading-3 md:block">
                      {({ open }) => (
                        <>
                          <div onMouseLeave={onMouseLeave.bind(null, open)}>
                            <Popover.Button
                              className={`group inline-flex items-center rounder-md text-base font-medium hover:text-gray-900 focus:outil-none ${open ? 'text-gray-900' : 'text-gray-500'}`}
                              ref={ref}
                              onMouseEnter={onMouseEnter.bind(null, open)}
                              onMouseLeave={onMouseLeave.bind(null, open)}
                            >
                              <User mobile={false} lastName={userData.lastName} firstName={userData.firstName}/>
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                               <Popover.Panel className="absolute left-35 z-50 mt-0 w-[250px] max-w-sm -translate-x-1/2 px-3 pt-3 sm:px-0 lg:max-w-3xl">
                                  <div
                                    className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
                                    onMouseEnter={() => onMouseEnter.bind(null, open)}
                                    onMouseLeave={() => onMouseLeave.bind(null, open)}
                                  >
                                     <div className="relative grid  bg-white ">
                                      <div className="p-4">
                                      <Popover.Button
                                          // onClick={() => navigate('/account')}
                                          className="flex w-full items-center rounded-lg p-1 hover:bg-gray-50"
                                        >
                                          <PencilSquareIcon className="h-4 w-4" />
                                          <p className="ml-3 text-base font-medium text-gray-900">
                                            Edit Profile
                                          </p>
                                        </Popover.Button>
                                      </div>
                                     </div>
                                  </div>
                               </Popover.Panel>

                            </Transition>
                          </div>
                        </>
                      )}
                    </Popover>
                  )}
                </div>
                {/* Not connected */}
                {!userData && (
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
                )}
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
  }
);

export default MenuDesktop;
