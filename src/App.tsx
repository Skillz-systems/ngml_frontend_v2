import Cancelicon from '../public/assets/Cancelicon.png';
import AuthContainer from './Components/AuthContainer/AuthContainer';
import Badge from './Components/BadgeComponent/Badge';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen gradient">
        <AuthContainer>
          <div className="">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              vitae assumenda, voluptas autem error obcaecati veritatis veniam
              quidem quisquam. Magnam animi nihil voluptatibus officiis
              obcaecati consequuntur nesciunt quasi autem veritatis!
            </p>
          </div>
        </AuthContainer>
      </div>
      <div>
        <Badge
          type="outline"
          label="Dangote sugar"
          height="30px"
          width="160px"
          fontSize="16px"
          fontWeight="500"
          radius="20px"
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
    </>
  );
}

export default App;
