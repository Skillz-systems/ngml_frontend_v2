import React, { useState } from 'react';

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
  title,
  value = '32',
  valueColor = 'text-gray-700',
  backgroundColor = 'bg-white',
  color = 'text-gray-700',
  size,
  iconBgColor = 'bg-[#00AF50]',
  iconSize = 'w-5 '
}) => {
  const [iconHovered, setIconHovered] = useState(false);

  const handleIconHover = () => {
    setIconHovered(true);
  };

  const handleIconLeave = () => {
    setIconHovered(false);
  };

  return (
    <div style={{ width: '100%', height: '100%', }}
      className={`rounded-[12px] p-[8px]
      ${backgroundColor} ${color} ${size} shadow-sm flex items-center
      justify-between `} aria-label={title}
    >
      <div className='flex items-center gap-2 w-[100%]'>
        <div
          className={`${iconBgColor} p-1`}
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}
          style={{ backgroundColor: iconHovered ? '#dddddd' : '' }}
        >
          {icon && <div className={`${iconSize}`} style={{ fontSize: 'small', }}>{icon}</div>}
        </div>
        <h3 className="text-lg font-[400] text-[#828DA9] ">{title}</h3>
      </div>
      <div >
        <h3 className={`text-lg font-bold ${valueColor}`}>{value}</h3>
      </div>
    </div>
  );
};

export default StatisticRectangleCard;