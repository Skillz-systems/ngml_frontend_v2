import React from 'react';
import DataBox from '/assets/png-icons/DataBox.png';

/**
 * A customizable statistic card component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the statistic.
 * @param {string|number} props.value - The value for the statistic.
 * @param {string} [props.width='w-32'] - The width of the card. Accepts Tailwind CSS classes.
 * @param {string} [props.height='h-32'] - The height of the card. Accepts Tailwind CSS classes.
 * @param {boolean} [props.primary=true] - Determines whether the card is of primary type. Defaults to true.
 * @param {React.ReactNode} [props.labelSpan] - Optional JSX element to be rendered directly under the label.
 * @returns {JSX.Element} The rendered StatisticCard component.
 */

interface StatisticCardProps {
  label: string;
  value: string | number;
  width?: string;
  height?: string;
  primary?: boolean;
  labelSpan?: React.ReactNode; // New optional prop for the span tag
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  label,
  value,
  width = 'w-32',
  height = 'h-32',
  primary = true,
  labelSpan, // Destructure labelSpan from props
}) => {
  const labelBgColor = primary ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500';
  const valueBgColor = primary ? 'bg-green-500 text-white' : 'bg-white-500';

  return (
    <div className={`relative rounded-[20px] overflow-hidden ${width} ${height}`}>
      <img
        className="absolute inset-4 z-4 object-cover h-full"
        src={DataBox}
        alt="data box"
      />
      <div className="flex flex-col justify-center items-center h-full">
        <div
          className={`w-full ${labelBgColor} p-3 rounded-t-[20px] text-center h-full`}
        >
          <span className="text-lg font-bold">{label}</span>
          <div className='mt-[-7px]'>
          {labelSpan && <span>{labelSpan}</span>}
          </div>
        </div>
        <div
          className={`w-full ${valueBgColor} p-4 rounded-b-[20px] text-center h-full`}
        >
          <span className="text-2xl font-bold">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;