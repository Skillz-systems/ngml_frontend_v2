// import BarchartContent from './Components/ChartComponent/LinechartContent.jsx'

import BarchartContent from './Components/ChartComponent/BarChartContent';
import data from './Components/ChartComponent/Data';



function App() {


  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        <BarchartContent data={data}/>

        {/* <InfoCard title="Total Views" number={1500} /> */}
      </div>

    </>
  );
}

export default App;
