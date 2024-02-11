import { NotificationImportantOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Notification from './Components/NotificationComponent/Notification';
import StatisticCard from './Components/Statisticccard/StatisticCard';

function App() {
  // const [showNotifications, setShowNotifications] = useState(false); 

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
          notifications={notificationsInfo }
          onClick={handleNotificationClick}
          renderIcon={() => <NotificationImportantOutlined />}
        />
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

    </>
  );
}

export default App;
