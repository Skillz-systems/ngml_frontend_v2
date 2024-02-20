import { format } from 'date-fns';
import React from 'react';

/**
 * Renders a card for displaying activity log information.
 * @param {object} props - The props for the ActivityLogCard component.
 * @param {string} props.title - The title of the activity log.
 * @param {string} props.text - The text content of the activity log.
 * @param {Date} props.dateTime - The date and time of the activity log.
 * @param {React.ReactNode} [props.button] - JSX element for an optional button (optional).
 * @returns {JSX.Element} - The JSX element representing the ActivityLogCard component.
 */

interface ActivityLogCardProps {
  title: string;
  text: string;
  dateTime: Date;
  button?: React.ReactNode;
}

const ActivityLogCard: React.FC<ActivityLogCardProps> = ({ title, text, dateTime, button }) => {
  const formattedDateTime = format(dateTime, 'dd MMM; hh:mma').toLowerCase();

  return (
    <div className={`bg-white shadow-sm border-1 rounded-[20px] ${button ? 'p-12 mb-4 relative' : 'p-2 mb-4 relative'} `}>
      <div className="flex justify-between mb-4">
        {button ? <div className="bg-customGreen text-gray-800 font-[400] mt-[-35px] ml-[-30px] rounded px-2 py-1">{title}</div> : <div className="bg-customGreen text-gray-800 px-2 py-1 rounded font-[400]">{title}</div>}
        {button ? <div className="text-gray-600 text-[13px] mt-[-40px] mr-[-40px]">{formattedDateTime}</div> : <div className="text-gray-600 text-[13px]">{formattedDateTime}</div>}
      </div>
      {button ? <div className="text-gray-800 mt-[-10px] ml-[-30px]">{text}</div> : <div className="text-gray-800">{text}</div>}
      {button && (
        <div className="absolute bottom-2 right-2">
          {button}
        </div>
      )}
    </div>
  );
};

export default ActivityLogCard;