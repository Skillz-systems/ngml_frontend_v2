import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/Utils';
import images from '../../assets/index';

const cardBase = cva(
  'relative w-56 h-44 rounded-[20px]',
  {
    variants: {
      primary: {
        true: '',
        false: 'border border-gray-100',
      },
    },
    defaultVariants: {
      primary: true,
    },
  }
);

// Define the styles for the label section
const labelBase = cva(
  'p-3 w-full rounded-t-[20px] h-2/5 flex flex-col justify-center items-center text-[24px] font-[400]',
  {
    variants: {
      primary: {
        true: 'bg-green-700 text-white',
        false: 'bg-gray-100 text-gray-500',
      },
    },
    defaultVariants: {
      primary: true,
    },
  }
);

const valueBase = cva(
  'w-full h-3/5 flex justify-center items-center text-3xl font-medium rounded-b-[20px]',
  {
    variants: {
      primary: {
        true: 'bg-green-500 text-white',
        false: 'bg-white-500 text-black-700',
      },
    },
    defaultVariants: {
      primary: true,
    },
  }
);

interface StatisticCardProps extends VariantProps<typeof cardBase> {
  label: string;
  value: string | number;
  labelSpan?: React.ReactNode;
  cardClass?: string; // Add this line
  labelClass?: string; // Add this line
  valueClass?: string; // Add this line
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  label,
  value,
  primary = true,
  labelSpan,
  cardClass,
  labelClass,
  valueClass,
}) => {
  const cardClasses = cn(cardBase({ primary }), cardClass); // Apply the new class
  const labelClasses = cn(labelBase({ primary }), labelClass); // Apply the new class
  const valueClasses = cn(valueBase({ primary }), valueClass); // Apply the new class

  return (
    <div className={cardClasses}>
      <img
        className="absolute w-full inset-0 z-0 object-cover h-fit"
        src={images.databox}
        alt="data box"
      />
      <div className={labelClasses}>
        <span>{label}</span>
        {labelSpan && <div className="mt-[-7px]">{labelSpan}</div>}
      </div>
      <div className={valueClasses}>
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default StatisticCard;

{/* <StatisticCard
  label="Primary Card"
  value={123}
  primary
  cardClass="my-custom-card-class"
  labelClass="my-custom-label-class"
  valueClass="my-custom-value-class"
/> */}