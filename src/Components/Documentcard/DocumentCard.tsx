import React, { useState } from 'react';
import Rightarrow from '/assets/png-icons/Rightarrow.png';
import DataBox from '/assets/png-icons/DataBox.png';

/**
 * DocumentCard component displays a card with various types based on props.
 * @param {Object} props - The props object containing details of the document card.
 * @param {'withLink' | 'withoutLink' | 'withReport'} props.type - The type of the document card.
 * @param {string} props.icon - The URL of the icon to be displayed in the card.
 * @param {string} props.title - The title of the document.
 * @param {string} [props.subtitle] - The subtitle of the document.
 * @param {string} [props.linkText] - The text for the link.
 * @param {string} [props.linkText2] - The text for the second link.
 * @returns {JSX.Element} A React JSX element representing the DocumentCard component.
 */

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

  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


  return (
    <div
      className={`bg-gray-100 shadow-md rounded-[20px] p-4 mb-4 md:w-80 ${hovered ? 'bg-gray-100' : ''}`}
      style={{ backgroundImage: type === 'withReport' ? `url(${DataBox})` : 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={icon}
        alt="Icon"
        className={`w-8 h-8 mr-2 ${
          (type === 'withLink' && hovered) || (type !== 'withReport' && hovered) ? 'bg-gray-100 p-2 border-2' : type === 'withLink' || type !== 'withReport' ? 'bg-green-500 p-2' : ''
        } rounded-full`}
      />
      {type === 'withoutLink' && hovered ? <div className="">
        <h2 className={`text-lg font-bold ${type === 'withoutLink' || type === 'withReport' ? 'mt-[90px]' : ''}`}>{title}</h2>
        {subtitle && (
          <p
            className={`text-sm mb-2 text-gray-400 italic ${
              hovered ? 'text-xs' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </div> : <div className="mt-20">
        <h2 className={`text-lg font-bold ${type === 'withoutLink' || type === 'withReport' ? 'mt-[120px]' : ''}`}>{title}</h2>
        {subtitle && (
          <p
            className={`text-sm mb-2 text-gray-400 italic ${
              hovered ? 'text-xs' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>}
      {(type === 'withLink') && linkText && (
        <div className="flex items-center justify-between border-2 p-1 rounded-[10px]">
          <a className="block text-sm text-gray-400">{hovered ? 'Last edited' : linkText}</a>
          <a href="#" className="block text-gray-700 font-[600]">
            {hovered ? formattedDate : linkText2}
          </a>
        </div>
      )}
      {type === 'withReport' && (
        <div className="flex items-center justify-between mt-2">
          <a href="#" className="text-gray-500">
            Reports
          </a>
          <img src={Rightarrow} alt="Report Icon" className={`w-6 h-6 ${hovered ? 'bg-gray-100 rounded-full p-2 border-2' : ''}`} />
        </div>
      )}
      {(type !== 'withReport' && type !== 'withLink')  &&(
         <div className={`flex items-center justify-between ${hovered ? 'border-2' : ''} p-1 rounded-[10px]`}>
         <a className="block text-sm text-gray-400">{hovered ? 'Last edited' : ''}</a>
         <a href="#" className="block border-gray-400 text-gray-700 font-[600]">
           {hovered ? formattedDate : ''}
         </a>
       </div>
      )}
    </div>
  );
};

export default DocumentCard;