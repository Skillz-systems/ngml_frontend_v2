import React from 'react';

interface StatisticRectangleCardProps {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
  valueColor?: string;
  backgroundColor?: string;
  color?: string;
  size?: string;
  iconBgColor?: string;
  iconSize?: string;
}

const StatisticRectangleCard: React.FC<StatisticRectangleCardProps> = ({
  icon = null,
  title = 'Pending Request',
  value='32',
  valueColor='text-gray-700',
  backgroundColor = 'bg-white',
  color = 'text-gray-400',
  size = 'w-64',
  iconBgColor = 'bg-green-500 rounded-[5px]',
  iconSize = 'w-5'
}) => {
  return (
    <div className={`rounded-lg p-4 ${backgroundColor} ${color} ${size} shadow-sm flex items-center justify-between border-2`}>
      <div className='flex items-center gap-2'>
        <div className={`${iconBgColor} p-1`}>
      {icon && <div className={`${iconSize}`}>{icon}</div>}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div>
      <h3 className={`text-lg font-bold ${valueColor}`}>{value}</h3>
      </div>
    </div>
  );
};

export default StatisticRectangleCard;