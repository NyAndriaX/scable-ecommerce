import { useState } from 'react';
import MenuMobile from './mobile/MenuMobile';
import MenuDesktop from './desktop/MenuDesktop';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="border-b">
      <MenuDesktop setIsOpen={setIsOpen} />
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default NavBar;
