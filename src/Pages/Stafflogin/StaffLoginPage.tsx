/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * React functional component for staff login page.
 * @module StaffLoginPage
 */

import React, { useState } from 'react';

import images from '../../assets/index';
import { AuthContainer, Button, ContentContainer, CustomInput } from '../../Components/index';

/**
 * Functional component representing the staff login page.
 * @returns {JSX.Element} StaffLoginPage component
 */
const StaffLoginPage: React.FC = () => {
    /**
     * State hook to manage form data.
     * @type {Object}
     */
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    /**
     * State hook to manage form errors.
     * @type {Object}
     */
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        commonError: '',
    });

    /**
     * Function to handle input change.
     * @param {string} key - The key of the input field.
     * @returns {Function} Function to handle input change.
     */
    const handleChange = (key: any) => (value: any) => {
        console.log(value);
        setFormData({ ...formData, [key]: value });
        setErrors({ ...errors, [`${key}Error`]: '' });
    };

    /**
     * Function to handle login action.
     */
    const handleLogin = () => {
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
            // Call your Login API or logic here
            console.log('Resetting password...');
            setFormData({ email: '', password: '' });
        } else {
            setErrors(newErrors);
        }
    };

    /**
     * Function to handle forgot password action.
     */
    const handleForgotPassword = () => {
        // Logic to handle forgot password action
        console.log('Forgot Password clicked');
    };

    /**
     * Function to handle new sign-in action.
     */
    const handleNewSignIn = () => {
        console.log('New Sign In clicked');
        // You can navigate to a new sign-in page
    };

    return (
        <div className="min-h-screen flex flex-col bg-nnpc-700">
            <div className="flex-1 flex items-center justify-center">
                <AuthContainer>
                    <h1 className='text-[20px] font-semibold text-white'>NGML STAFF LOGIN</h1>
                    <div className='relative'>
                        <div className='w-[100%] md:w-[350px] mx-auto space-y-6'>
                            <CustomInput
                                type="text"
                                value={formData.email}
                                handleChangeEvent={handleChange('email')}
                                placeholder="Enter your email"
                                styleVariant='customStyle1'
                                icon={<img src={images.email} alt='Email Icon' />}
                            />
                            {errors.emailError && <p className="text-red-500 h-[1px] absolute top-[22px] text-[14px]">{errors.emailError}</p>}
                            <CustomInput
                                type="password"
                                value={formData.password}
                                handleChangeEvent={handleChange('password')}
                                placeholder="Enter a password"
                                styleVariant='customStyle1'
                                icon={<img src={images.password} alt='Password Icon' />}
                            />
                            {errors.passwordError && <p className="text-red-500 h-[1px] absolute top-[88px] text-[14px]">{errors.passwordError}</p>}
                            {errors.commonError && <p className="text-red-500">{errors.commonError}</p>}
                        </div>
                        <div className='mt-6 w-[98%] flex items-center justify-center'>
                            <Button
                                type="primary"
                                label="Login"
                                action={handleLogin}
                                color="#FFFFFF"
                                fontStyle="italic"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                            />
                        </div>
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
            </div>
            <div className='flex justify-center relative'>
                <div className='w-full md:w-[400px] absolute bottom-[4rem]'>
                    <ContentContainer type="translucent" height="40px" borderRadius={20}>
                        <div className="h-full flex justify-center items-center justify-between mr-2 ml-2">
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

export default StaffLoginPage;