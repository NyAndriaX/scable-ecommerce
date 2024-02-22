import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuMobile from './mobile/MenuMobile';
import MenuDesktop from './desktop/MenuDesktop';
import { useUserInfo } from '@/store/authStore';

const NavBar = () => {
  const userData = useUserInfo();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const timeoutDuration = 200;
  let timeout: string | number | NodeJS.Timeout | undefined;

  const buttonRef = useRef<HTMLButtonElement>(null);

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open: boolean) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <header>
      <MenuDesktop
        setIsOpen={setIsOpen}
        userData={userData}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        navigate={navigate}
      />
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default NavBar;
