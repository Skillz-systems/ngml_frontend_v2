
// import SearchComponent from './Components/SearchBarModalComponent/SearchResultComponent';

import StatisticRectangleCard from "./Components/Statisticrectanclecard/StatisticRectangleCard";
import Eyeopen from '/assets/png-icons/Eyeopen.png'

function App() {


  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      {/* <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        <SearchComponent />
      </div> */}
    <div className="flex gap-8 items-center justify-center">
      <StatisticRectangleCard
        icon={<img src={Eyeopen} alt='eyeopen'/>}
        title="Users"
        backgroundColor="bg-blue-200"
        valueColor="text-red-400"
        color="text-blue-800"
        size="w-64"
        iconBgColor="bg-red-400 rounded-full"
        iconSize="w-[10px]"
      />
      <StatisticRectangleCard
        icon={<img src={Eyeopen} alt='eyeopen'/>}
        title="Users"
        backgroundColor=""
        color="text-gray-400"
        size="w-96"
      />
      <StatisticRectangleCard
        icon={<img src={Eyeopen} alt='eyeopen'/>}
        title="Users"
        backgroundColor="bg-blue-200"
        color="text-blue-800"
        size="w-[500px]"
      />
    </div>

    </>
  );
}

export default App;
