import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?:string;
  className?: string;
  ariaInvalid?: boolean;
  type: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  autocomplete?: string;
  autofocus?: boolean;
  inputClassName?: string;

}

const Input:React.FC<IProps> = (
  {
    label,
    placeholder,
    className,
    type,
    ariaInvalid,
    error,
    value,
    disabled,
    autocomplete,
    autofocus,
    inputClassName,
    ...props
  },
  ref
) => {
  return (
      <div className="flex flex-col">
        <label className="text-black">{label}</label>
        <input type={type} placeholder={placeholder} className="p-2 border border-solid border-black"/>
      </div>
  );
};

export default Input;
