
import ChartComponent from './Components/ChartComponent/ChartComponent';

function App() {


  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        <ChartComponent
        dataType={'ordinal'}
        series={1}
        />
      </div>

    </>
  );
}

export default App;
