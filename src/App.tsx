
// import SearchComponent from './Components/SearchBarModalComponent/SearchResultComponent';

import ActivityLogCard from "./Components/Activitylogcard/ActivityLogCard";

// import StatisticRectangleCard from "./Components/Statisticrectanclecard/StatisticRectangleCard";
// import Records from '/assets/png-icons/Records.png'
// import Warning from '/assets/png-icons/Warning.png'
// import Staff from '/assets/png-icons/Staff.png'

function App() {


  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      {/* <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        <SearchComponent />
      </div> */}
      {/* <div className="flex gap-8 items-center justify-center">
        <StatisticRectangleCard
          icon={<img src={Records} alt='Records' />}
          title="Contracts Created"
          backgroundColor="bg-white"
          valueColor="text-green-700"
          color="text-gray-900"
          size="w-96"
          iconBgColor="bg-green-600 rounded-[7px]"
          iconSize="w-5"
          value="227"
        />
        <StatisticRectangleCard
          icon={<img src={Warning} alt='Warning' />}
          title="Processing Contracts"
          backgroundColor="bg-customYellow"
          color="text-gray-900"
          size="w-96"
          iconBgColor="bg-red-200 rounded-full"
        />
        <StatisticRectangleCard
          icon={<img src={Staff} alt='Staff' />}
          title="Un-verified Staff"
          backgroundColor="bg-white"
          valueColor="text-gray-600"
          color="text-gray-400"
          size="w-72"
          iconBgColor="bg-green-400 rounded-[7px]"
          iconSize="w-5"
          value="2,305"
        />
      </div> */}
       <div className="App">
      <ActivityLogCard 
        title="Meeting"
        text="Scheduled a team meeting for next Monday."
        dateTime="2024-02-09 10:00 AM"
      />
      <ActivityLogCard 
        title="Task Completed"
        text="Completed the UI design task."
        dateTime="2024-02-08 03:30 PM"
      />
    </div>

    </>
  );
}

export default App;
