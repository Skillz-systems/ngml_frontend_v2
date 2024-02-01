import React, { useState } from 'react';
import Eyeclosed from '/assets/png-icons/Eyeclosed.png';
import Eyeopen from '/assets/png-icons/Eyeopen.png';

/**
 * CustomInput Component - A customizable input component for various input types.
 *
 * @component
 * @example
 * <CustomInput
 *   type="text"
 *   label="Username"
 *   value={username}
 *   onChange={(newValue) => setUsername(newValue)}
 *   placeholder="Enter your username"
 *   required
 *   icon={<IconComponent />}
 *   styleVariant="custom1"
 * />
 *
 * @param {Object} props - The properties of the CustomInput component.
 * @param {'text' | 'password' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'search'} props.type - The type of input to render.
 * @param {string} props.label - The label for the input.
 * @param {string | number | boolean} props.value - The current value of the input.
 * @param {(value: string | number | boolean) => void} props.onChange - The function to be called when the input value changes.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {string[]} [props.options] - The options for select or radio input types.
 * @param {string} [props.error] - The error message to display.
 * @param {boolean} [props.required=false] - Whether the input is required.
 * @param {React.ReactNode} [props.icon] - The icon to be displayed with the input.
 * @param {'default' | 'custom1' | 'custom2' | 'custom3' | 'custom4' | 'custom5' | 'custom6'} [props.styleVariant='default'] - The style variant for the input.
 * @returns {JSX.Element} The rendered CustomInput component.
 */

interface CustomInputProps {
    type: 'text' | 'password' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'search';
    label: string;
    value?: string | number | boolean;
    onChange: (value: string | number | boolean) => void;
    placeholder?: string;
    options?: string[];
    error?: string;
    required?: boolean;
    icon?: React.ReactNode;
    styleVariant?: 'default' | 'customStyle1' | 'customStyle2' | 'customStyle3' | 'customStyle4'
}

const CustomInput: React.FC<CustomInputProps> = ({
    type,
    label,
    value,
    onChange,
    placeholder,
    options,
    error,
    required = false,
    icon,
    styleVariant = 'default', // Default to 'default' if styleVariant is not provided
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleBlur = () => {
        setTouched(true);
    };

    const styleVariants = {
        default: `appearance-none block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-b border-solid border-2 border-gray-300'
            } rounded-md shadow-sm placeholder-gray-400 italic pl-12 focus:outline-none focus:ring-gray-700 focus:border-green-100 sm:text-sm`, //default input
        customStyle1: `border border-solid border-green-500 placeholder-gray-400 italic pl-12 rounded-full w-full px-4 py-2 focus:outline-none focus:border-t-2 focus:ring-green-500`, // inputs with well rounded border radius
        customStyle2: `rounded-md placeholder-gray-400 italic pl-12 focus:outline-none focus:ring-gray-700 focus:bg-gray-200 sm:text-sm border border-2 solid w-full py-2`, // for inputs with gray background focused
        customStyle3: `rounded-full placeholder-gray-300 italic pl-12 focus:outline-none focus:border-green-700 focus:bg-gray-100 sm:text-sm border border-2 solid w-full py-4`, // for inputs with gray background focused, rounded radius and wider input 
        customStyle4: `placeholder-black pl-12 focus:outline-none focus:border-green-200 focus:bg-white-600 border-1 solid w-full py-2`, // no border input
    };

    const inputClasses = `${styleVariants[styleVariant]} ${touched && !value ? 'border-red-500' : ''}`;


    const containerClasses = 'mt-1 relative';

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
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className={inputClasses}
                    />
                );
            case 'select':
                return (
                    <div className=''>
                        <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClasses}>
                            {options?.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
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
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="toggle"
                            checked={isChecked}
                            onChange={handleToggle}
                            className="hidden"
                        />
                        <label
                            htmlFor="toggle"
                            className={`cursor-pointer relative w-8 h-4 rounded-full ${isChecked ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        >
                            <div
                                className={`toggle-dot absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${isChecked ? 'transform translate-x-full' : 'transform translate-x-0'
                                    }`}
                            ></div>
                        </label>
                    </div>
                );
            case 'radio':
                return (
                    <div>
                        {options?.map((option) => (
                            <div key={option} className="flex items-center p-2">
                                <input
                                    type="radio"
                                    id={option}
                                    value={option}
                                    checked={value === option}
                                    onChange={() => onChange(option)}
                                    className="w-5 h-5"
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
            <label className={`block ${required ? 'font-bold' : ''}`}>
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <div className={containerClasses}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icon && <span className="text-gray-500 sm:text-sm bg-green-200 rounded-full p-1">{icon}</span>}
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





