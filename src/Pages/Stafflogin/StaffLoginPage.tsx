import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContainer, Button, ContentContainer, CustomInput } from '../../Components/index';
import { useLoginMutation } from '../../Redux/Features/Auth/authService';
import { setCredentials } from '../../Redux/Features/Auth/authSlice';
import { useAppDispatch } from '../../Redux/hooks';
import images from '../../assets/index';
import '../../index.css';

const StaffLoginPage: React.FC = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        commonError: '',
    });

    const handleChange = (key: string) => (value: string) => {
        setFormData({ ...formData, [key]: value });
        setErrors({ ...errors, [`${key}Error`]: '' });
    };

    const handleLogin = async () => {
        let valid = true;
        const newErrors = { ...errors };

        if (!formData.email) {
            newErrors.emailError = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.emailError = 'Invalid email address';
            valid = false;
        }

        if (!formData.password) {
            newErrors.passwordError = 'Password is required';
            valid = false;
        }

        if (valid) {
            try {
                const response = await login(formData).unwrap();
                dispatch(setCredentials(response));
                // Redirect to the admin page upon successful login
                navigate('/admin');
            } catch (err) {
                setErrors({ ...newErrors, commonError: 'Incorrect Email or Password. Pls Try Again Later' });
            }
        } else {
            setErrors(newErrors);
        }
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password clicked');
    };

    const handleNewSignIn = () => {
        console.log('New Sign In clicked');
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="min-h-screen flex flex-col logingradient-bg w-[100%]">
            <div className="flex-1 flex items-center justify-center flex-col mb-6 p-10">
                <div className='w-[100%]'>
                    <AuthContainer>
                        <h1 className='text-[12px] md:text-[18px] font-semibold text-white'>NGML STAFF LOGIN</h1>
                        <div className='w-[100%] mt-2'>
                            <div className='mx-auto space-y-4'>
                                <CustomInput
                                    type="text"
                                    value={formData.email}
                                    handleChangeEvent={handleChange('email')}
                                    placeholder="Enter your email"
                                    styleVariant='customStyle1'
                                    icon={<img src={images.email} alt='Email Icon' />}
                                />
                                {errors.emailError && <p className="text-red-500 h-[1px] absolute top-[126px] text-[14px]">{errors.emailError}</p>}
                                <CustomInput
                                    type="password"
                                    value={formData.password}
                                    handleChangeEvent={handleChange('password')}
                                    placeholder="Enter your password"
                                    styleVariant='customStyle1'
                                    icon={<img src={images.password} alt='Password Icon' />}
                                />
                                {errors.passwordError && <p className="text-red-500 h-[1px] absolute top-[198px] text-[14px]">{errors.passwordError}</p>}
                                {errors.commonError && <p className="text-red-500">{errors.commonError}</p>}
                            </div>
                            <div className='mt-4 flex items-center justify-center'>
                                <Button
                                    type="primary"
                                    label={isLoading ? "Logging in..." : "Login"}
                                    action={handleLogin}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="48px"
                                    fontSize="16px"
                                    radius="32px"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Button
                                type="transparent"
                                label="Forgot Password?"
                                fontWeight='400'
                                color='#E3EADA'
                                fontStyle='italic'
                                textDecoration='underline'
                                action={handleForgotPassword}
                            />
                        </div>
                    </AuthContainer>
                </div>
                <div className='flex justify-center w-[100%]'>
                    <ContentContainer type="translucent" borderRadius={32}>
                        <div className="h-full flex items-center justify-between mr-2 ml-2">
                            <p className='text-center text-[8px] md:text-[12px] text-[rgba(5, 5, 5, 1)]'>New to the Portal, Sign in Here</p>
                            <Button
                                className="text-[8px] md:text-[12px]"
                                type="outline"
                                label="New Sign In"
                                width='120px'
                                height='30px'
                                radius='32px'
                                color='#E3EADA'
                                fontWeight='300'
                                lineHeight='24px'
                                action={handleNewSignIn}
                            />
                        </div>
                    </ContentContainer>
                </div>
            </div>
            <div className='mr-6 ml-6 mb-6'>
                <ContentContainer type="translucent" width="100%" height="30px" borderRadius={32}>
                    <div className="w-full h-full flex justify-center items-center">
                        <p className='text-center text-[8px] md:text-[10px] text-[#E3EADA]'>This Portal is a Property of NNPC Gas Marketing Limited</p>
                    </div>
                </ContentContainer>
            </div>
        </div>
    );
};

export default StaffLoginPage;