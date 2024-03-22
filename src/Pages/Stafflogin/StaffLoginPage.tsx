import React, { useState } from 'react';
import Email from '../../../public/assets/png-icons/Email.png';
import Password from '../../../public/assets/png-icons/Password.png';
import AuthContainer from '../../Components/Authcontainer/AuthContainer';
import Button from '../../Components/ButtonComponent/Button';
import ContentContainer from '../../Components/Contentcontainer/ContentContainer';
import CustomInput from '../../Components/Custominput/CustomInput';



const PasswordResetPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        commonError: '',
    });

    const handleChange = (key: any) => (value: any) => {
        console.log(value)
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

        if (valid) {
            // Call your password reset API or logic here
            console.log('Resetting password...');
            setFormData({ email: '', password: '' });
        } else {
            setErrors(newErrors);
        }
    };

    const handleForgotPassword = () => {
        // Logic to handle forgot password action
        console.log('Forgot Password clicked');
        // You can open a modal or navigate to a forgot password page
    };

    const handleNewSignIn = () => {
        // Logic to handle new sign in action
        console.log('New Sign In clicked');
        // You can navigate to a new sign-in page
    };

    return (
        <div className="h-screen flex flex-col bg-nnpc-700">
            <div className="flex-1 flex items-center justify-center">
                <AuthContainer>
                    <h1 className='text-[20px] text-gray-500 font-semibold text-white'>NGML STAFF LOGIN</h1>
                    <div className='w-[100%] md:w-[350px] mx-auto space-y-4'>
                        <CustomInput
                            type="text"
                            value={formData.email}
                            onChange={handleChange('email')}
                            placeholder="Enter your email"
                            styleVariant='customStyle1'
                            icon={<img src={Email} alt='Email Icon' />}
                        />
                        {errors.emailError && <p className="text-red-500 h-[1px] absolute top-[106px] text-[14px]">{errors.emailError}</p>}
                        <CustomInput
                            type="password"
                            value={formData.password}
                            onChange={handleChange('password')}
                            placeholder="Enter a password"
                            styleVariant='customStyle1'
                            icon={<img src={Password} alt='Password Icon' />}
                        />
                        {errors.passwordError && <p className="text-red-500 h-[1px] absolute top-[163px] text-[14px]">{errors.passwordError}</p>}
                        {errors.commonError && <p className="text-red-500">{errors.commonError}</p>}
                    </div>
                    <div className='mt-4 w-[98%] flex items-center justify-center'>
                        <Button
                            type="primary"
                            label="Login"
                            action={handleResetPassword}
                            color="#FFFFFF"
                            fontStyle="italic"
                            width="100%"
                            height="40px"
                            fontSize="16px"
                            radius="20px"
                        />
                    </div>
                    <div className='mt-6'>
                        <Button
                            type="transparent"
                            label="Forgot Password?"
                            fontWeight='400'
                            color='#FFFFFF'
                            fontStyle='italic'
                            textDecoration='underline'
                            action={handleForgotPassword}
                        />
                    </div>
                </AuthContainer>
                <div className='absolute top-[67%] sm:w-[400px] md:w-[400px]'>
                    <ContentContainer type="translucent" width="100%" height="40px" borderRadius={20}>
                        <div className="w-full h-full flex justify-center items-center justify-between">
                            <p className='text-center text-[10px] md:text-sm text-white'>New to the Portal, Sign in Here</p>
                            <Button
                                type="outline"
                                label="New Sign In"
                                width='120px'
                                height='32px'
                                radius='32px'
                                color='#FFFFFF'
                                fontWeight='500'
                                lineHeight='24px'
                                action={handleNewSignIn}
                            />
                        </div>
                    </ContentContainer>
                </div>
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

export default PasswordResetPage;