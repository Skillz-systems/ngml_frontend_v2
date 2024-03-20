import React, { useState } from 'react';
import Email from '../../../public/assets/png-icons/Email.png';
import Password from '../../../public/assets/png-icons/Password.png';
import AuthContainer from '../../Components/Authcontainer/AuthContainer';
import Button from '../../Components/ButtonComponent/Button';
import ContentContainer from '../../Components/Contentcontainer/ContentContainer';
import CustomInput from '../../Components/Custominput/CustomInput';

const backgroundStyle = {
    background: 'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)'
};

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

    return (
        <div className="h-screen flex flex-col" style={backgroundStyle}>
            <div className="flex-1 flex items-center justify-center">
                <AuthContainer>
                    <h1 className='text-[25px] text-gray-500 font-semibold'>NGML STAFF LOGIN</h1>
                    <div className='w-[100%] md:w-[350px] mx-auto space-y-4'>
                        <CustomInput
                            type="text"
                            value={formData.email}
                            onChange={handleChange('email')}
                            placeholder="Enter your email"
                            styleVariant='customStyle1'
                            icon={<img src={Email} alt='Email Icon' />}
                            error={errors.emailError}
                        />
                        <CustomInput
                            type="password"
                            value={formData.password}
                            onChange={handleChange('password')}
                            placeholder="Enter a password"
                            styleVariant='customStyle1'
                            icon={<img src={Password} alt='Password Icon' />}
                            error={errors.passwordError}
                        />
                        {errors.commonError && <p className="text-red-500">{errors.commonError}</p>}
                    </div>
                    <div className='mt-3 w-[98%] flex items-center justify-center'>
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
                            label="Forgot Password"
                            fontWeight='400'
                            color='#49526A'
                            fontStyle='italic'
                            textDecoration='underline'
                            action={handleResetPassword}
                        />
                    </div>
                </AuthContainer>
                <div className='absolute top-[67%] w-full md:w-[400px]'>
                    <ContentContainer type="translucent" width="100%" height="40px" borderRadius={20}>
                        <div className="w-full h-full flex justify-center items-center justify-between">
                            <p className='text-center text-[10px] md:text-sm'>New to the Portal, Sign in Here</p>
                            <Button
                                type="outline"
                                label="New Sign In"
                                width='120px'
                                height='32px'
                                radius='32px'
                                color='#49526A'
                                fontWeight='500'
                                lineHeight='24px'
                                action={handleResetPassword}
                            />
                        </div>
                    </ContentContainer>
                </div>
            </div>
            <div className='mb-10 mr-6 ml-6'>
                <ContentContainer type="translucent" width="100%" height="30px" borderRadius={20}>
                    <div className="w-full h-full flex justify-center items-center">
                        <p className='text-center text-[10px] md:text-sm'>This Portal is a Property of NNPC Gas Marketing Limited</p>
                    </div>
                </ContentContainer>
            </div>
        </div>
    );
};

export default PasswordResetPage;