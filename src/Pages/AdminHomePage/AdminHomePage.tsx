
import { Loader } from '@/Components/Loader/Loader';
import { useTasksQuery } from '@/Redux/Features/Task/taskService';
import {
  ArrowOutwardOutlined,
  FileDownloadDoneOutlined,
  RestaurantMenuOutlined
} from '@mui/icons-material';
import React, { useState } from 'react';
import { ActivityLogCard, Chart, DailyVolumnTable, StatisticCard, StatisticDynamicCard, StatisticRectangleCard } from '../../Components/index';
import { selectCurrentUser } from '../../Redux/Features/Auth/authSlice';
import { useAppSelector } from '../../Redux/hooks';
import images from '../../assets/index';
// import { aC } from 'vitest/dist/reporters-1evA5lom';


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
  const currentUser = useAppSelector(selectCurrentUser);
  const userId = Number(currentUser?.id)

  const { data, error, isError, isSuccess, isLoading } = useTasksQuery({ userId });

  console.log(data, 'data___')

  const handleSortChange = (sortType: 'year' | 'value', value: string) => {
    setSortDetails({ sortType, value });
  };

  const getFirstName = (fullName: string) => {
    return fullName.split(' ')[0];
  };


  const dataNNPC = [
    { month: 'Jan', 'Amount Sold': 100, Delivered: 80, Requests: 120, Revenue: 500 },
    { month: 'Feb', 'Amount Sold': 200, Delivered: 150, Requests: 180, Revenue: 800 },
    { month: 'Mar', 'Amount Sold': 150, Delivered: 120, Requests: 200, Revenue: 600 },
    { month: 'Apr', 'Amount Sold': 300, Delivered: 250, Requests: 280, Revenue: 1200 },
    { month: 'May', 'Amount Sold': 250, Delivered: 200, Requests: 320, Revenue: 1000 },
  ];

  const chartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];



  const cardData = [
    {
      title: 'Un-Verified Staff',
      value: '2,305',
      icon: <img src={images.contact} alt="staff icon" />,

    },
    {
      title: 'Pending Requests',
      value: '32',
      icon: <img src={images.Requesticon} alt="request icon" />,

    },
    {
      title: 'Upcoming Site Visits',
      value: '12',
      icon: <img src={images.zone} alt="zone icon" />,
    },
  ];


  const dynamicCardData: DynamicCardDataItem[] = [
    {
      type: 'primary',
      title: 'Total Supplied Volume ',
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
      title: 'Total Consumption Volume ',
      content: '4,039,213,455.00',
      icon: <FileDownloadDoneOutlined />,
      yearOptions: [2020, 2021, 2022],
      valueOptions: [
        { label: 'Profit', value: 'profit' },
        { label: 'Revenue', value: 'revenue' },
      ],
    },
  ];


  const getIconStyles = (title: string) => {
    switch (title) {
      case 'Un-Verified Staff':
        return { bgColor: 'bg-[#005828]', iconColor: 'text-white', };
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

  if (isError) {
    console.log('error', error)
    console.log('error', isError)
  }

  if (isSuccess) {
    console.log('tasks', data)
  }


  return (
    <div className="h-fit w-full" >
      <div>
        <div className='text-[30px] text-[#49526A] font-[700]'>Welcome {currentUser && (
          <span className="text-[30px] text-[#49526A] font-[700] capitalize">
            {getFirstName(currentUser.name)}
          </span>
        )}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 gap-4" >
        {cardData.map((card, index) => {
          const { bgColor, iconColor } = getIconStyles(card.title);
          return (
            <StatisticRectangleCard
              key={index}
              title={card.title}
              value={card.value}
              icon={React.cloneElement(card.icon, { className: `${iconColor} ${bgColor} rounded-[10px] w-[50px] h-[32px] p-2` })}
              iconBgColor=''
            />
          );
        })}
      </div>
      <div className='mt-8 h-fit grid grid-cols-1 xl:grid-cols-7 gap-6 ' id="stat-card-chart-parent">
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
        <div className='w-full h-full bg-[#FFFFFF] border rounded-t-lg border-[#E2E4EB] rounded-b-lg hidden xl:order-last lg:order-last order-first md:block xl:col-span-2 col-span-1'>
          <div className='h-[48px] bg-[#F6F8FA] flex items-center p-[10px] justify-between'>
            <div className='text-[#828DA9] text-[20px] font-[400]'>Available Tasks</div>
            <div className='border size-[32px] flex items-center justify-center rounded-full'>
              <ArrowOutwardOutlined color="disabled" style={{ fontSize: 'medium' }} />
            </div>
          </div>
          <div className='h-[1000px] overflow-y-auto'>
            <div className='w-[100%] p-[10px] pt-[0px] '>
              {isLoading &&
                <Loader className="text-nnpc-100 size-10 " />
              }

              {isSuccess && Array.isArray(data?.data) && data.data.map((activity: any, index: number) => {
                return (
                  <ActivityLogCard
                    key={index}
                    title={activity.title}
                    text={activity.text}
                    start_time={activity.start_time}
                  />
                );
              })}
            </div>
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