import { Link } from 'react-router-dom';
// import Logo from '@/components/common/Logo/Logo';

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-gray-200"
    >
      <div className="mx-auto flex flex-col items-center ">
        {/* Top area: Blocks */}
        <div className="grid w-full max-w-7xl gap-8 py-8 px-4 sm:grid-cols-12 sm:px-6 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-6">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                {/* Placeholder text for logo */}
                <span>Logo Placeholder</span>
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 lg:ml-auto">
            <h6 className="mb-2 font-medium text-gray-800">Marketplace</h6>
            <ul className="text-sm">
              {/* Placeholder text for marketplace links */}
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Marketplace Link 1
                </Link>
              </li>
              {/* More placeholder links here */}
            </ul>
          </div>

          {/* More blocks here */}

        </div>

        {/* Bottom area */}
        <div className="flex w-full justify-center border-t border-gray-200  p-4 sm:px-6 md:py-8">
          <div className="w-full max-w-7xl px-4 sm:px-6 md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="mb-4 flex md:order-1 md:ml-4 md:mb-0">
              {/* Placeholder social links */}
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Placeholder action for social link
                  }}
                  className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                  aria-label="Social Media"
                >
                  {/* Placeholder text for social media icon */}
                  <span>Social Media Icon</span>
                </button>
              </li>
              {/* More placeholder social links here */}
            </ul>
            {/* Copyrights note */}
            <div className="mr-4 text-sm text-gray-600">
              Made by
              {' '}
              {/* Placeholder link */}
              <Link
                className="text-blue-600 hover:underline"
                target="_blank"
                to="#"
              >
                Placeholder Name
              </Link>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
