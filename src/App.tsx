// import Cancelicon from '../public/assets/Cancelicon.png';
// import Badge from './Components/BadgeComponent/Badge';
import React, { useState } from 'react'
import CustomInput from "./Components/Custominput/CustomInput";
import Eyeopen from '/assets/png-icons/Eyeopen.png'
import AuthContainer from './Components/Authcontainer/AuthContainer';



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

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectChanges = (value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (value: string) => {
    setTextValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handleNumberChange = (value: string) => {
    // You can parse the value to a number if needed
    setNumberValue(Number(value));
  };

  const handleSelectChange = (value: string) => {
    setSelectValue(value);
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
<AuthContainer>
    <div className="container mx-auto mt-8">
    <CustomInput
      type="text"
      label="Text Input"
      value={textValue}
      onChange={handleInputChange}
      placeholder="Enter text"
      // icon={<img src={Eyeopen} alt='eyeopen' />}
      styleVariant="customStyle3"
    />

    <CustomInput
      required
      type="password"
      label="Password Input"
      value={passwordValue}
      onChange={handlePasswordChange}
      placeholder="Enter password"
      icon={<img src={Eyeopen} alt='eyeopen' />}
    />
    <CustomInput 
    type='select'
    label='khjgsdjhs'
    value={passwordValue}
    onChange={handlePasswordChange}
    styleVariant='custom4'
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