
// import { NotificationImportantOutlined } from '@mui/icons-material';
// import NotificationAction from './Components/NotificationComponent/NotificationAction';

import { RemoveRedEye } from "@mui/icons-material";
import StatisticCard from "./Components/Staisticcard/StatisticCard";
import Eyeopen from '/assets/png-icons/Eyeopen.png'




function App() {

  return (
    <>
      {/* <div className="">
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
      </div> */}
          <div className="flex justify-around">
      <StatisticCard type="primary" label="Total Users" value={1000} />
      <StatisticCard type="secondary" label="Active Users" value={500} />
      <StatisticCard type="tertiary" label="Revenue" value="$50K" />
    </div>

    </>
  );
}
export default App