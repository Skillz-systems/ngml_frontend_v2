import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    AuthContainer,
    Button,
    ContentContainer,
    CustomInput,
} from '../../Components/index';
import images from '../../assets/index';
import '../../index.css';

const SSOUpdateUser: React.FC = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        location: '',
        designation: '',
        unit: ''
    });

    const keyValueOptions = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C', value: 'c' }
    ];


    const handleChange = (key: string) => (value: string) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div className="min-h-screen flex flex-col logingradient-bg w-[100%]">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center flex-1 p-10 mb-6">
                <div className="w-[100%]">
                    <AuthContainer>
                        <h1 className="text-[12px] md:text-[18px] font-semibold text-white">
                            Update Your Info
                        </h1>
                        <div className="w-[100%] mt-2">
                            <div className="mx-auto space-y-4">
                                <CustomInput
                                    type="select"
                                    options={['USA', 'Canada', 'UK', 'Australia']}
                                    value={formData.location}
                                    handleChangeEvent={handleChange('location')}
                                    placeholder="Select location"
                                    styleVariant="customStyle1"
                                    icon={<img src={images.email} alt="location" />}
                                />

                                <CustomInput
                                    type="select"
                                    options={['USA', 'Canada', 'UK', 'Australia']}
                                    value={formData.unit}
                                    handleChangeEvent={handleChange('location')}
                                    placeholder="Select unit"
                                    styleVariant="customStyle1"
                                    icon={<img src={images.email} alt="unit" />}
                                />

                                <CustomInput
                                    type="select"
                                    options={keyValueOptions}
                                    value={formData.designation}
                                    handleChangeEvent={handleChange('designation')}
                                    placeholder="Select Designation"
                                    styleVariant="customStyle1"
                                    icon={<img src={images.email} alt="designation" />}
                                />

                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Button
                                    type="primary"
                                    label='Update'
                                    action={() => navigate('/admin')}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="48px"
                                    fontSize="16px"
                                    radius="32px"

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

export default SSOUpdateUser;
