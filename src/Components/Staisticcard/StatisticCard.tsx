import React from 'react';

type StatCardProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  label: string;
  value: string | number;
  icon?: string;
};

const StatisticCard: React.FC<StatCardProps> = ({ type, label, value, icon }) => {
  const getHeaderColor = () => {
    switch (type) {
      case 'primary':
        return 'bg-green-700';
      case 'secondary':
        return 'bg-gray-200';
      case 'tertiary':
        return ''; // No header background for tertiary
      default:
        return '';
    }
  };

  const getBodyColor = () => {
    switch (type) {
      case 'primary':
        return 'bg-green-500';
      case 'secondary':
        return 'bg-white-200';
      case 'tertiary':
        return ''; // No body background for tertiary
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      {type !== 'tertiary' && (
        <div className={type === 'primary' ? `text-white text-lg font-semibold p-4 rounded-t-md shadow-md text-center ${getHeaderColor()}` : `text-gray-600 text-lg font-semibold p-4 rounded-t-md shadow-md text-center ${getHeaderColor()}`}>
          {label}
        </div>
      )}
      <div className={type === 'primary' ? `text-white text-3xl font-bold p-8 rounded-b-md shadow-md text-center ${getBodyColor()}` : `text-white text-3xl font-bold p-8 rounded-b-md shadow-md text-center text-black ${getBodyColor()}`}>
        {icon && <img src={icon} alt="Icon" className="mb-4" />}
        {value}
      </div>
    </div>
  );
};

export default StatisticCard;