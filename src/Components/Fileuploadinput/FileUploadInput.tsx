import React, { useState } from 'react';
import Cancelicon from '/assets/png-icons/Cancellation.png';
import Picture from '/assets/png-icons/Picture.png';
import Upload from '/assets/png-icons/Upload.png';

interface FileUploadInputProps {
    maxSizeMB: number;
    required?: boolean;
    title?: string;
}

const FileUploadInput: React.FC<FileUploadInputProps> = ({ maxSizeMB, title, required = false }) => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > maxSizeMB * 1024 * 1024) {
                setError(`File size exceeds ${maxSizeMB}MB.`);
                setFile(null);
            } else {
                setError('');
                setFile(selectedFile);
            }
        }
    };

    const handleCancel = () => {
        setFile(null);
        setError('');
    };

    // Generate a unique ID for the input element
    const inputId = `file-upload-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className='border-4 border-dotted border-gray-200 rounded-xl p-4'>
            <h3>{title}</h3>
            <div className={file ? 'self-stretch p-4 bg-lime-50 rounded-xl border-4 border-dotted border-gray-200 justify-start items-center gap-4' : 'self-stretch p-4 bg-gray-100 rounded-xl border-4 border-dotted border-gray-200 justify-start items-center gap-4'}>
                <div className={file ? 'items-center gap-2 flex' : 'justify-center items-center gap-2 flex'}>
                    <div className={file ? `w-8 h-8 bg-lime-200 rounded-lg justify-center items-center gap-2.5 flex` : ''}>
                        <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                                {file && (
                                    <div className="flex items-center">
                                        <img src={Picture} alt='picture icon' />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {!file && <img src={Upload} className="w-6 h-6" alt="Upload Icon" />}
                    <label htmlFor={inputId} className="cursor-pointer">
                        <div className="flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-zinc-950 text-md font-bold font-['Mulish'] leading-[14px]">
                                {file ? file.name : <h3 className='text-gray-400 font-semi-bold'>Drag and drop or <span className='text-green-500'>browse</span></h3>}
                            </div>
                            <div className="text-slate-400 text-xs font-normal font-['Mulish'] leading-3">
                                {file ? `${(file.size / 1024).toFixed(2)} KB` : ''}
                            </div>
                        </div>
                    </label>
                    {file && (
                        <button onClick={handleCancel} className="absolute right-[-1px] mr-10">
                            <img src={Cancelicon} alt='cancel icon' />
                        </button>
                    )}
                    <input
                        id={inputId}
                        type="file"
                        className="hidden"
                        onChange={handleChange}
                        required={required}
                    />
                </div>
                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
            <p className='text-sm text-gray-400'>Scan the copy of your original document (pdf, png, jpg)</p>
            <div className='text-sm text-gray-400'>{`Maximum file size: ${maxSizeMB}MB`}</div>
        </div>
    );
};

export default FileUploadInput;