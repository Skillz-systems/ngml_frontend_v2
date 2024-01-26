import { useState } from 'react';
import CustomInput from './Components/Custominput/CustomInput';
import Eyeopen from '/assets/png-icons/Eyeopen.png';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputValues, setInputValues] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setError(''); // Clear error on input change
  };

  const handleInputChanges = (value: string) => {
    setInputValues(value);
    setError(''); // Clear error on input change
  };

  const handleSelectChange = (value: string) => {
    setSelectValue(value);
    setError(''); // Clear error on select change
  };

  const handleCheckboxChange = (value: boolean) => {
    setCheckboxValue(value);
    setError(''); // Clear error on checkbox change
  };
  const handleRadioChange = (value: boolean) => {
    setCheckboxValue(value);
    setError(''); // Clear error on checkbox change
  };

  const handleSubmit = () => {
    console.log(inputValue, inputValues, selectValue, checkboxValue)
    // Validate inputs
    if (!inputValue) {
      setError('Input is required.');
    } else if (!inputValues) {
      setError('enter password.');
    }
    else if (!selectValue) {
      setError('Select an option.');
    } else if (!checkboxValue) {
      setError('Checkbox must be checked.');
    } else if (!radioValue) {
      setError('radiobox must be checked.');
    } 
    else {
      // Submit the form or perform desired action
    }
  };

  return (
    <div className="App">
  <CustomInput
        type="text"
        label="Text Input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
        error={error}
        icon={<img src={Eyeopen} alt='eyeopen' />}
      />
      <CustomInput
        type="password"
        label="Password"
        value={inputValues}
        onChange={handleInputChanges}
        placeholder="Enter password"
        error={error}
        icon={<i className="fas fa-lock" />}
      />
      <CustomInput
        type="select"
        label="Select Input"
        value={selectValue}
        onChange={handleSelectChange}
        options={['Option 1', 'Option 2', 'Option 3']}
        error={error}
        icon={<i className="fas fa-caret-down" />}
      />
      <CustomInput
        type="checkbox"
        label="Checkbox"
        value={checkboxValue}
        onChange={handleCheckboxChange}
        error={error}
        icon={<i className="fas fa-check-square" />}
      />
        <CustomInput
        type="radio"
        label="Radio"
        value={radioValue}
        onChange={handleRadioChange}
        options={['Option 1', 'Option 2', 'Option 3']}
        error={error}
        icon={<i className="fas fa-check-square" />}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default App