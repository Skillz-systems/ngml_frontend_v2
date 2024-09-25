import {
    AuthContainer,
    Button,
    ContentContainer
} from '@/Components/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const SSOLogin: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col logingradient-bg w-[100%]">
            <div className="flex flex-col items-center justify-center flex-1 p-10 mb-6">
                <div className="w-[100%]">
                    <AuthContainer>
                        <h1 className="text-[12px] md:text-[18px] font-semibold text-white">
                            NGML STAFF LOGIN
                        </h1>
                        <div className="w-[100%] mt-2">
                            <div className="mx-auto space-y-4">
                                {/* <CustomInput
                                    type="text"
                                    value={formData.email}
                                    handleChangeEvent={handleChange('email')}
                                    placeholder="Enter your email"
                                    styleVariant="customStyle1"
                                    icon={<img src={images.email} alt="Email Icon" />}
                                /> */}
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Button
                                    type="primary"
                                    label='Login'
                                    action={() => navigate('/sso/redirect')}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="50px"
                                    fontSize="16px"
                                    radius="32px"
                                // disabled={isLoading}
                                />
                            </div>
                        </div>

                    </AuthContainer>
                </div>

            </div>
            <div className="mb-6 ml-6 mr-6">
                <ContentContainer
                    type="translucent"
                    width="100%"
                    height="30px"
                    borderRadius={32}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="text-center text-[8px] md:text-[10px] text-[#E3EADA]">
                            This Portal is a Property of NNPC Gas Marketing Limited
                        </p>
                    </div>
                </ContentContainer>
            </div>
        </div>
    );
};

export default SSOLogin;
