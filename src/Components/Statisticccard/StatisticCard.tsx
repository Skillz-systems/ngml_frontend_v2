import React from 'react';
import DataBox from '/assets/png-icons/DataBox.png';

/**
 * A customizable statistic card component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the statistic.
 * @param {string|number} props.value - The value for the statistic.
 * @param {boolean} [props.primary=true] - Determines whether the card is of primary type. Defaults to true.
 * @param {React.ReactNode} [props.labelSpan] - Optional JSX element to be rendered directly under the label.
 * @param {('sm' | 'md' | 'lg')} [props.size='md'] - Size variant for the statistic card.
 * @returns {JSX.Element} The rendered StatisticCard component.
 */

interface StatisticCardProps {
  label: string;
  value: string | number;
  primary?: boolean;
  labelSpan?: React.ReactNode;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  label,
  value,
  primary = true,
  labelSpan,
}) => {
  const labelBgColor = primary ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500';
  const valueBgColor = primary ? 'bg-green-500 text-white' : 'bg-white-500 text-black-700';

  return (
    <div className={`w-56 h-44 relative rounded-[20px] ${!primary ? 'border-2' : '' }`}>
      <img className="absolute w-full inset-0 z-0 object-cover h-fit" src={DataBox} alt="data box" />
      <div className={`p-3 w-full rounded-t-[20px] ${labelBgColor} h-2/5 flex flex-col justify-center items-center`}>
        <span className='text-xl'>{label}</span>
        {labelSpan && <div className="mt-[-7px]">{labelSpan}</div>}
      </div>
      <div className={`w-full h-3/5 ${valueBgColor} rounded-b-[20px] flex justify-center items-center`}>
        <h4 className='text-3xl font-medium'>{value}</h4>
      </div>
    </div>
  );
};

export default StatisticCard;