
import { FileDownloadDoneOutlined, GolfCourseOutlined, HailOutlined, NotificationImportantOutlined } from '@mui/icons-material';
import React from 'react';

import { Notification, StatisticCard, StatisticRectangleCard } from '../../Components/index';

const AdminHomePage = () => {

  const cardData = [
    {
      title: 'Un-Verified Staff',
      value: '2,305',
      icon: <GolfCourseOutlined />,

    },
    {
      title: 'Pending Requests',
      value: '32',
      icon: <FileDownloadDoneOutlined />,

    },
    {
      title: 'Upcoming Site Visits',
      value: '12',
      icon: <HailOutlined />,
    },
  ];



  const getIconStyles = (title: string) => {
    switch (title) {
      case 'Un-Verified Staff':
        return { bgColor: 'bg-[#005828]', iconColor: 'text-white' };
      case 'Pending Requests':
        return { bgColor: 'bg-[#00AF50]', iconColor: 'text-white' };
      case 'Upcoming Site Visits':
        return { bgColor: 'bg-[#FFD181]', iconColor: 'text-black' };
      default:
        return { bgColor: 'bg-gray-500', iconColor: 'text-white' };
    }
  };

  const statisticCardData = [
    {
      label: 'Customers',
      value: '554',
      primary: true,
    },
    {
      label: 'Suppliers',
      value: '9',
      primary: false,
    },
    {
      label: 'Staff',
      value: '8,307',
      primary: false,
    },
  ];


  return (
    <div className="h-fit" >
      <div className='flex justify-between'>
        <div className='text-[30px] text-gray-200 font-[700]'>Welcome John,</div>
        <div>
          <Notification
            headerTitle='Recent Activity'
            count={6}
            notifications={[
              { title: 'New Message', date: '2023-01-01', content: 'You have a new message from John.' },
              { title: 'System Update', date: '2023-01-02', content: 'System update is scheduled for 2 AM.' },
              { title: 'Meeting Reminder', date: '2023-01-03', content: 'Reminder: Meeting with the team at 10 AM.' },
            ]}
            renderIcon={() => <NotificationImportantOutlined />}
          />
        </div>
      </div>
      <div className="flex space-x-4 mt-6">
        {cardData.map((card, index) => {
          const { bgColor, iconColor } = getIconStyles(card.title);
          return (
            <StatisticRectangleCard
              key={index}
              title={card.title}
              value={card.value}
              icon={React.cloneElement(card.icon, { className: `${iconColor} ${bgColor} rounded-[8px] w-[32px] h-[32px] p-1` })}
              iconBgColor=''
            />
          );
        })}
      </div>
      <div className='mt-8 h-fit w-[100%] space-x-4 flex'
        style={{ border: '2px solid red', }}>
        <div className='w-[72%] flex ' style={{ border: '2px solid green' }}>
          <div className=' h-fit flex space-x-4'>
            {statisticCardData.map((card, index) => (
              <StatisticCard
                key={index}
                label={card.label}
                value={card.value}
                primary={card.primary}
              />
            ))}
          </div>

        </div>
        <div className='w-[35%]' style={{ border: '2px solid blue' }}>DDDDDDDD</div>

      </div>
    </div>
  );
}

export default AdminHomePage;
