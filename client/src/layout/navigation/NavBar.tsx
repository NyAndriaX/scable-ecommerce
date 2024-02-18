import { useState, useEffect, useRef } from 'react';
import MenuMobile from './mobile/MenuMobile';
import MenuDesktop from './desktop/MenuDesktop';

const NavBar = () => {
  const previousPosition = useRef(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<string>('up');

  useEffect(() => {
    const handleScroll = () => {
      let currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentPosition > previousPosition.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      previousPosition.current = currentPosition;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`fixed w-full top-0 left-0 transition-opacity duration-700 z-50 ${scrollDirection === 'up' ? 'opacity-100' : 'opacity-0'}`}
      >
        <MenuDesktop setIsOpen={setIsOpen} />
        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default NavBar;
