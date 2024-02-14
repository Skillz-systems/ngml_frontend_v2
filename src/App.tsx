
// import SearchComponent from './Components/SearchBarModalComponent/SearchResultComponent';

import StatisticRectangleCard from "./Components/Statisticrectanclecard/StatisticRectangleCard";
import Records from '/assets/png-icons/Records.png'
import Warning from '/assets/png-icons/Warning.png'

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
        icon={<img src={Records} alt='Records' />}
        title="Contracts Created"
        backgroundColor="bg-white"
        valueColor="text-green-500"
        color="text-gray-500"
        size="w-96"
        iconBgColor="bg-green-600 rounded-[7px]"
        iconSize="w-5"
        value="227"
      />
      <StatisticRectangleCard
        icon={<img src={Warning} alt='Warning'/>}
        title="Processing Contracts"
        backgroundColor="bg-customYellow"
        color="text-gray-400"
        size="w-96"
        iconBgColor="bg-red-300 rounded-full"
      />
      <StatisticRectangleCard
        icon={<img src={Records} alt='eyeopen'/>}
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
