import React from 'react';


/**
 * @typedof {'primary' | 'secondary'} CardType - Type of the date card.
 */

/**
 * @typedof {Object} DateCardProps - Props for the DateCard component.
 * @property {CardType} cardType - Type of the date card (primary or secondary).
 * @property {number} day - The day to be displayed on the card.
 * @property {string} week - The week to be displayed on the card.
 * @property {string} month - The month to be displayed on the card.
 * @property {boolean} isActive - Indicates whether the card is active or not.
 * @property {Function} onToggleActive - Callback function to toggle the active state of the card.
 * @property {React.ReactNode|string} [icon] - Optional icon to be displayed on the card.
 */

export interface DateCardProps {
    cardType: 'primary' | 'secondary';
    day: number;
    week: string;
    month: string;
    isActive: boolean;
    onToggleActive: () => void;
    icon?: React.ReactNode | string;
}


/**
 * DateCard component displays a date card with specific information.
 * @param {DateCardProps} props - Props for the DateCard component.
 * @returns {React.ReactElement} React component representing the date card.
 */

const DateCard: React.FC<DateCardProps> = ({ cardType, day, week, month, isActive, onToggleActive, icon }: DateCardProps): React.ReactElement => {

    /**
      * Gets the style object based on the card type and active state.
      * @returns {Object} Style object for the date card.
      */
    const getCardStyle = () => {
        if (cardType === 'primary') {
            return {
                backgroundColor: isActive ? '#D2F69E' : '#FFFFFF',
                width: '169.14px',
                height: '147px',
                display: 'flex',
                flexDirection: 'column'

            };
        } else if (cardType === 'secondary') {
            return {
                
                backgroundColor: isActive ? '#D2F69E' : '#F6F8FA',
                width: '266px',
                height: '290px'
            };
        }
    };

    return (
     
        <div style={{backgroundColor: '#EAECF0', padding: '10px'}}>
             <div
            className={`date-card ${isActive ? 'active' : 'inactive'}`}
            style={{
                padding: '16px',
                borderRadius: '10px',
                margin: '16px',
                ...getCardStyle(),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            onClick={onToggleActive}
        >

            <span style={{ fontSize: '20px', color: '#828DA9', lineHeight: '20px', fontWeight: '700', }}>{week}</span>
            <span style={{ fontSize: '64px', color: '#49526A', lineHeight: '60px', fontWeight: '700' }}>{day}</span>
            <span style={{ fontSize: '12px', color: '#49526A', lineHeight: '12px', fontWeight: '700', }}>{month}</span>
            {icon && <div style={{ marginBottom: '10px' }}>{icon}</div>}
        </div>
        </div>
       

    );
};

export default DateCard;
