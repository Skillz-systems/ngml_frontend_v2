
import { useGetCustomersQuery } from '@/Redux/Features/Customer/customerService';
import { useTasksQuery } from '@/Redux/Features/Task/taskService';
import {
  ArrowOutwardOutlined,
} from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityLogCard, Chart, DailyVolumnHistoryTable, StatisticCard, StatisticRectangleCard } from '../../Components/index';

import { selectCurrentUser } from '../../Redux/Features/Auth/authSlice';
import { useAppSelector } from '../../Redux/hooks';
import images from '../../assets/index';

import { FilterParams } from '@/Hooks/useChartFilter';
import { generateLineGraphData, generateNNPCData } from '@/Utils/sampleData';
import DollarConversionRateModal from '@/Components/DollarConversionRate/DollarConversionRate';
import { Edit } from 'lucide-react';
import { useSelector } from 'react-redux';
import { UserState } from '@/Redux/types';




const AdminHomePage = () => {
  // const [, setSortDetails] = useState({ sortType: '', value: '' });
  const currentUser = useAppSelector(selectCurrentUser);
  // const userId = Number(currentUser?.id)

  const { data, error, isError, isSuccess, isLoading } = useTasksQuery();
  const { data: customers } = useGetCustomersQuery();

  const getFirstName = (fullName: string) => {
    return fullName.split(' ')[0];
  };

  const [chartData, setChartData] = useState(generateLineGraphData());
  const [chartDataOne, setChartDataOne] = useState(generateNNPCData());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rate, setRate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState("")

  const userRole = useSelector((state: { user: UserState }) => state.user.role)


  useEffect(() => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    const now = new Date()
    setCurrentMonth(months[now.getMonth()])
  }, [])


  const handleRateSave = (newRate: string) => {
    setRate(newRate);
  };


  const handleFilterChange = useCallback((params: FilterParams) => {
    // Handle filter changes
    console.log('Filter params:', params);

    const newData = generateLineGraphData(
      params.filterType === 'month' ? 'daily' : 'monthly'
    );
    setChartData(newData);
  }, []);
  const handleFilterChangeOne = useCallback((params: FilterParams) => {
    // Handle filter changes
    console.log('Filter params:', params);

    const newData = generateNNPCData(
      // params.filterType === 'month' ? 1 : 12
      params.filterType === 'month' ? 'daily' : 'monthly'
    );
    setChartDataOne(newData);
  }, []);

  const chartColors = ['#8884d8', '#82ca9d', '#413ea0', '#ff7300'];



  const cardData = [
    {
      title: 'Staff',
      value: '0',
      icon: <img src={images.contact} alt="staff icon" />,

    },
    {
      title: 'Pending Requests',
      value: '0',
      icon: <img src={images.Requesticon} alt="request icon" />,

    },
    {
      title: 'Upcoming Site Visits',
      value: '0',
      icon: <img src={images.zone} alt="zone icon" />,
    },
  ];


  const getIconStyles = (title: string) => {
    switch (title) {
      case 'Staff':
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
      value: JSON.stringify(customers?.data.length) ?? '',
      primary: true,
    },
    {
      label: 'Suppliers',
      value: '0',
      primary: false,
    },
    {
      label: 'Staff',
      value: '0',
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
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-[30px] text-[#49526A] font-[700]'>Welcome {currentUser && (
            <span className="text-[30px] text-[#49526A] font-[700] capitalize">
              {getFirstName(currentUser.name)}
            </span>
          )}</div>
        </div>
        <div className='mb-2'>
          {!rate && (
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => setIsModalOpen(true)}
            >
              Set Monthly Dollar Conversion Rate
            </button>
          )}
          <DollarConversionRateModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onRateSave={handleRateSave}
          />
        </div>
        {rate && (
          <div>
            <div className="p-3 bg-white border border-[#E2E4EB] rounded-[6px] shadow-sm">
              <div className="flex justify-between  mb-2 gap-24">
                <div>
                  <h3 className="text-sm font-semibold text-green-800">Monthly USD Rate</h3>
                  <p className="text-xs text-green-600">{currentMonth}</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-green-700">₦{rate}</p>
                </div>
              </div>
              {userRole === 'admin' && (
                <button
                  className="w-full px-3 py-1.5 text-sm bg-green-50 text-green-700 border border-green-600 rounded hover:bg-green-600 hover:text-white transition-colors duration-200 flex items-center justify-center group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Edit className="w-4 h-4 mr-1 group-hover:text-white" />
                  Edit Rate
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 gap-4">
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
          <div >
            <Chart
              data={chartData}
              chartType="bar"
              xAxisDataKey="date"
              yAxisLabel="Amount"
              colors={['#4F46E5', '#10B981', '#F59E0B']}
              title="Customer Consumption Chart"
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        <div className='w-full h-full bg-[#FFFFFF] border rounded-t-lg border-[#E2E4EB] rounded-b-lg hidden xl:order-last lg:order-last order-first md:block xl:col-span-2 col-span-1'>
          <div className='h-[48px] bg-[#F6F8FA] flex items-center p-[10px] justify-between'>
            <div className='text-[#828DA9] text-[20px] font-[400]'>Available Tasks</div>
            <div className='border size-[32px] flex items-center justify-center rounded-full' >
              <ArrowOutwardOutlined color="disabled" style={{ fontSize: 'medium' }} />
            </div>
          </div>
          {/* <div className='h-[400px] overflow-y-auto'> */}
          <div className='w-[100%] p-[10px] pt-[0px]  '>
            {isLoading &&

              <img src={images.ngmlPortrait} className='w-full h-full' alt="loader" />
              // <Loader className="text-nnpc-100 size-10 " />
              // <div
              //   className=" bg-cover bg-center bg-no-repeat"
              //   style={{ backgroundImage: `url(${images.ngmlPortrait})` }}
              // ></div>
            }

            {isSuccess && Array.isArray(data?.data) && data.data.map((activity: any, index: number) => {
              return (
                <ActivityLogCard
                  key={index}
                  route={activity.route}
                  title={activity.title}
                  text={activity.text}
                  start_time={activity.start_time}
                />

              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div className='mt-[28px]'>
          <Chart
            data={chartDataOne}
            chartType="bar"
            yAxisLabel="Volume (mscf)"
            xAxisDataKey="date"
            colors={chartColors}
            title='Customer Consumption Chart'
            onFilterChange={handleFilterChangeOne}
          />

        </div>
      </div>
      <div className='w-[100%] mt-[28px]'>
        {/* <DailyVolumnTable /> */}
        {/* <CustomerDailyVolumns /> */}
        <DailyVolumnHistoryTable />
      </div>
    </div>
  );
}

export default AdminHomePage;