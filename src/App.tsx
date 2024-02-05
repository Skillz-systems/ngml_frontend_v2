
import { NotificationImportantOutlined } from '@mui/icons-material';
import NotificationAction from './Components/NotificationComponent/NotificationAction';




function App() {

  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ padding: '40px', }}>
        <NotificationAction
          notificationIcon={<NotificationImportantOutlined
            style={{
              width: '20px',
              height: '20px',
            }} />}
        />
      </div>
    </>
  );
}
export default App