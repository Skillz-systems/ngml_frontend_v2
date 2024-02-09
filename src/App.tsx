
// import { NotificationImportantOutlined } from '@mui/icons-material';
// import NotificationAction from './Components/NotificationComponent/NotificationAction';

import StatisticCard from "./Components/Statisticccard/StatisticCard";





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

      <div className="flex justify-between">
      <StatisticCard
        type="primary"
        label="Connect"
        value={100}
        text=""
        reportText=''
        reportIcon
      />
        <StatisticCard
        type="secondary"
        label="Connect"
        value={100}
        text=""
        reportText=""
        reportIcon
      />
        <StatisticCard
        type="tertiary"
        icon= 'icon'
        label="Connect"
        value={100}
        text="Primary Text"
        reportText="Report Text"
        reportIcon={<div>Report Icon</div>}
      />
      </div>

    </>
  );
}
export default App