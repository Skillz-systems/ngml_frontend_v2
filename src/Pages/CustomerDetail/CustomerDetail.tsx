import React, { useState } from 'react';
import { CustomInput, Heading } from '../../Components/index';
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

    const handleInputChange = (name: any, value: any) => {
        console.log(value)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="p-[20px] bg-dark-50 border rounded-[20px]">
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                <div className='flex-col space-y-5'>
                    <Heading as="h6" size="h6" color='primaryColor' className="font-[2px] text-dark-400">PERSONAL DETAILS</Heading>
                    <div className='border-2 flex items-center justify-between rounded-[10px] h-16'>
                        <div className='ml-4'><img src={images.avatar} alt="logo" /></div>
                        <div className='mr-4'><h2>COMPANY LOGO</h2></div>
                    </div>
                    <CustomInput
                        type="text"
                        label='Company Registered Name'
                        value={formData.companyName}
                        handleChangeEvent={(value: any) => handleInputChange('companyName', value)}
                        placeholder="Enter Company Registered Name"
                        styleVariant='customStyle5'
                    />
                    <CustomInput
                        type="text"
                        label='Company Email Address'
                        value={formData.companyEmail}
                        handleChangeEvent={(value: any) => handleInputChange('companyEmail', value)}
                        placeholder="Enter Company Email Address"
                        styleVariant='customStyle5'
                    />
                    <CustomInput
                        type="text"
                        label='Company Phone Number'
                        value={formData.companyPhoneNumber}
                        handleChangeEvent={(value: any) => handleInputChange('companyPhoneNumber', value)}
                        placeholder="Company Phone Number"
                        styleVariant='customStyle5'
                    />
                </div>
            </div>
            <div className='mt-6'>
                <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px]'>
                    <div className='flex-col space-y-5'>
                        <Heading as="h6" size="h6" color='primaryColor' className="font-[2px] text-dark-400">REPRESENTATIVE DETAILS</Heading>
                        <CustomInput
                            type="text"
                            label='Company Representative'
                            value={formData.representativeName}
                            handleChangeEvent={(value: any) => handleInputChange('representativeName', value)}
                            placeholder="Enter Company Representative"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            label='Representative Email'
                            value={formData.representativeEmail}
                            handleChangeEvent={(value: any) => handleInputChange('representativeEmail', value)}
                            placeholder="Enter Representative Email"
                            styleVariant='customStyle5'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px]'>
                    <div className='flex-col space-y-5'>
                        <Heading as="h6" size="h6" color='primaryColor' className="font-[2px] text-dark-400">CUSTOMER TYPE</Heading>
                        <CustomInput
                            type="text"
                            value={formData.customerType}
                            handleChangeEvent={(value: any) => handleInputChange('customerType', value)}
                            placeholder="Ujv Partner"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            value={formData.industrial}
                            handleChangeEvent={(value: any) => handleInputChange('industrial', value)}
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