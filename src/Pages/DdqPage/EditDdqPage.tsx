import React from 'react';
import { CustomInput } from '../../Components/index';

interface EditModalContentProps {
    companyData: any;
    setCompanyData: React.Dispatch<React.SetStateAction<any>>;
}

const EditDdqPage: React.FC<EditModalContentProps> = ({ companyData, setCompanyData }) => {

    const handleInputChange = (value: any, key: any) => {
        console.log(value)
        setCompanyData({ ...companyData, [key]: value });
    };

    const options = ['Mr', 'Mrs', 'Dr', 'Prof'];

    return (
        <div>
            <div className='border-2 p-4 border-dashed border-dark-200 rounded-[10px] mt-2 space-y-4'>
                <h3>COMPANY DETAILS</h3>
                <CustomInput
                    required
                    type="text"
                    label='Company Name'
                    value={companyData.companyName}
                    handleChangeEvent={(value) => handleInputChange(value, "companyName")}
                    placeholder="Input Comapany Name here"
                />
                <CustomInput
                    required
                    type="text"
                    label='RC Number'
                    value={companyData.rcNumber}
                    handleChangeEvent={(value) => handleInputChange(value, "rcNumber")}
                    placeholder="Input Company RC Number"
                />
                <CustomInput
                    required
                    type="text"
                    label='Nature of Business'
                    value={companyData.natureOfBusiness}
                    handleChangeEvent={(value) => handleInputChange(value, "natureOfBusiness")}
                    placeholder="Input Your Nature of Business (e.g Cement Manufacturing)"
                />
                <div className='grid grid-cols-2 gap-2'>
                    <CustomInput
                        required
                        type="text"
                        label='Company Telephone No:'
                        value={companyData.companyTelephoneNumber}
                        handleChangeEvent={(value) => handleInputChange(value, "companyTelephoneNumber")}
                        placeholder="Input Company Telephone Number here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Company Mobile No:'
                        value={companyData.companyMobileNumber}
                        handleChangeEvent={(value) => handleInputChange(value, "companyMobileNumber")}
                        placeholder="Input Company Mobile Number Here"
                    />
                </div>
                <CustomInput
                    required
                    type="text"
                    label='Email'
                    value={companyData.email}
                    handleChangeEvent={(value) => handleInputChange(value, "email")}
                    placeholder="Input Company Email Here"
                />
                <CustomInput
                    type="text"
                    label='Website'
                    value={companyData.website}
                    handleChangeEvent={(value) => handleInputChange(value, "website")}
                    placeholder="Input Company Website Here"
                />
                <CustomInput
                    required
                    type="text"
                    label='Company Address'
                    value={companyData.companyaddress}
                    handleChangeEvent={(value) => handleInputChange(value, "companyaddress")}
                    placeholder="Input Company Address Here"
                />
            </div>
            <div className='border-2 p-4 border-dashed border-dark-200 rounded-[10px] mt-4 space-y-4'>
                <h3>SENIOR MANAGEMENT OFFICERS</h3>
                <div className='grid grid-cols-2 gap-2'>
                    <CustomInput
                        required
                        type="select"
                        label='Title'
                        value={companyData.title}
                        handleChangeEvent={(value) => handleInputChange(value, "title")}
                        placeholder="Input Your Title here"
                        options={options}
                    />
                    <CustomInput
                        required
                        type="text"
                        label='First Name'
                        value={companyData.firstName}
                        handleChangeEvent={(value) => handleInputChange(value, "firstName")}
                        placeholder="Input First Name herer"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Other Names'
                        value={companyData.otherName}
                        handleChangeEvent={(value) => handleInputChange(value, "otherName")}
                        placeholder="Input other given name here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Last Name'
                        value={companyData.lastName}
                        handleChangeEvent={(value) => handleInputChange(value, "lastName")}
                        placeholder="Input last name here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Phone Number'
                        value={companyData.phoneNumber}
                        handleChangeEvent={(value) => handleInputChange(value, "phoneNumber")}
                        placeholder="Input Phone Number Here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Company Position'
                        value={companyData.companyPosition}
                        handleChangeEvent={(value) => handleInputChange(value, "companyPosition")}
                        placeholder="Input company position here"
                    />
                </div>
            </div>
            <div className='border-2 p-4 border-dashed border-dark-200 rounded-[10px] mt-4 space-y-4'>
                <h3>SENIOR MANAGEMENT OFFICERS</h3>
                <div className='grid grid-cols-2 gap-2'>
                    <CustomInput
                        required
                        type="select"
                        label='Title'
                        value={companyData.titlePlus}
                        handleChangeEvent={(value) => handleInputChange(value, "titlePlus")}
                        placeholder="Input Your Title here"
                        options={options}
                    />
                    <CustomInput
                        required
                        type="text"
                        label='First Name'
                        value={companyData.firstNamePlus}
                        handleChangeEvent={(value) => handleInputChange(value, "firstNamePlus")}
                        placeholder="Input First Name herer"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Other Names'
                        value={companyData.otherNamePlus}
                        handleChangeEvent={(value) => handleInputChange(value, "otherNamePlus")}
                        placeholder="Input other given name here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Last Name'
                        value={companyData.lastNamePlus}
                        handleChangeEvent={(value) => handleInputChange(value, "lastNamePlus")}
                        placeholder="Input last name here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Phone Number'
                        value={companyData.phoneNumberPlus}
                        handleChangeEvent={(value) => handleInputChange(value, "phoneNumberPlus")}
                        placeholder="Input Phone Number Here"
                    />
                    <CustomInput
                        required
                        type="text"
                        label='Company Position'
                        value={companyData.companyPositionPlus}
                        handleChangeEvent={(value) => handleInputChange(value, "companyPositionPlus")}
                        placeholder="Input company position here"
                    />
                </div>
            </div>
            <div className='border-2 p-4 border-dashed border-dark-200 rounded-[10px] mt-4'>
                <h3>JOINT VENTURE</h3>
                <div className='mt-2'>
                    <CustomInput
                        type="textarea"
                        value={companyData.jointVenture}
                        handleChangeEvent={(value) => handleInputChange(value, "jointVenture")}
                        placeholder="Please give details of the existence or nature of any joint venture relationship in which the Company participates."
                    />
                </div>
            </div>
        </div>
    );
};

export default EditDdqPage;