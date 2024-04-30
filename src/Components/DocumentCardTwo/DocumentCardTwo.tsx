import React, { useState } from 'react';

interface DocumentCardTwoProps {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    buttonText?: string;
    width?: number | string;
    height?: number | string;
}

const DocumentCardTwo: React.FC<DocumentCardTwoProps> = ({ icon, title, subtitle, buttonText, width, height }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{ width, height }}
            className={`w-full h-full px-2.5 py-4 rounded-xl border flex-col justify-start items-center gap-2.5 inline-flex transition-all duration-200 ${isHovered ? 'bg-gray-200 border-gray-300' : 'bg-white border-gray-200'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon &&
                <div className="w-8 h-8 p-2 rounded-3xl border flex justify-center items-center">
                    <div>{icon}</div>
                </div>
            }
            <div className="space-y-[-2px]">
                <div className="text-center text-slate-600 text-xs font-bold">{title}</div>
                <div className="text-xs text-center font-normal italic">{subtitle}</div>
            </div>
            {isHovered && (
                <div className=" py-1.5 px-16 bg-green-500 hover:bg-white hover:text-gray-300 text-white text-xs flex justify-center items center rounded-[20px]">
                    {buttonText}
                </div>
            )}
        </div>
    );
};

export default DocumentCardTwo;