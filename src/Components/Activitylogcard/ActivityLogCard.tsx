import { format } from 'date-fns';
import React from 'react';

interface ActivityLogCardProps {
  title: string;
  text: string;
  dateTime: Date;
  button?: React.ReactNode; // Accepts any valid JSX element as a prop
}

const ActivityLogCard: React.FC<ActivityLogCardProps> = ({ title, text, dateTime, button }) => {
  const formattedDateTime = format(dateTime, "dd MMM; hh:mma");

  return (
    <div className={`bg-white shadow-sm border-2 rounded-[20px] ${button ? 'p-12 mb-4 relative' : 'p-4 mb-4 relative'} `}>
      <div className="flex justify-between mb-4">
        {button ? <div className="bg-customGreen text-gray-800 font-[400] mt-[-35px] ml-[-30px] rounded px-2 py-1">{title}</div> : <div className="bg-customGreen text-gray-800 px-2 py-1 rounded font-[400]">{title}</div>}
        {button ? <div className="text-gray-600 text-sm mt-[-40px]">{formattedDateTime}</div> : <div className="text-gray-600 text-sm">{formattedDateTime}</div>}
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