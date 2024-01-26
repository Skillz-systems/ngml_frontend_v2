import React, { useState } from 'react';
import AltDownArrow from '/assets/png-icons/AltDownArrow.png';
import Eyeclosed from '/assets/png-icons/Eyeclosed.png';
import Eyeopen from '/assets/png-icons/Eyeopen.png';

/**
 * CustomInput component for various input types (text, password, date, number, select, textarea, checkbox).
 *
 * @component
 * @example
 * <CustomInput
 *   type="text"
 *   label="Username"
 *   value={username}
 *   onChange={(value) => setUsername(value)}
 *   placeholder="Enter your username"
 *   error={usernameError}
 *   icon={<i className="fas fa-user" />}
 * />
 *
 * @example
 * <CustomInput
 *   type="select"
 *   label="Select Option"
 *   value={selectedOption}
 *   onChange={(value) => setSelectedOption(value)}
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   error={selectError}
 *   icon={<i className="fas fa-caret-down" />}
 * />
 *
 * @param {Object} props - The properties of the CustomInput component.
 * @param {string} props.type - The type of the input ('text', 'password', 'date', 'number', 'select', 'textarea', 'checkbox').
 * @param {string} props.label - The label for the input.
 * @param {string | number} props.value - The current value of the input.
 * @param {(value: string | number) => void} props.onChange - The function called when the input value changes.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {string[]} [props.options] - The options for the select input (applicable only for type 'select').
 * @param {string} [props.error] - The error message to be displayed.
 * @param {React.ReactNode} [props.icon] - The icon to be displayed with the input.
 *
 * @returns {JSX.Element} JSX.Element
 */

interface CustomInputProps {
  type: 'text' | 'password' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio';
  label: string;
  value: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
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
    error ? 'border-red-500' : 'border-b border-solid border-2 border-NGML-SEC'
  } rounded-md shadow-sm placeholder-gray-400 italic pl-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-400 sm:text-sm`;

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
          <div className='relative'>
            <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClasses}>
              {options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <img src={AltDownArrow} alt='Alt down arrow' className='cursor-pointer'/>
            </div>
          </div>
        );
      case 'textarea':
        return (
          <textarea
            value={value as string}
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
      case 'radio':
        return (
          <div>
            {options?.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={option}
                  value={option}
                  checked={value === option}
                  onChange={() => onChange(option)}
                />
                <label htmlFor={option} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={containerClasses}>
      <label className="block text-[14px] font-normal text-gray-500" htmlFor={label}>
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
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default CustomInput;