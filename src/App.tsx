// import LinechartContent from './Components/ChartComponent/LinechartContent.jsx'

import InfoCard from './Components/InfoCardComponent/InfoCardComponent';



function App() {


  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        {/* <LinechartContent/> */}

        <InfoCard title="Total Views" number={1500} />
      </div>

    </>
  );
}

export default App;
