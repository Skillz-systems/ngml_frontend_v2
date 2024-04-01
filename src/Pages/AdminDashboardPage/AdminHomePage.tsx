
import { FileDownloadDoneOutlined, GolfCourseOutlined, HailOutlined } from '@mui/icons-material';
import React from 'react';

import { StatisticCard, StatisticRectangleCard } from '../../Components/index';

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
    <div className="h-fit w-[100%]" >
      <div>
        <div className='text-[30px] text-[#49526A] font-[700]'>Welcome John,</div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row gap-[10px] mt-6" >
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
      <div className='mt-8 h-fit flex w-[100%] gap-[16px] flex flex-col md:flex-row'>
        <div className='w-[100%] flex '>
          <div className='w-[100%] flex gap-[16px] w-[100%] flex flex-col md:flex-row'>
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
        <div className='w-[50%]' style={{ border: '2px solid blue' }}>DDDDDDDD</div>

      </div>
    </div>
  );
}

export default AdminHomePage;
