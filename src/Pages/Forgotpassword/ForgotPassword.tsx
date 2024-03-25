import React, { useState } from 'react';
import Cancelicon from '../../../public/assets/png-icons/Cancellation.png';
import Email from '../../../public/assets/png-icons/Email.png';
import AuthContainer from '../../Components/Authcontainer/AuthContainer';
import Button from '../../Components/ButtonComponent/Button';
import ContentContainer from '../../Components/Contentcontainer/ContentContainer';
import CustomInput from '../../Components/Custominput/CustomInput';

const ForgotPassword: React.FC = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({
        emailError: '',
    });

    const handleChange = (key: any) => (value: any) => {
        setFormData({ ...formData, [key]: value });
        setErrors({ ...errors, [`${key}Error`]: '' });
    };

    const handleSubmit = () => {
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

        if (valid) {
            console.log('Submitting Staff ID....');
            setFormData({ email: '' });
        } else {
            setErrors(newErrors);
        }
    };

    const handleCancellation = () => {
        // Add cancellation logic here
        console.log('Cancellation action triggered');
        // Reset form data and clear errors
        setFormData({ email: '' });
        setErrors({ emailError: '' });
    };

    return (
        <div className="h-screen flex flex-col bg-nnpc-700 relative">
            <div className="absolute top-20 right-20">
                <Button
                    icon={<img src={Cancelicon} alt="cancel icon" />}
                    type="icon"
                    action={handleCancellation}
                    iconColor="#E2E4EB"
                    radius="100%"
                    width="40px"
                    height="40px"
                />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <AuthContainer>
                    <h1 className='text-[20px] text-gray-500 font-semibold text-white'>FORGOT PASSWORD</h1>
                    <div className='w-[100%] md:w-[350px] mx-auto space-y-4'>
                        <CustomInput
                            type="text"
                            value={formData.email}
                            onChange={handleChange('email')}
                            placeholder="Enter email here"
                            styleVariant='customStyle1'
                            icon={<img src={Email} alt='Email' />}
                        />
                        {errors.emailError && <p className="text-red-500 h-[1px] absolute top-[106px] text-[14px]">{errors.emailError}</p>}
                    </div>
                    <div className='mt-10 w-[98%] flex items-center justify-center'>
                        <Button
                            type="primary"
                            label="Submit"
                            action={handleSubmit}
                            color="#FFFFFF"
                            fontStyle="italic"
                            width="100%"
                            height="40px"
                            fontSize="16px"
                            radius="20px"
                        />
                    </div>
                </AuthContainer>
            </div>
            <div className='mb-10 mr-6 ml-6'>
                <ContentContainer type="translucent" width="100%" height="30px" borderRadius={20}>
                    <div className="w-full h-full flex justify-center items-center">
                        <p className='text-center text-[10px] md:text-sm text-white'>This Portal is a Property of NNPC Gas Marketing Limited</p>
                    </div>
                </ContentContainer>
            </div>
        </div>
    );
};

export default ForgotPassword;