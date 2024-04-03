import { cva } from 'class-variance-authority';
import React from 'react';
// import { tmerge } from 'tailwind-merge';
import { cn } from '@/Utils';
/**
 * Props for the StatisticDynamicCard component.
 * @typeof CardProps
 * @type {object}
 * @property {'primary' | 'secondary'} type - The type of the card, affecting its styling.
 * @property {string} [title] - The title of the card.
 * @property {React.ReactNode} [content] - The main content of the card.
 * @property {React.ReactNode} [icon] - An optional icon to display on the card.
 * @property {React.ReactNode} [dropdownIcon] - An icon to display in dropdown selectors.
 * @property {Function} onSortChange - Callback function to handle sort changes.
 * @property {Array<number>} yearOptions - Array of available years for sorting.
 * @property {Array<SelectOption>} valueOptions - Array of options for value-based sorting.
 */
interface CardProps {
    type: 'primary' | 'secondary';
    title?: string;
    content?: React.ReactNode;
    icon?: React.ReactNode;
    dropdownIcon?: React.ReactNode;
    onSortChange: (sortType: 'year' | 'value', value: string) => void;
    yearOptions: Array<number>;
    valueOptions: Array<SelectOption>;
}

/**
 * Defines the shape of the selection option for dropdowns.
 * @typeof SelectOption
 * @type {object}
 * @property {string} label - The display text of the option.
 * @property {string} value - The value of the option.
 */
interface SelectOption {
    label: string;
    value: string;
}

// Styles using cva
const cardStyle = cva(
    'w-full flex flex-col justify-between p-4 xl:p-6 rounded-lg shadow-md',
    {
        variants: {
            type: {
                primary: 'bg-[#005828] text-white',
                secondary: 'bg-[#F6FDEC] text-[#005828]',
            },
        },
        defaultVariants: {
            type: 'primary',
        },
    }
);

const titleStyle = cva('font-bold', {
    variants: {
        type: {
            primary: 'text-[#D2F69E]',
            secondary: 'text-[#005828]',
        },
    },
    defaultVariants: {
        type: 'primary',
    },
});

const contentStyle = cva('font-semibold text-xl lg:text-2xl 2xl:text-3xl mt-4', {
    variants: {
        type: {
            primary: 'text-[#D2F69E]',
            secondary: 'text-[#005828]',
        },
    },
    defaultVariants: {
        type: 'primary',
    },
});

const selectStyle = cva(
    'block w-full appearance-none bg-inherit rounded-3xl px-4 py-2 text-sm',
    {
        variants: {
            type: {
                primary: 'text-white border border-white',
                secondary: 'text-[#005828] border border-[#005828]',
            },
        },
        defaultVariants: {
            type: 'primary',
        },
    }
);

const dropdownIconContainerStyle = cva(
    'absolute right-2 top-1/2 -translate-y-1/2',
);

/**
 * A dynamic card component for displaying statistical information with customizable sorting options.
 * @param {CardProps} props - The properties passed to the component.
 * @returns {React.FC} A functional React component.
 */
const StatisticDynamicCard: React.FC<CardProps> = ({
    type,
    title,
    content,
    icon,
    dropdownIcon,
    onSortChange,
    yearOptions,
    valueOptions,
}) => {
    /**
     * Handles changes in sort selection.
     * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event from the select input.
     * @param {'year' | 'value'} sortType - The type of sorting (by year or value).
     */
    const handleSortChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        sortType: 'year' | 'value'
    ) => {
        onSortChange(sortType, e.target.value);
    };

    return (
        <div className={cardStyle({ type })}>
            <div className="flex justify-between items-center">
                <div>{icon && <div className="card-icon">{icon}</div>}</div>
                <div className="relative w-fit">
                    <select
                        aria-label="Sort by year"
                        onChange={(e) => handleSortChange(e, 'year')}
                        className={cn(
                            selectStyle({ type }),
                            'leading-5 text-right pr-8'
                        )}
                    >
                        {yearOptions.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    <div className={dropdownIconContainerStyle()}>
                        {dropdownIcon}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center pt-7">
                <div className={titleStyle({ type })}>{title}</div>
                <div className={cn(contentStyle({ type }), 'tracking-wide')}>
                    (Scf)
                </div>
                <div className={contentStyle({ type })}>{content}</div>
            </div>
            <div className="mt-5">
                <div className="relative w-full">
                    <select
                        aria-label="Sort by value"
                        onChange={(e) => handleSortChange(e, 'value')}
                        className={cn(
                            selectStyle({ type }),
                            'leading-5 text-left pr-8'
                        )}
                    >
                        {valueOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className={dropdownIconContainerStyle()}>{dropdownIcon}</div>
                </div>
            </div>
        </div>
    );
};

export default StatisticDynamicCard;