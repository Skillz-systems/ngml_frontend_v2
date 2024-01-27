import Cancelicon from '../public/assets/Cancelicon.png';
import Badge from './Components/BadgeComponent/Badge';



function App() {


  return (
    <>

      <div>
        <Badge
          type="outline"
          label="Dangote sugar"
          height="30px"
          width="160px"
          fontSize="16px"
          fontWeight="500"
          icon={<img src={Cancelicon} alt="Cancel Icon" />}
          iconHeight="20px"
          iconWidth="20px"
          iconColor="blue"
          columnGap="4px"
          onIconClick={() => alert('Icon clicked!')}
        />
      </div>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div className=' w-screen h-screen bg-500-red'>
        {/* <NavigationBar
          Navigationlinks={Navigationlinks}

        /> */}
      </div>
      <div></div>
    </>
  );
}
export default App