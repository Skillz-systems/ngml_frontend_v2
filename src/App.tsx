
// import SearchComponent from './Components/SearchBarModalComponent/SearchResultComponent';

import ActivityLogCardContainer from "./Components/Activitylogcard/ActivityLogCardContainer";
import Rightarrow from '/assets/png-icons/Rightarrow.png';

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
      {/* <div className="flex justify-center">
       <div className="w-[500px]">
      <ActivityLogCard 
        title="EOI REQUEST"
        text="Alberta Corporation Limited just sent in an EOI Request."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="EOI REQUEST"
        text="Ayolla Obasanjo just approved the Aberta Corporation EOI Request."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="SITE VISIT"
        text="Johnson Alaba has updated the site survey findings."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="SITE VISIT"
        text="GET Technologies has picked a survey date."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="DCQ"
        text="Benjamin Ayodele just updated the DCQ."
        dateTime={new Date()}
        button={<button className="bg-green-600 hover:bg-gray-100 text-white font-bold py-1 px-8 rounded-[30px]">View Request</button>}
      />
    </div>
    </div> */}
      <ActivityLogCardContainer
        size="550px"
        heading="Recent Activity"
        icon={Rightarrow}
        headingBgColor="bg-gray-100"
      />

    </>
  );
}

export default App;
