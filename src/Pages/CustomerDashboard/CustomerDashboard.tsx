import { CustomInput, DailyVolumnTable } from '@/Components';
import Button from '@/Components/ButtonComponent/Button';
import Modal from '@/Components/Modal/Modal';
import StatisticRectangleCard from '@/Components/Statisticrectanclecard/StatisticRectangleCard';
import React, { useState } from 'react';
import images from '../../assets/index';

const CustomerDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    commonError: '',
  });

  const handleChange = (key: any) => (value: any) => {
    setFormData({ ...formData, [key]: value });
    setErrors({ ...errors, [`${key}Error`]: '' });
  };

  const handleResetPassword = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!formData.email) {
      newErrors.emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailError = 'Invalid email address';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.passwordError = 'Password is required';
      valid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPasswordError = 'Confirm password is required';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPasswordError = 'Passwords do not match';
      valid = false;
    }

    if (valid) {
      // Call your password reset API or logic here
      console.log('Resetting password...');
      setFormData({ email: '', password: '', confirmPassword: '' });
    } else {
      setErrors(newErrors);
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className="p-4 md:p-8 lg:p-8">
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <h1 className='text-[25px] font-[500] mb-4 md:mb-0'>CUSTOMERS</h1>
        <Button
          type='outline'
          label='Add Customer'
          radius='20px'
          width='150px'
          height='30px'
          action={toggleModal}
        />
      </div>
      <div className='flex flex-col md:flex-row items-center gap-6 mt-6'>
        <StatisticRectangleCard
          title='Total Customers'
          icon={<img src={images.customers} alt="staff icon" />}
          value='554'
          valueColor='text-green-800'
          iconBgColor='rounded-[5px] bg-nnpc-600'
        />
        <StatisticRectangleCard
          title='Active Customers'
          icon={<img src={images.customers} alt="staff icon" />}
          value='442'
          valueColor='text-black'
          iconBgColor='bg-lime-200 rounded-[5px]'
        />
        <StatisticRectangleCard
          title='Processing Customers'
          icon={<img src={images.warning} alt="staff icon" />}
          value='112'
          valueColor='text-green-800'
          backgroundColor='bg-orange-100'
          iconBgColor='rounded-full bg-orange-300'
        />
      </div>
      <DailyVolumnTable />
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        size='medium'
        title='Create New Customer'
        subTitle='Only Use this Method if the Customer is an already Existing Customer of the NGML'
        buttons={[
          <div className='flex gap-2 mb-[-10px]'>
            <div className='w-[120px]'>
              <Button
                type="outline"
                label="Cancel"
                action={toggleModal}
                color="#FFFFFF"
                fontStyle="italic"
                width="100%"
                height="40px"
                fontSize="16px"
                radius="20px"
              />
            </div>
            <div className='w-[260px]'>
              <Button
                type="secondary"
                label="Create Customer"
                action={handleResetPassword}
                color="#FFFFFF"
                fontStyle="italic"
                width="100%"
                height="40px"
                fontSize="16px"
                radius="20px"
              />
            </div>
          </div>
        ]}
      >
        <CustomInput
          required
          type="text"
          label='Name of Customer'
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Enter Name of Customer"
          error={errors.emailError}
        />
        <CustomInput
          required
          type="text"
          label='Email'
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Enter email"
          error={errors.emailError}
        />
        <CustomInput
          type="select"
          label='Customer Location'
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Choose Type"
          options={options}
          error={errors.emailError}
        />
        <CustomInput
          type="select"
          label='Customer Type'
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Choose Type"
          options={options}
          error={errors.emailError}
        />
        <CustomInput
          type="text"
          label='Customer Phone Number'
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Enter Phone Number"
          error={errors.emailError}
        />
      </Modal>
    </div>
  );
};

export default CustomerDashboard;