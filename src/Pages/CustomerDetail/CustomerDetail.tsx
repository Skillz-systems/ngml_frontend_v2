/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from '@/Utils/colors';
import React, { useState } from 'react';
import { CustomInput } from '../../Components/index';
import images from '../../assets/index';

const CustomerDetail: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyEmail: '',
        companyPhoneNumber: '',
        representativeName: '',
        representativeEmail: '',
        customerType: '',
        industrial: ''
    });

    const handleInputChange = (value: string, key: string) => {
        console.log(value)
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
            <div className='border border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                <div className='flex-col space-y-5'>
                    <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
                    <div className='border-2 flex items-center justify-between rounded-[10px] h-16'>
                        <div className='ml-4'><img src={images.avatarLogo} alt="logo" /></div>
                        <div className='mr-4'><h2>COMPANY LOGO</h2></div>
                    </div>
                    <CustomInput
                        type="text"
                        label='Company Registered Name'
                        value={formData.companyName}
                        handleChangeEvent={(value) => handleInputChange(value, 'companyName')}
                        placeholder="Enter Company Registered Name"
                        styleVariant='customStyle5'
                    />
                    <CustomInput
                        type="text"
                        label='Company Email Address'
                        value={formData.companyEmail}
                        handleChangeEvent={(value) => handleInputChange(value, 'companyEmail')}
                        placeholder="Enter Company Email Address"
                        styleVariant='customStyle5'
                    />
                    <CustomInput
                        type="text"
                        label='Company Phone Number'
                        value={formData.companyPhoneNumber}
                        handleChangeEvent={(value) => handleInputChange(value, 'companyPhoneNumber')}
                        placeholder="Company Phone Number"
                        styleVariant='customStyle5'
                    />
                </div>
            </div>
            <div className='mt-6'>
                <div className='border border-nnpcdarkgreen-500 rounded-[20px] p-[20px]'>
                    <div className='flex-col space-y-5'>
                        <h3 className='text-[#49526A] font-[700]'>REPRESENTATIVE DETAILS</h3>
                        <CustomInput
                            type="text"
                            label='Company Representative'
                            value={formData.representativeName}
                            handleChangeEvent={(value) => handleInputChange(value, 'representativeName')}
                            placeholder="Enter Company Representative"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            label='Representative Email'
                            value={formData.representativeEmail}
                            handleChangeEvent={(value) => handleInputChange(value, 'representativeEmail')}
                            placeholder="Enter Representative Email"
                            styleVariant='customStyle5'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='border border-nnpcdarkgreen-500 rounded-[20px] p-[20px]'>
                    <div className='flex-col space-y-5'>
                        <h3 className='text-[#49526A] font-[700]'>CUSTOMER TYPE</h3>
                        <CustomInput
                            type="text"
                            value={formData.customerType}
                            handleChangeEvent={(value) => handleInputChange(value, 'customerType')}
                            placeholder="Ujv Partner"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            value={formData.industrial}
                            handleChangeEvent={(value) => handleInputChange(value, 'industrial')}
                            placeholder="Industrial"
                            styleVariant='customStyle5'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetail;