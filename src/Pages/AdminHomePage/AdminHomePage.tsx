import { FileDownloadDoneOutlined, RestaurantMenuOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { ActivityLogCard, Chart, DailyVolumnTable, StatisticCard, StatisticDynamicCard, StatisticRectangleCard } from '../../Components/index';
import images from '../../assets/index';

interface SelectOption {
  label: string;
  value: string;
}

interface DynamicCardDataItem {
  type: 'primary' | 'secondary';
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  yearOptions: Array<number>;
  valueOptions: Array<SelectOption>;
}

const AdminHomePage = () => {
  const [, setSortDetails] = useState({ sortType: '', value: '' });

  const handleSortChange = (sortType: 'year' | 'value', value: string) => {
    setSortDetails({ sortType, value });
  };


  const dataNNPC = [
    { month: 'Jan', 'Amount Sold': 100, Delivered: 80, Requests: 120, Revenue: 500 },
    { month: 'Feb', 'Amount Sold': 200, Delivered: 150, Requests: 180, Revenue: 800 },
    { month: 'Mar', 'Amount Sold': 150, Delivered: 120, Requests: 200, Revenue: 600 },
    { month: 'Apr', 'Amount Sold': 300, Delivered: 250, Requests: 280, Revenue: 1200 },
    { month: 'May', 'Amount Sold': 250, Delivered: 200, Requests: 320, Revenue: 1000 },
  ];

  const chartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];



  const activities = [
    {
      title: 'New User Registration',
      text: 'John Doe registered for an account.',
      dateTime: new Date(2024, 3, 1, 10, 30)
    },
    {
      title: 'System Update',
      text: 'System updated to version 2.1.0 successfully.',
      dateTime: new Date(2024, 3, 1, 9, 15)
    },
    {
      title: 'Password Change',
      text: 'Alice Smith changed her password.',
      dateTime: new Date(2024, 3, 1, 8, 45)
    },
    {
      title: 'New Support Ticket',
      text: 'A new support ticket was submitted by Bob Johnson.',
      dateTime: new Date(2024, 3, 1, 11, 5)
    },
    {
      title: 'Product Update',
      text: 'Product XYZ has been updated to version 1.2.',
      dateTime: new Date(2024, 3, 1, 12, 30)
    },
    {
      title: 'Meeting Scheduled',
      text: 'A team meeting has been scheduled for April 2nd, 2024.',
      dateTime: new Date(2024, 3, 1, 13, 0)
    }
  ];


  const dynamicCardData: DynamicCardDataItem[] = [
    {
      type: 'primary',
      title: 'Total Revenue',
      content: '12,129,243,990.00',
      icon: <RestaurantMenuOutlined />,
      yearOptions: [2020, 2021, 2022],
      valueOptions: [
        { label: 'Revenue', value: 'revenue' },
        { label: 'Profit', value: 'profit' },
      ],
    },
    {
      type: 'secondary',
      title: 'Net Profit',
      content: '4,039,213,455.00',
      icon: <FileDownloadDoneOutlined />,
      yearOptions: [2020, 2021, 2022],
      valueOptions: [
        { label: 'Profit', value: 'profit' },
        { label: 'Revenue', value: 'revenue' },
      ],
    },
  ];


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
    <div className="h-fit w-full" >
      <div>
        <div className='text-[30px] text-[#49526A] font-[700]'>Welcome John,</div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 gap-4" >
        {cardData.map((card, index) => {
          const { bgColor, iconColor } = getIconStyles(card.title);
          return (
            <StatisticRectangleCard
              key={index}
              title={card.title}
              value={card.value}
              icon={React.cloneElement(card.icon, { className: ${iconColor} ${bgColor} rounded-[8px] w-[32px] h-[32px] p-1 })}
              iconBgColor=''
            />
          );
        })}
      </div> */}
      <div className='flex flex-col md:flex-row items-center gap-4 mt-6 ' >
        <StatisticRectangleCard
          title='Un-Verified Staff'
          icon={<img src={images.contact} alt="staff icon" />}
          value='2,305'
          iconBgColor='rounded-[5px] bg-[#005828]'
        />
        <StatisticRectangleCard
          title='Pending Requests'
          icon={<img src={images.Requesticon} alt="request icon" />}
          value='32'
          iconBgColor='bg-[#00AF50] rounded-[5px]'
        />
        <StatisticRectangleCard
          title='Upcoming Site Visits'
          icon={<img src={images.zone} alt="zone icon" />}
          value='12'
          iconBgColor='rounded-full bg-[#FFD181]'
        />
      </div>

      <div className='mt-8 h-fit grid grid-cols-1 xl:grid-cols-7 gap-4 ' id="stat-card-chart-parent">
        <div className="xl:col-span-5 col-span-1  order-last lg:order-first xl:order-last" id="cards">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
            {statisticCardData.map((card, index) => (
              <StatisticCard
                key={index}
                label={card.label}
                value={card.value}
                primary={card.primary}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] mt-4">
            {dynamicCardData.map((card, index) => (
              <div key={index} className='mt-[15px]'>
                <StatisticDynamicCard
                  type={card.type}
                  title={card.title}
                  content={card.content}
                  icon={card.icon}
                  onSortChange={handleSortChange}
                  yearOptions={card.yearOptions}
                  valueOptions={card.valueOptions}
                />
              </div>
            ))}
          </div>
          <div >
            <Chart
              data={dataNNPC}
              chartType="bar"
              yAxisLabel="NNPC"
              xAxisDataKey="month"
              colors={chartColors}
              title='Customer Consumption Chart'
            />
          </div>
        </div>
        <div className='w-[100%] bg-[#FFFFFF] rounded-b-lg hidden xl:order-last lg:order-last order-first md:block xl:col-span-2 col-span-1'>
          <div className='h-[48px] rounded-t-lg bg-[#F6FDEC] flex items-center p-[10px]'>
            <div className='text-[#828DA9] text-[20px] font-[400]'>Recent Activity</div>
            <div></div>
          </div>
          <div className='w-[100%] p-[10px] pt-[0px] '>
            {activities.map((activity, index) => (
              <ActivityLogCard
                key={index}
                title={activity.title}
                text={activity.text}
                dateTime={activity.dateTime}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className='mt-[28px]'>
          <Chart
            data={dataNNPC}
            chartType="line"
            yAxisLabel="NNPC"
            xAxisDataKey="month"
            colors={chartColors}
            title='Customer Consumption Chart'
          />
        </div>
      </div>
      <div className='w-[100%] mt-[28px]'>
        <DailyVolumnTable />
      </div>
    </div>
  );
}

export default AdminHomePage;