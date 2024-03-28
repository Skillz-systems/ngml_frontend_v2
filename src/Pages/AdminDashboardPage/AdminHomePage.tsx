import Notification from '@/Components/NotificationComponent/Notification';
import StatisticDynamicCard from '@/Components/StatisticCardComponent/StatisticDynamicCard';
import StatisticCard from '@/Components/Statisticccard/StatisticCard';
import StatisticRectangleCard from '@/Components/Statisticrectanclecard/StatisticRectangleCard';
import { ArrowDownward, FileDownloadDoneOutlined, GolfCourseOutlined, HailOutlined, NotificationImportantOutlined, VerifiedUserOutlined } from '@mui/icons-material';
import React from 'react';

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


  const statisticDynamicData = [
    {
      type: 'primary',
      title: 'Total Revenue',
      content: '$2,305',
      icon: <VerifiedUserOutlined />,
      dropdownIcon: <ArrowDownward />,
      onSortChange: (sortType: unknown, value: unknown) => console.log(`Sorted by ${sortType}: ${value}`),
      yearOptions: [2020, 2021, 2022],
      valueOptions: [
        { label: 'Revenue', value: 'revenue' },
        { label: 'Profit', value: 'profit' }
      ],
    },
    {
      type: 'secondary',
      title: 'Total Revenue',
      content: '$2,305',
      icon: <VerifiedUserOutlined />,
      dropdownIcon: <ArrowDownward />,
      onSortChange: (sortType: unknown, value: unknown) => console.log(`Sorted by ${sortType}: ${value}`),
      yearOptions: [2020, 2021, 2022],
      valueOptions: [
        { label: 'Revenue', value: 'revenue' },
        { label: 'Profit', value: 'profit' }
      ],
    },
  ];


  return (
    <div className="h-fit" >
      <div className='flex justify-between'>
        <div className='text-[30px] text-[#49526A] font-[700]'>Welcome John,</div>
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
      <div className='mt-8 h-fit flex w-[100%] space-x-4 flex'
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
        <div className='w-[35%]' style={{ border: '2px solid blue' }}></div>
      </div>
      <div>
        <div>
          {statisticDynamicData.map((card, index) => (
            <StatisticDynamicCard
              key={index}
              type={card.type}
              title={card.title}
              content={card.content}
              icon={card.icon}
              dropdownIcon={card.dropdownIcon}
              onSortChange={card.onSortChange}
              yearOptions={card.yearOptions}
              valueOptions={card.valueOptions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
