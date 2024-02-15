import React from 'react';
import LogoWhite from '@/assets/logos/Logo-white.png';

interface LogoProps {
  color?: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = ({ color, width }) => {
  return (
    <React.Fragment>
      {color === 'white' ? (
        <img
          src={LogoWhite}
          alt="logo"
          style={{ width: width ? '100px' : "100px", height: 'auto' }}
        />
      ) : (
        <img
          src={LogoWhite}
          alt="logo"
          style={{ width: "100px", height: '100px' }}
        />
      )}
    </React.Fragment>
  );
};

export default Logo;
