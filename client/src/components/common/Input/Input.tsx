import React, { useState, forwardRef } from 'react';
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
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

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = (
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
  const [isVisibility, setIsVisibility] = useState<boolean>(false);

  return (
    <div className="flex flex-col relative">
      <label className="text-black mb-1">{label}</label>
      <div className="flex items-center">
        {error && (
          <div className="absolute right-2 top-7 text-gray-40">
            <ExclamationCircleIcon
              className="h-5 w-6 shrink-0 text-red-500 group-hover:text-opacity-80"
              aria-hidden="true"
            />
          </div>
        )}
        {type === 'password' && (
          <div className="absolute left-2 top-7 z-4">
            <button
              type="button"
              onClick={() => setIsVisibility((prev) => !prev)}
            >
              {!isVisibility ? (
                <EyeIcon
                  className="h-5 w-6 shrink-0 text-black group-hover:text-opacity-80"
                  aria-hidden="true"
                />
              ) : (
                <EyeSlashIcon
                  className="h-5 w-6 shrink-0 text-black group-hover:text-opacity-80"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        )}
        <input
          ref={ref}
          type={type === 'password' ? (isVisibility ? 'text' : type) : type}
          placeholder={placeholder}
          {...props}
          className={`z-1 px-3 py-2 w-full ${error && 'border-red-500'} ${type === 'password' ? 'pl-10' : ''} ${inputClassName}`}
          value={value}
          disabled={disabled}
          autoFocus={autofocus}
          autoComplete={autocomplete}
        />
      </div>
      {error && (
        <small role="alert" className="text-red-500">
          {error}
        </small>
      )}
    </div>
  );
};

export default forwardRef(Input);
