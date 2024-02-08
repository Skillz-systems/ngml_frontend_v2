import { NotificationImportantOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Notification from './Components/NotificationComponent/Notification';

function App() {
  const [showNotifications, setShowNotifications] = useState(false); 

  const notificationsInfo = [
    {
      title: 'EOI REQUEST',
      date: '17 Nov; 12:03pm',
      content: 'Alberta Coporation Limited just sent in an EOI Request',
    },
    {
      title: 'EOI REQUEST',
      date: '17 Nov; 12:03pm',
      content: 'Alberta Coporation Limited just sent in an EOI Request',
    },
    {
      title: 'EOI REQUEST',
      date: '17 Nov; 12:03pm',
      content: 'Alberta Coporation Limited just sent in an EOI Request',
    },
    {
      title: 'EOI REQUEST',
      date: '17 Nov; 12:03pm',
      content: 'Alberta Coporation Limited just sent in an EOI Request',
    },
  ];

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <div className="">
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
      </div>
    </>
  );
}

export default App;
