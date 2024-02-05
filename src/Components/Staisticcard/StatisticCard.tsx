import React from 'react';

type StatCardProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  label: string;
  value: string | number;
};

const StatisticCard: React.FC<StatCardProps> = ({ type, label, value }) => {
  const getCardClass = () => {
    switch (type) {
      case 'primary':
        return 'bg-blue-500';
      case 'secondary':
        return 'bg-green-500';
      case 'tertiary':
        return 'bg-yellow-500';
      default:
        return '';
    }
  };

  return (
    <div className={`p-4 rounded-md shadow-md ${getCardClass()}`}>
      <p className="text-white text-lg font-semibold">{label}</p>
      <p className="text-white text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatisticCard;