<<<<<<< HEAD
import { useState } from 'react';
import CustomInput from './Components/Custominput/CustomInput';
import Eyeopen from '/assets/png-icons/Eyeopen.png';
=======
import Cancelicon from '../public/assets/Cancelicon.png';
import Badge from './Components/BadgeComponent/Badge';


>>>>>>> 3d19dadfbc5d0ebd359a00736e4bdc52e103543f

function App() {


  return (
<<<<<<< HEAD
    <div className="App">
 
    </div>
=======
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
>>>>>>> 3d19dadfbc5d0ebd359a00736e4bdc52e103543f
  );
}
export default App