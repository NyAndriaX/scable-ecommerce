import React from 'react';

type ButtonType = 'submit' | 'reset' | 'button' | undefined;
interface ButtonPros {
  type: ButtonType;
  text: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  className?: string;
  icon?: IconType;
}

type IconType = () => JSX.Element;

export default function Button({
  type,
  text,
  onClick,
  disabled,
  className,
  icon,
}: ButtonPros) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex max-h-[44px] items-center justify-center transition-all ${
        className ?? ''
      }`}
      disabled={disabled}
      aria-label={text}
    >
      {icon && React.createElement(icon)}
      {text}
    </button>
  );
}
