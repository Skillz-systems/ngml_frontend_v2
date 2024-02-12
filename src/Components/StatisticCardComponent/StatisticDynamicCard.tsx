import React from 'react';

interface CardProps {
    type: 'primary' | 'secondary';
    title?: string;
    content?: React.ReactNode;
    icon?: React.ReactNode; // Card's main icon
    dropdownIcon?: React.ReactNode; // Custom dropdown icon
    onSortChange: (sortType: 'year' | 'value', value: string) => void;
    yearOptions: Array<number>;
    valueOptions: Array<SelectOption>;
}

interface SelectOption {
    label: string;
    value: string;
}

const StatisticDynamicCard: React.FC<CardProps> = ({
    type,
    title,
    content,
    icon,
    dropdownIcon,
    onSortChange,
    yearOptions,
    valueOptions
}) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>, sortType: 'year' | 'value') => {
        onSortChange(sortType, e.target.value);
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
    const titleStyle = { color: type === 'primary' ? '#D2F69E' : '#005828' }
    const scfStyle = { color: type === 'primary' ? '#D2F69E' : '#005828' }


    return (
        <div className="card" style={cardStyle}>
            <div className='flex justify-between'>
                <div>
                    {icon && <div className="card-icon">{icon}</div>}
                </div>
                <div className="select-container" style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '83px',
                    justifyContent: 'space-between',
                }}>
                   <div style={{}}>
                   <select
                        aria-label="Sort by year"
                        onChange={(e) => handleSortChange(e, 'year')}
                        style={{
                            ...selectStyle,
                            display: 'block',
                            width: '100%',
                            backgroundColor: 'inherit',
                            height: '35px',
                            borderRadius: '40px',
                            fontSize: '12px',
                            lineHeight: '15.06px',
                            textAlignLast: 'start',
                            appearance: 'none',
                            padding: '10px'

                        }}
                    >
                        {yearOptions.map(year => <option style={{...selectStyle}}  key={year} value={year}>{year}</option>)}
                    </select>
                   </div>
                    <div style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}>
                        {dropdownIcon}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center pt-[28px]'>
                <div className='tracking-wide' style={{ ...titleStyle, fontSize: '20px', lineHeight: '20px', fontWeight: '700' }}>{title}</div>
                <div className='tracking-wide' style={{ ...scfStyle, fontSize: '16px', lineHeight: '16px', fontWeight: '400' }}>(Scf)</div>
                <div style={{ fontSize: '32px', lineHeight: '32px', fontWeight: '600', marginTop: '20px' }}>{content}</div>
            </div>
            <div style={{ marginTop: '22px' }}>
                <div className="select-container" style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '312px',
                }}>
                    <select
                        aria-label="Sort by value"
                        onChange={(e) => handleSortChange(e, 'value')}
                        style={{
                            ...selectStyle,
                            display: 'block',
                            width: '100%',
                            backgroundColor: 'inherit',
                            height: '44px',
                            borderRadius: '30px',
                            fontSize: '12px',
                            lineHeight: '15.06px',
                            padding: '10px 20px',
                            textAlignLast: 'start',
                            appearance: 'none',
                        }}
                    >
                        {valueOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                    <div style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}>
                        {dropdownIcon}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticDynamicCard;
