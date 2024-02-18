import React, { useState } from 'react';

// Define props interface for the document card
interface DocumentCardProps {
  type: 'withLink' | 'withoutLink' | 'withReport';
  icon: string;
  title: string;
  subtitle?: string;
  linkText?: string;
  linkText2?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ type, icon, title, subtitle, linkText, linkText2 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-gray-200 shadow-md rounded-[20px] p-4 mb-4 md:w-80 ${hovered ? 'bg-gray-100' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={icon}
        alt="Icon"
        className={`w-8 h-8 mr-2 ${
          (type === 'withLink' && hovered) || (type !== 'withReport' && hovered) ? 'bg-gray-100 p-2' : type === 'withLink' || type !== 'withReport' ? 'bg-green-500 p-2' : ''
        } rounded-full`}
      />
      <div className="mt-20">
        <h2 className="text-lg font-bold">{title}</h2>
        {subtitle && (
          <p
            className={`text-sm mb-2 text-gray-400 italic ${
              hovered ? 'text-xs' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {(type === 'withLink') && linkText && (
        <div className="flex items-center justify-between border-2 p-2 rounded-[10px]">
          <a className="block hover:text-blue-700 text-sm text-gray-400">{hovered ? 'Last edited' : linkText}</a>
          <a href="#" className="block border-gray-400 text-gray-700 font-[600] hover:text-blue-700">
            {hovered ? '12/11/2024' : linkText2}
          </a>
        </div>
      )}
      {type === 'withReport' && (
        <div className="flex items-center justify-between mt-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Reports
          </a>
          <img src="/path/to/icon" alt="Report Icon" className="w-4 h-4" />
        </div>
      )}
      {(type !== 'withReport' && type !== 'withLink')  &&(
         <div className={`flex items-center justify-between ${hovered ? 'border-2' : ''} p-2 rounded-[10px]`}>
         <a className="block hover:text-blue-700 text-sm text-gray-400">{hovered ? 'Last edited' : ''}</a>
         <a href="#" className="block border-gray-400 text-gray-700 font-[600] hover:text-blue-700">
           {hovered ? '12/11/2024' : ''}
         </a>
       </div>
      )}
    </div>
  );
};

export default DocumentCard;