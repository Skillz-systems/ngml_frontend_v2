import React, { useState } from 'react';
import AltDownArrow from '/assets/png-icons/AltDownArrow.png';
import Eyeclosed from '/assets/png-icons/Eyeclosed.png';
import Eyeopen from '/assets/png-icons/Eyeopen.png';

interface CustomInputProps {
  type: 'text' | 'password' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox';
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  options?: string[];
  error?: string;
  icon?: React.ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  options,
  error,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const inputClasses = `appearance-none block w-full px-3 py-2 border ${
    error ? 'border-red-500' : 'border-gray-300'
  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;

  const containerClasses = 'mt-1 relative rounded-md shadow-sm';

  const renderInput = () => {
    switch (type) {
      case 'text':
      case 'password':
      case 'date':
      case 'number':
        return (
          <input
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={inputClasses}
          />
        );
      case 'select':
        return (
          <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClasses}>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={inputClasses}
          />
        );
      case 'checkbox':
        return (
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={containerClasses}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={label}>
        {label}
      </label>
      <div className={containerClasses}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon && <span className="text-gray-500 sm:text-sm">{icon}</span>}
        </div>
        {renderInput()}
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={handleTogglePassword}
            >
              {showPassword ? <img src={Eyeclosed} alt='eyeclosed' /> : <img src={Eyeopen} alt='eyeopen' />}
            </button>
          </div>
        )}
        {type === 'select' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img src={AltDownArrow} alt='Alt down arrow' />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default CustomInput;