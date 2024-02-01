// import Cancelicon from '../public/assets/Cancelicon.png';
// import Badge from './Components/BadgeComponent/Badge';
import { useState } from 'react';
import AuthContainer from './Components/Authcontainer/AuthContainer';
import CustomInput from "./Components/Custominput/CustomInput";
import Eyeopen from '/assets/png-icons/Eyeopen.png';



function App() {

  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectChanges = (value: string | number | boolean | readonly string[]) => {
    setSelectedOption(value as string);
  };

  const handleInputChange = (value: string | number | boolean | readonly string[]) => {
    setTextValue(value as string);
  };

  const handlePasswordChange = (value: string | number | boolean | readonly string[]) => {
    setPasswordValue(value as string);
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handleNumberChange = (value: string) => {
    // You can parse the value to a number if needed
    setNumberValue(Number(value));
  };

  const handleSelectChange = (value: string | number | boolean | readonly string[]) => {
    setSelectValue(value as string);
  };

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };

  const handleCheckboxChange = (value: boolean) => {
    setCheckboxValue(value);
  };

  const handleRadioChange = (value: string) => {
    setRadioValue(value);
  };

  return (
    // <>

    //   <div>
    //     <Badge
    //       type="outline"
    //       label="Dangote sugar"
    //       height="30px"
    //       width="160px"
    //       fontSize="16px"
    //       fontWeight="500"
    //       icon={<img src={Cancelicon} alt="Cancel Icon" />}
    //       iconHeight="20px"
    //       iconWidth="20px"
    //       iconColor="blue"
    //       columnGap="4px"
    //       onIconClick={() => alert('Icon clicked!')}
    //     />
    //   </div>
    //   <div className="">
    //     <p className="">Vite and React</p>
    //   </div>

    //   <div className=' w-screen h-screen bg-500-red'>
    //     {/* <NavigationBar
    //       Navigationlinks={Navigationlinks}

    //     /> */}
    //   </div>
    //   <div></div>
    // </>
    <AuthContainer backgroundColor="rgba(255, 255, 0, 0.2)">
      <div className="container mx-auto mt-8">
        <CustomInput
          type="text"
          label="Text Input"
          value={textValue}
          onChange={handleInputChange}
          placeholder="Enter text"
          // icon={<img src={Eyeopen} alt='eyeopen' />}
          styleVariant="customStyle1"
        />

        <CustomInput
          required
          type="password"
          label="Password Input"
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder="Enter password"
          icon={<img src={Eyeopen} alt='eyeopen' />}
          styleVariant="customStyle2"
        />
        <CustomInput
          type='select'
          label='khjgsdjhs'
          value={selectedOption}
          onChange={handleSelectChange}
          options={options}
          placeholder='hfkjflg;khlk'
        />
        <CustomInput
          type="radio"
          label="Choose One"
          value={selectedOption}
          onChange={handleSelectChanges}
          options={['Option A', 'Option B', 'Option C']}
        />
        <CustomInput
          required
          type="checkbox"
          label="Password Input"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </div>
    </AuthContainer>
  );
}
export default App