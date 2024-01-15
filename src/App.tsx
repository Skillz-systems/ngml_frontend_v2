import './App.css'
import Badge from './Components/Badge'
import Cancelicon from '../public/assets/Cancelicon.png'


function App() {

  return (
    <>
      <div>
        <p>
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div>
        <Badge
          type='outline'
          label='Dangote sugar'
          height='30px'
          width='160px'
          fontSize='16px'
          fontWeight='500'
          radius='20px'
          icon={<img src={Cancelicon} alt="Cancel Icon" />}
          iconHeight='20px'
          iconWidth='20px'
          iconColor='blue'
          columnGap='4px'
          onIconClick={() => alert ('Icon clicked!')}
        />
      </div>
    </>
  )
}

export default App
