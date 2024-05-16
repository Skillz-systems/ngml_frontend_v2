import React, { ChangeEvent, useState } from 'react';
import images from '../../assets/index';

/**
 * CustomInput Component - A customizable input component for various input types.
 *
 * @component
 *
 * @param {Object} props - The properties of the CustomInput component.
 * @param {'text' | 'password' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio'} props.type - The type of input to render.
 * @param {string} props.label - The label for the input.
 * @param {string | number | boolean | readonly string[]} props.value - The current value of the input.
 * @param {(value: string | number | boolean | readonly string[] | undefined) => void} props.onChange - The function to be called when the input value changes.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {string[]} [props.options] - The options for select or radio input types.
 * @param {string} [props.error] - The error message to display.
 * @param {boolean} [props.required=false] - Whether the input is required.
 * @param {React.ReactNode} [props.icon] - The icon to be displayed with the input.
 * @param {'default' | 'customStyle1' | 'customStyle2' | 'customStyle3' | 'customStyle4' | 'customStyle5'} [props.styleVariant='default'] - The style variant for the input.
 * @returns {JSX.Element} The rendered CustomInput component.
 */

interface CustomInputProps {
    type: 'text' | 'password' | 'date' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio';
    label?: string;
    value?: string | number | boolean | readonly string[];
    handleChangeEvent: (value: string) => void; 
    placeholder?: string;
    options?: string[];
    error?: string;
    required?: boolean;
    icon?: React.ReactNode;
    styleVariant?: 'default' | 'customStyle1' | 'customStyle2' | 'customStyle3' | 'customStyle4' | 'customStyle5'
}

const CustomInput: React.FC<CustomInputProps> = ({
    type,
    label,
    value='',
    handleChangeEvent,
    placeholder,
    options=[],
    error,
    required = false,
    icon,
    styleVariant = 'default',
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

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        console.log('Select changed to:', selectedValue);
        handleChangeEvent(selectedValue);
    };
    

    const styleVariants = {
        default: `appearance-none block w-full px-3 py-3 border ${error ? 'border-red-500' : 'border-b border-solid border-2 border-gray-300'
            } rounded-[13px] shadow-sm placeholder-gray-400 placeholder:italic pl-12 focus:outline-none focus:ring-gray-700 focus:border-lime-200 sm:text-[12px]`, //default input
        customStyle1: 'border border-solid border-lime-500 placeholder:font-[400] font-[500] placeholder:italic placeholder-gray-400 pl-12 rounded-full w-full px-4 py-2 focus:outline-none focus:border-t-2 focus:ring-lime-500 focus:bg-gray-100', // inputs with well rounded border radius
        customStyle2: 'rounded-[13px] placeholder-gray-400 placeholder:italic placeholder:font-[400] font-[500] pl-12 focus:outline-none focus:ring-gray-700 focus:bg-gray-200 sm:text-[12px] border border-2 solid w-full py-2', // for inputs with gray background focused
        customStyle3: 'rounded-full placeholder-gray-300 placeholder:italic placeholder:font-[400] font-[500] pl-6 pr-6 focus:outline-none focus:border-lime-700 focus:bg-gray-100 sm:text-[12px] border border-2 solid w-full py-3', // for inputs with gray background focused, rounded radius and wider input 
        customStyle4: 'placeholder-black pl-12 focus:outline-none font-[400] focus:border-lime-200 focus:bg-white-600 border-1 solid w-full py-2', // no border input
        customStyle5: 'rounded-[13px] placeholder-gray-400 placeholder:italic placeholder:font-[400] font-[500] pl-12 focus:outline-none focus:ring-gray-700 sm:text-[12px] border border-2 solid w-full py-3', // for inputs with gray background
    };

    const inputClasses = `${styleVariants[styleVariant]} ${!icon ? 'pl-3' : ''
        } ${touched && !value ? 'border-red-500' : ''}`;


    const containerClasses = 'mt-1 relative ';
    const renderError = () => {
        if (touched && !value && required) {
            return <p className="mt-2 text-sm text-red-600">This field is required</p>;
        }
        return null;
    };

    const renderInput = () => {
        switch (type) {
            case 'text':
            case 'password':
            case 'date':
            case 'number':
                return (
                    <input
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        value={value as string | number | undefined}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeEvent(e.target.value)}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className={inputClasses}
                    />
                );
            case 'select':
                return (
                    <div className='relative'>

                        <select
                            value={value as string}
                            onChange={handleSelectChange}
                            className={`${inputClasses} appearance-none select-none`}
                            onBlur={handleBlur} >

                            <option value="" disabled hidden>{placeholder || 'Select an option'}</option>
                            {options?.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <img src={images.AltDownArrow} alt='Alt down Arrow' />
                        </div>
                    </div>
                );
            case 'textarea':
                return (
                    <textarea
                        value={value as string}
                        onChange={(e) => handleChangeEvent(e.target.value)}
                        placeholder={placeholder}
                        className={inputClasses}
                        onBlur={handleBlur}
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
                                    onChange={() => handleChangeEvent(option)}
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
            <label className={`block ${required ? 'text-gray-700' : ''} text-[14px] ml-[6px] font-[400]`} >
                {label}
                {label && required && <span className="text-red-500">*</span>}
            </label>
            <div className={containerClasses}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" >
                    {icon && <span className="text-gray-500 sm:text-sm bg-lime-200 rounded-full p-1" >{icon}</span>}
                </div>
                {renderInput()}
                {type === 'password' && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button
                            type="button"
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <img src={images.Eyeclosed} alt='eyeclosed' /> : <img src={images.Eyeopen} alt='eyeopen' />}
                        </button>
                    </div>
                )}
            </div>
            {renderError()}
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};
export default CustomInput;





