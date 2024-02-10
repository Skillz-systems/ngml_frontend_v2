import React from 'react';
import DataBox from '/assets/png-icons/DataBox.png';
import { cva } from 'class-variance-authority';


/**
 * A customizable statistic card component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the statistic.
 * @param {string|number} props.value - The value for the statistic.
 * @param {boolean} [props.primary=true] - Determines whether the card is of primary type. Defaults to true.
 * @param {React.ReactNode} [props.labelSpan] - Optional JSX element to be rendered directly under the label.
 * @returns {JSX.Element} The rendered StatisticCard component.
 */

interface StatisticCardProps {
  label: string;
  value: string | number;
  primary?: boolean;
  labelSpan?: React.ReactNode;
}

const cardStyles = cva(
  [
    'rounded-[20px]',
    'overflow-hidden',
    'h-full',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'text-center',
    'relative',
  ],
  {
    variants: {
      size: {
        sm: 'w-32 h-32',
        md: 'w-48 h-48',
        lg: 'w-64 h-64',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const StatisticCard: React.FC<StatisticCardProps> = ({
  label,
  value,
  primary = true,
  labelSpan,
}) => {
  const labelBgColor = primary ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500';
  const valueBgColor = primary ? 'bg-green-500 text-white' : 'bg-white-500';

  return (
    <div className={cardStyles({ size: 'md' })}>
      <img className="absolute inset-0 z-0 object-cover h-full" src={DataBox} alt="data box" />
      <div className={`p-3 w-full rounded-t-[20px] ${labelBgColor}`}>
        <span className="text-lg font-bold">{label}</span>
        {labelSpan && <div className="mt-[-7px]">{labelSpan}</div>}
      </div>
      <div className={`p-4 rounded-b-[20px] w-full ${valueBgColor}`}>
        <span className="text-2xl font-bold">{value}</span>
      </div>
    </div>
  );
};

export default StatisticCard;