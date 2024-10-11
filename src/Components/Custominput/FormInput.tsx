
import classNames from 'classnames';
import React, { ChangeEvent, DragEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface Option {
    label: string;
    value: string;
}

interface FormInputProps {
    type: 'number' | 'text' | 'password' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'location' | 'email' | 'tel' | 'hidden' | 'file';
    label?: string;
    value?: string;
    onChange: (value: string | File | null) => void;
    options?: Option[];
    required?: boolean;
    placeholder?: string;
    maxSizeMB?: number;
    allowedFileTypes?: string[];
}

const FormInput: React.FC<FormInputProps> = ({
    type,
    label,
    value = '',
    onChange,
    options = [],
    required = false,
    placeholder,
    maxSizeMB = 5,
    allowedFileTypes = [],
}) => {
    const [error, setError] = useState<string>('');
    const [dragging, setDragging] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    const handleFileChange = (file: File | null) => {
        if (file) {
            if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
                setError(`File size exceeds ${maxSizeMB}MB.`);
                setFile(null);
                onChange(null);
                return;
            }

            if (allowedFileTypes.length && !allowedFileTypes.includes(file.type)) {
                setError(`File type not allowed. Allowed types: ${allowedFileTypes.join(', ')}`);
                setFile(null);
                onChange(null);
                return;
            }

            setError('');
            setFile(file);
            onChange(file);
        } else {
            setFile(null);
            onChange(null);
        }
    };

    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        handleFileChange(droppedFile);
    };
    const inputId = `file-upload-${uuidv4()}`;
    const renderFileInput = () => (
        <div
            className={classNames('border-2 border-dashed border-gray-300 rounded-md p-4', {
                'bg-gray-100': dragging,
            })}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                type="file"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                className="hidden"
                id={`${label}${inputId}`}
                required={required}
                accept={allowedFileTypes.join(',')}
            />
            <label
                htmlFor={`${label}${inputId}`}
                className="cursor-pointer flex flex-col items-center"
            >
                <span className="text-blue-500">Choose a file</span>
                <span className="text-sm text-gray-500">or drag and drop</span>
            </label>
            {file && (
                <div className="mt-2">
                    <p className="text-sm">{file.name}</p>
                    <p className="text-xs text-gray-500">{`${(file.size / 1024 / 1024).toFixed(2)} MB`}</p>
                </div>
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            <p className="mt-2 text-xs text-gray-500">
                {`Maximum file size: ${maxSizeMB}MB`}
                {allowedFileTypes.length > 0 && ` | Allowed types: ${allowedFileTypes.join(', ')}`}
            </p>
        </div>
    );

    const renderInput = () => {
        switch (type) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'hidden':
            case 'tel':
            case 'date':
                return (
                    <input
                        type={type}
                        value={value}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50 invalid:border-red-500"
                        placeholder={placeholder}
                        required={required}
                    />
                );

            case 'textarea':
                return (
                    <textarea
                        value={value}
                        onChange={handleInputChange}
                        className="flex h-14 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50 invalid:border-red-500"
                        placeholder={placeholder}
                        required={required}
                    />
                );

            case 'select':
            case 'location':
                return (
                    <select
                        value={value}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50 invalid:border-red-500"
                        required={required}
                    >
                        <option value="" disabled>{placeholder || 'Select an option'}</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );

            case 'checkbox':
                return (
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={value === 'true'}
                            onChange={(e) => onChange(e.target.checked ? 'true' : 'false')}
                            className=" size-4 rounded-full"
                            required={required}
                        />
                        <span className="ml-2">{placeholder}</span>
                    </div>
                );

            case 'radio':
                return (
                    <div className="space-y-2">
                        {options.map((option) => (
                            <div key={option.value} className="flex items-center">
                                <input
                                    type="radio"
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={handleInputChange}
                                    className="w-4 h-4"
                                    required={required}
                                />
                                <span className="ml-2">{option.label}</span>
                            </div>
                        ))}
                    </div>
                );

            case 'file':
                return renderFileInput();
        }
    };

    return (
        <div className="mb-4 mx-2">
            {label && (
                <label className="block mb-2 text-sm font-medium">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            {renderInput()}
        </div>
    );
};

export default FormInput;