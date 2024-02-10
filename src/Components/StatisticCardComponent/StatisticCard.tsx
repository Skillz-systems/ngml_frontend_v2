import React from 'react';

interface CardProps {
    type: 'primary' | 'secondary';
    title?: string;
    content?: React.ReactNode;
    icon?: React.ReactNode;
    onSortChange: (sortType: 'year' | 'value', value: string) => void;
    yearOptions: Array<number>;
    valueOptions: Array<SelectOption>;
}

interface SelectOption {
    label: string;
    value: string;
}


const StatisticCard: React.FC<CardProps> = ({ type, title, content, icon, onSortChange, yearOptions, valueOptions }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>, sortType: 'year' | 'value') => {
        onSortChange(sortType, e.target.value);
    };

    const getCardStyle = (type: 'primary' | 'secondary' | 'tertiary') => {
        switch (type) {
            case 'primary':
                return { backgroundColor: '#005828', color: '#ffffff' };
            case 'secondary':
                return { backgroundColor: '#F6FDEC', color: '#005828' };
            default:
                return {
                    backgroundColor: 'green'
                };
        }
    };

    const cardStyle = getCardStyle(type);



    return (
        <div className="card" style={cardStyle}>
            <div className='flex justify-between'>
                <div>
                    {icon && <div className="card-icon">{icon}</div>}
                </div>
                <div>
                    <select aria-label="Sort by year" onChange={(e) => handleSortChange(e, 'year')}
                        style={{ border: '1px solid #ffffff', backgroundColor: 'inherit', width: '83px', height: '35px', borderRadius: '40px', padding: '10px', fontSize: '12px', lineHeight: '15.06px' }}

                    >
                        {yearOptions.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                </div>
            </div>
            <div className='flex flex-col items-center pt-[28px]'>
                <div className='tracking-wide' style={{ fontSize: '20px', lineHeight: '20px', fontWeight: '700' }}>{title}</div>
                <div className='tracking-wide' style={{ fontSize: '16px', lineHeight: '16px', fontWeight: '400'}}>(Scf)</div>
                <div style={{ fontSize: '32px', lineHeight: '32px', fontWeight: '600', marginTop: '20px' }}>{content}</div>
            </div>

            <div style={{ marginTop: '22px', }}>
                <select
                    aria-label="Sort by value"
                    onChange={(e) => handleSortChange(e, 'value')}
                    style={{ border: '1px solid #ffffff', backgroundColor: 'inherit', width: '312px', height: '44px', borderRadius: '30px', padding: '10px', fontSize: '12px' }}
                >
                    {valueOptions.map(option => <option
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </option>)}
                </select>

            </div>
        </div>
    );
};

export default StatisticCard;
