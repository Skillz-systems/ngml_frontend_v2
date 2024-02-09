import React from 'react';
import DataBox from '/assets/png-icons/DataBox.png'

/**
 * Represents a statistical card component.
 * This component displays statistical information with various styles based on the provided type.
 * @component
 * @param {object} props - The props object.
 * @param {'primary' | 'secondary' | 'tertiary'} props.type - The type of the card. Determines the color scheme and layout.
 * @param {string} props.label - The label displayed on the card.
 * @param {string | number} props.value - The value displayed on the card.
 * @param {React.ReactNode} [props.icon] - The optional icon displayed on the card.
 * @param {string} props.text - The text content of the card, displayed in tertiary type cards.
 * @param {string} props.reportText - The report text displayed on the card.
 * @param {React.ReactNode} props.reportIcon - The report icon displayed on the card.
 * @returns {JSX.Element} - The rendered StatisticCard component.
 */

type StatCardProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  text: string;
  reportText: string;
  reportIcon: React.ReactNode;
};

const StatisticCard: React.FC<StatCardProps> = ({ type, label, value, icon, reportText, reportIcon, text }) => {

    /**
   * Determines the background color for the card header based on its type.
   * @returns {string} - The CSS class for the header background color.
   */

  const getHeaderColor = () => {
    switch (type) {
      case 'primary':
        return 'bg-green-700';
      case 'secondary':
        return 'bg-gray-200';
      case 'tertiary':
        return '';
      default:
        return '';
    }
  };

    /**
   * Determines the background color for the card body based on its type.
   * @returns {string} - The CSS class for the body background color.
   */

  const getBodyColor = () => {
    switch (type) {
      case 'primary':
        return 'bg-green-500';
      case 'secondary':
        return 'bg-white-200 text-center';
      case 'tertiary':
        return 'py-[95px] rounded-[20px]';
      default:
        return '';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'primary':
        return 'bg-yellow-300';
      case 'secondary':
        return 'bg-white';
      case 'tertiary':
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="w-full p-6">
      {type !== 'tertiary' && (
        <div className={type === 'primary' ? `text-white text-lg font-semibold p-[50px] rounded-t-[20px] shadow-md text-center ${getHeaderColor()}` : `text-gray-600 text-lg font-semibold p-[50px] rounded-t-[20px] shadow-md text-center ${getHeaderColor()}`}>
          {label}
        </div>
      )}
      <div className={type === 'primary' ? `text-white text-3xl font-bold p-8 rounded-b-[20px] shadow-md text-center py-20 ${getBodyColor()}` : `text-3xl font-bold p-8 rounded-b-[20px] shadow-md text-black py-20 ${getBodyColor()}`}>
        {icon && <div className='absolute top-10'>{icon}</div>}
        {type === 'tertiary' ? <h3 className='pt-[60px] relative top-[60px]'>{text}</h3> : <div>{value}</div>}
        <div className='flex items-center justify-between relative top-[60px]'>
        <img src={DataBox} alt="Background" className="absolute inset-0 object-cover top-[-250px] w-[300px]" />
        {reportText && <div className='text-gray-300 text-[15px]'>{reportText}</div>}
        {reportIcon && <div className='text-gray-300 text-[15px]'>{reportIcon}</div>}
        </div>
        </div>
    </div>
  );
};

export default StatisticCard;