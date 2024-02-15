import React from 'react';
import { format } from 'date-fns';

interface ActivityLogCardProps {
  title: string;
  text: string;
  dateTime: Date;
}

const ActivityLogCard: React.FC<ActivityLogCardProps> = ({ title, text, dateTime }) => {

    const formattedDateTime = format(dateTime, "dd MMM; hh:mma");
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="bg-blue-500 text-white px-2 py-1 rounded">{title}</div>
        <div className="text-gray-600 text-sm">{formattedDateTime}</div>
      </div>
      <div className="text-gray-800">{text}</div>
    </div>
  );
};

export default ActivityLogCard;