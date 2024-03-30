import images from '../../assets/index';
import React, { useState } from 'react';
import { CustomInput, ContentContainer } from '../../Components/index';

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
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="">
            <ContentContainer type="white" borderWidth={3} borderColor="green" borderRadius={20}>
                <div className='flex-col space-y-5'>
                    <h3>PERSONAL DETAILS</h3>
                    <div className='border-2 flex items-center justify-between rounded-[10px] h-16'>
                        <div className='ml-4'><img src={images.avatar} alt="logo" /></div>
                        <div className='mr-4'><h2>COMPANY LOGO</h2></div>
                    </div>
                    <CustomInput
                        type="text"
                        label='Company Registered Name'
                        value={formData.companyName}
                        onChange={(value: any) => handleInputChange('companyName', value)} // Pass 'companyName' as the name attribute
                        placeholder="Enter Company Registered Name"
                        styleVariant='customStyle5'
                    />
                    <CustomInput
                        type="text"
                        label='Company Email Address'
                        value={formData.companyEmail}
                        onChange={(value: any) => handleInputChange('companyEmail', value)}
                        placeholder="Enter Company Email Address"
                        styleVariant='customStyle5'
                    />
                    <CustomInput
                        type="text"
                        label='Company Phone Number'
                        value={formData.companyPhoneNumber}
                        onChange={(value: any) => handleInputChange('companyPhoneNumber', value)}
                        placeholder="Company Phone Number"
                        styleVariant='customStyle5'
                    />
                </div>
            </ContentContainer>
            <div className='mt-6'>
                <ContentContainer type="white" borderWidth={3} borderColor="green" borderRadius={20}>
                    <div className='flex-col space-y-5'>
                        <h3>REPRESENTATIVE DETAILS</h3>
                        <CustomInput
                            type="text"
                            label='Company Representative'
                            value={formData.representativeName}
                            onChange={(value: any) => handleInputChange('representativeName', value)}
                            placeholder="Enter Company Representative"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            label='Representative Email'
                            value={formData.representativeEmail}
                            onChange={(value: any) => handleInputChange('representativeEmail', value)}
                            placeholder="Enter Representative Email"
                            styleVariant='customStyle5'
                        />
                    </div>
                </ContentContainer>
            </div>
            <div className='mt-6'>
                <ContentContainer type="white" borderWidth={3} borderColor="green" borderRadius={20}>
                    <div className='flex-col space-y-5'>
                        <h3>CUSTOMER TYPE</h3>
                        <CustomInput
                            type="text"
                            value={formData.customerType}
                            onChange={(value: any) => handleInputChange('customerType', value)}
                            placeholder="Ujv Partner"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            value={formData.industrial}
                            onChange={(value: any) => handleInputChange('industrial', value)}
                            placeholder="Industrial"
                            styleVariant='customStyle5'
                        />
                    </div>
                </ContentContainer>
            </div>
        </div>
    );
};

export default CustomerDetail;