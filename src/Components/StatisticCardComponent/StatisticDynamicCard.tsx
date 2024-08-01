import React from 'react';

/**
 * Properties for the StatisticDynamicCard component.
 * @typedef {Object} CardProps
 * @property {'primary' | 'secondary'} [type] - The type of card, either 'primary' or 'secondary'.
 * @property {string} [title] - The title text to display in the card.
 * @property {React.ReactNode} [content] - The main content to display in the card.
 * @property {React.ReactNode} [icon] - An optional icon to display in the card header.
 * @property {React.ReactNode} [dropdownIcon] - An optional icon to display in the dropdown.
 * @property {function('year' | 'value', string): void} [onSortChange] - Callback function called when the sort option changes.
 * @property {Array<number>} [yearOptions] - Array of year options for the year dropdown.
 * @property {Array<SelectOption>} [valueOptions] - Array of value options for the value dropdown.
 */

/**
 * An option for the select dropdown.
 * @typedef {Object} SelectOption
 * @property {string} label - The display label for the option.
 * @property {string} value - The value for the option.
 */

/**
 * A component that renders a dynamic statistic card with optional sorting capabilities.
 * 
 * @param {CardProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 * 
 * @example
 * // Example usage of StatisticDynamicCard
 * <StatisticDynamicCard
 *   type="primary"
 *   title="Revenue"
 *   content="$5000"
 *   icon={<SomeIcon />}
 *   dropdownIcon={<DropdownIcon />}
 *   onSortChange={(sortType, value) => console.log(sortType, value)}
 *   yearOptions={[2021, 2022, 2023]}
 *   valueOptions={[{ label: 'High', value: 'high' }, { label: 'Low', value: 'low' }]}
 * />
 */
const StatisticDynamicCard: React.FC<CardProps> = ({
    type = 'primary',
    title,
    content,
    icon,
    dropdownIcon,
    onSortChange,
    yearOptions = [],
    valueOptions = []
}) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>, sortType: 'year' | 'value') => {
        if (onSortChange) {
            onSortChange(sortType, e.target.value);
        }
    };

    const getCardStyle = (type: 'primary' | 'secondary') => {
        switch (type) {
            case 'primary':
                return { backgroundColor: '#005828', color: '#ffffff' };
            case 'secondary':
                return { backgroundColor: '#F6FDEC', color: '#005828' };
            default:
                return { backgroundColor: 'green' };
        }
    };

    const getSelectStyle = (type: 'primary' | 'secondary') => {
        switch (type) {
            case 'primary':
                return {
                    backgroundColor: '#005828',
                    color: '#ffffff',
                    border: '1px solid #ffffff'
                };
            case 'secondary':
                return {
                    backgroundColor: '#F6FDEC',
                    color: '#005828',
                    border: '1px solid #005828'
                };
            default:
                return {
                    backgroundColor: 'blue',
                    color: 'black',
                    border: '1px solid green'
                };
        }
    };

    const cardStyle = getCardStyle(type);
    const selectStyle = getSelectStyle(type);
    const titleStyle = { color: type === 'primary' ? '#D2F69E' : '#005828' };
    const scfStyle = { color: type === 'primary' ? '#D2F69E' : '#005828' };

    return (
        <div style={cardStyle} className='w-full h-full p-8 rounded-[20px] shadow-md'>
            <div className='flex justify-between items-center'>
                {icon && <div className="card-icon">{icon}</div>}
                {yearOptions.length > 0 && (
                    <div className="select-container relative inline-block w-20">
                        <select
                            className='outline-none block w-full bg-inherit h-9 rounded-full text-xs leading-tight pl-2 pr-10 appearance-none'
                            aria-label="Sort by year"
                            onChange={(e) => handleSortChange(e, 'year')}
                            style={selectStyle}
                        >
                            {yearOptions.map(year => (
                                <option key={year} value={year} style={selectStyle}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            {dropdownIcon}
                        </div>
                    </div>
                )}
            </div>
            <div className='flex flex-col items-center pt-7'>
                <div className='tracking-wide text-lg font-bold' style={titleStyle}>{title}</div>
                <div className='tracking-wide text-sm' style={scfStyle}>(Scf)</div>
                <div className='text-2xl font-semibold mt-5'>{content}</div>
            </div>
            {valueOptions.length > 0 && (
                <div className='mt-5 relative inline-block w-full'>
                    <select
                        className='outline-none block w-full bg-inherit h-11 rounded-full text-xs leading-tight pl-4 pr-10 appearance-none'
                        aria-label="Sort by value"
                        onChange={(e) => handleSortChange(e, 'value')}
                        style={selectStyle}
                    >
                        {valueOptions.map(option => (
                            <option key={option.value} value={option.value} style={selectStyle}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        {dropdownIcon}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatisticDynamicCard;