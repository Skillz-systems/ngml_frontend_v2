import React from 'react';

// Define props interface for the document card
interface DocumentCardProps {
  type: 'withLink' | 'withoutLink' | 'withReport';
  icon: string;
  title: string;
  subtitle?: string;
  linkText?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ type, icon, title, subtitle, linkText }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 md:w-80">
      <div className="flex items-center">
        <img src={icon} alt="Icon" className="w-8 h-8 mr-2" />
      </div>
      <h2 className="text-lg font-bold">{title}</h2>
      {subtitle && <p className="text-sm mt-2 mb-4">{subtitle}</p>}
      {type === 'withLink' && linkText && (
        <a href="#" className="block border-b border-gray-400 text-blue-500 hover:text-blue-700">
          {linkText}
        </a>
      )}
      {type === 'withReport' && (
        <div className="flex items-center justify-between mt-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Reports
          </a>
          <img src="/path/to/icon" alt="Report Icon" className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default DocumentCard;