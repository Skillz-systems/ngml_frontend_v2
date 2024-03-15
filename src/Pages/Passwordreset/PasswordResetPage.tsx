import React, { useState } from 'react';
import Email from '../../../public/assets/png-icons/Email.png';
import Password from '../../../public/assets/png-icons/Password.png';
import AuthContainer from '../../Components/Authcontainer/AuthContainer';
import Button from '../../Components/ButtonComponent/Button';
import ContentContainer from '../../Components/Contentcontainer/ContentContainer';
import CustomInput from '../../Components/Custominput/CustomInput';

const PasswordResetPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (value: string | number | boolean | readonly string[] | undefined) => {
        console.log(value)
        setEmail(value as string);
    };

    const handlePasswordChange = (value: string | number | boolean | readonly string[] | undefined) => {
        setPassword(value as string);
    };

    const handleConfirmPasswordChange = (value: string | number | boolean | readonly string[] | undefined) => {
        setConfirmPassword(value as string);
    };

    const handleResetPassword = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            // Call your password reset API or logic here
            console.log('Resetting password...');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-400 via-yellow-300 to-green-100 flex flex-col" style={{ background: 'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)' }}>
            <div className="flex-1 flex items-center justify-center">
                <AuthContainer>
                    <h1 className='text-[25px] text-gray-500 font-semibold'>Set New Password</h1>
                    <div className='w-[100%] md:w-[350px] mx-auto space-y-4'>
                        <CustomInput
                            type="text"
                            label=""
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            styleVariant='customStyle1'
                            icon={<img src={Email} alt='Email Icon' />}
                        />
                        <CustomInput
                            type="password"
                            label=""
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter a password"
                            styleVariant='customStyle1'
                            icon={<img src={Password} alt='Password Icon' />}
                        />
                        <CustomInput
                            type="password"
                            label=""
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder="Re-Enter the password"
                            styleVariant='customStyle1'
                            icon={<img src={Password} alt='Password Icon' />}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <div className='mt-3 w-[98%] flex items-center justify-center'>
                        <Button
                            type="primary"
                            label="Save Password"
                            action={handleResetPassword}
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
                <ContentContainer type="white" width="100%" height="30px" borderRadius={20}>
                    <div className="w-full h-full flex justify-center items-center">
                        <p className='text-center text-sm md:text-sm'>This Portal is a Property of NNPC Gas Marketing Limited</p>
                    </div>
                </ContentContainer>
            </div>
        </div>
    );
};

export default PasswordResetPage;