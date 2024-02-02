// import DateCardList from './Components/DateCardComponent/DateCardList';

import Notification from './Components/NotificationComponent/Notification';




function App() {
  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      {/* <div style={{ backgroundColor: '#F9FBFD', height: 'screen', width: 'screen', }}>
        <DateCardList startDate={12} endDate={18} cardType="primary" />
      </div> */}
      <div>
        <Notification 
        count={6} 
        onClick={() => alert ('clicked')}
        
        />
      </div>
    </>
  );
}
export default App