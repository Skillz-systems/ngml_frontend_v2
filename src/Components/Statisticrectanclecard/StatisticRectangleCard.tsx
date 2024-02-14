import React from 'react';

/**
 * A rectangular statistic card component.
 * @component
 * @param {object} props - The component props.
 * @param {React.ReactNode} [props.icon=null] - The icon to display on the card.
 * @param {string} [props.title='Pending Request'] - The title of the card.
 * @param {string} [props.value='32'] - The value to display on the card.
 * @param {string} [props.valueColor='text-gray-700'] - The color of the value text.
 * @param {string} [props.backgroundColor='bg-white'] - The background color of the card.
 * @param {string} [props.color='text-gray-400'] - The color of the text elements on the card.
 * @param {string} [props.size='w-64'] - The size of the card.
 * @param {string} [props.iconBgColor='bg-green-500 rounded-[5px]'] - The background color of the icon container.
 * @param {string} [props.iconSize='w-5'] - The size of the icon.
 * @returns {JSX.Element} A JSX element representing the StatisticRectangleCard component.
 */

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