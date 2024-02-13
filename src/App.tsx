import { House, KeyboardArrowDown, NotificationImportantOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Notification from './Components/NotificationComponent/Notification';
<<<<<<< HEAD
import StatisticCard from './Components/Statisticccard/StatisticCard';

function App() {
  // const [showNotifications, setShowNotifications] = useState(false); 
=======
import StatisticDynamicCard from './Components/StatisticCardComponent/StatisticDynamicCard';

function App() {
  const [showNotifications, setShowNotifications] = useState(false);
>>>>>>> 2a98735b29a2c5ad116ae3bcd4f85447f114f563

  // const notificationsInfo = [
  //   {
  //     title: 'EOI REQUEST',
  //     date: '17 Nov; 12:03pm',
  //     content: 'Alberta Coporation Limited just sent in an EOI Request',
  //   },
  //   {
  //     title: 'EOI REQUEST',
  //     date: '17 Nov; 12:03pm',
  //     content: 'Alberta Coporation Limited just sent in an EOI Request',
  //   },
  //   {
  //     title: 'EOI REQUEST',
  //     date: '17 Nov; 12:03pm',
  //     content: 'Alberta Coporation Limited just sent in an EOI Request',
  //   },
  //   {
  //     title: 'EOI REQUEST',
  //     date: '17 Nov; 12:03pm',
  //     content: 'Alberta Coporation Limited just sent in an EOI Request',
  //   },
  // ];

  // const handleNotificationClick = () => {
  //   setShowNotifications(!showNotifications);
  // };

  return (
    <>
      {/* <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        <Notification
          count={notificationsInfo.length}
          headerTitle="Notifications"
          notifications={notificationsInfo}
          onClick={handleNotificationClick}
          renderIcon={() => <NotificationImportantOutlined />}
        />
<<<<<<< HEAD
      </div> */}
      
      <div className="flex justify-center gap-[20px] items-center">
      <StatisticCard
        label="Total Sales"
        value="554"
        primary={true}
        labelSpan={<span>Monthly</span>}
        size="md"
      />
      <StatisticCard
        label="Total Sales"
        value="9"
        primary={false}
        labelSpan={<span>Monthly</span>}
        size="md"
      />
    </div>

=======
      </div>
      <StatisticDynamicCard
        type="primary"
        title="Total Supplied Volume "
        content={<p>12,129,243,990.00</p>}
        icon={<House />}
        dropdownIcon={<KeyboardArrowDown />}
        onSortChange={(sortType, value) => console.log(`Sort by ${sortType}: ${value}`)}
        yearOptions={[2020, 2021, 2022, 2023]}
        valueOptions={[{ label: 'All Suppliers', value: 'high' }, { label: 'Total Suppliers', value: 'low' }]}
      />
>>>>>>> 2a98735b29a2c5ad116ae3bcd4f85447f114f563
    </>
  );
}

export default App;
