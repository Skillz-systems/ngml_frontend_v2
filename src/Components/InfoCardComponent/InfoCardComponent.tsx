import { Divider } from '@mui/material';
import React from 'react';

/**
 * Props for InfoCard component.
 * @interface
 * @property {string} title - The title to be displayed on the card.
 * @property {number|string} number - The number or text to be displayed. Can be a number or formatted string.
 */
interface InfoCardProps {
  title: string;
  number: number | string;
  
}

/**
 * InfoCard Component
 * Displays a card with a title and a number/content below it. The card is styled with a specific height, width, and color scheme.
 * 
 * @component
 * @param {InfoCardProps} props - The props for the InfoCard component.
 * @returns {React.ReactElement} A styled card with a title and content section.
 */
const InfoCard: React.FC<InfoCardProps> = ({ title, number }) => {
  return (
    <div style={{
      height: '165px',
      width: '548px',
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: '20px'
    }}>
      <div style={{
        height: '78px',
        backgroundColor: '#E2E4EB',
        display: 'flex',
        borderTopRightRadius: '12px',
        borderTopLeftRadius: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#828DA9',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '20px',
      }}>
        <h2>{title}</h2>
      </div>
      <Divider />
      <div style={{
        height: '87px',
        backgroundColor: '#F9F9F9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#005828',
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '32px',
        borderBottomRightRadius: '12px',
        borderBottomLeftRadius: '12px',
      }}>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default InfoCard;
