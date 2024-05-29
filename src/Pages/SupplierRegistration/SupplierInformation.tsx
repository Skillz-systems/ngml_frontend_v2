/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, CustomInput } from '../../Components/index';
import colors from '@/Utils/colors';


/**
* `SupplierInformation` renders a form with inputs for supplier and agreement details.
* It provides inputs for supplier name, email, phone number, and several agreement-related inputs like date, duration, volume, and cost.
*
* @component
* @example
* return (
*   <SupplierInformation />
* )
*/
const SupplierInformation: React.FC = () => {
    /**
    * Holds and sets the form state for supplier information and agreement details.
    * @state {Object} formData - Contains the current state of the form data.
    */
    const [formData, setFormData] = useState({
        supplierName: '',
        supplierEmail: '',
        supplierPhoneNumber: '',
        representativeName: '',
        representativeEmail: '',
        customerType: '',
        industrial: ''
    });

    /**
     * Handles input changes by updating the form state.
     * @function handleInputChange
     * @param {string} name - The name of the form field to update.
     * @param {string} value - The new value for the form field.
     */
    const handleInputChange = (name: any, value: any) => {
        console.log(value)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
                <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                    <div className='flex-col space-y-5'>
                        <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
                        <CustomInput
                            type="text"
                            label='Supplier Registered Company Name'
                            value={formData.supplierName}
                            handleChangeEvent={(value: any) => handleInputChange('supplierName', value)}
                            placeholder="Input company name"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            label='Supplier Email '
                            value={formData.supplierEmail}
                            handleChangeEvent={(value: any) => handleInputChange('supplierEmail', value)}
                            placeholder="Input email here"
                            styleVariant='customStyle5'
                        />
                        <CustomInput
                            type="text"
                            label='Supplier Phone Number'
                            value={formData.supplierPhoneNumber}
                            handleChangeEvent={(value: any) => handleInputChange('supplierPhoneNumber', value)}
                            placeholder="Input phone number here"
                            styleVariant='customStyle5'
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='border-dashed border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px]'>
                        <div className='flex-col space-y-5'>
                            <h3 className='text-[#49526A] font-[700]'>AGREEMENT DETAILS</h3>
                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                <div className='flex-1'>
                                    <CustomInput
                                        type="date"
                                        label='Date of agreement'
                                        value={formData.representativeName}
                                        handleChangeEvent={(value: any) => handleInputChange('representativeName', value)}
                                        placeholder="Enter Company Representative"
                                        styleVariant='customStyle5'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <CustomInput
                                        type="select"
                                        label='Agreement Duration'
                                        value={formData.representativeEmail}
                                        handleChangeEvent={(value: any) => handleInputChange('representativeEmail', value)}
                                        placeholder="Choose duration"
                                        styleVariant='customStyle5'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                <div className='flex-1'>
                                    <CustomInput
                                        type="text"
                                        label='Agreed Volume (Scf)'
                                        value={formData.representativeName}
                                        handleChangeEvent={(value: any) => handleInputChange('representativeName', value)}
                                        placeholder="Input volume here"
                                        styleVariant='customStyle5'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <CustomInput
                                        type="text"
                                        label='Cost per Scf (NGN)'
                                        value={formData.representativeEmail}
                                        handleChangeEvent={(value: any) => handleInputChange('representativeEmail', value)}
                                        placeholder="Input cost here"
                                        styleVariant='customStyle5'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                <div className='flex-1'>
                                    <CustomInput
                                        type="text"
                                        label='Entry Quantity (Scf)'
                                        value={formData.representativeName}
                                        handleChangeEvent={(value: any) => handleInputChange('representativeName', value)}
                                        placeholder="Input entry quantity here"
                                        styleVariant='customStyle5'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <CustomInput
                                        type="text"
                                        label='Exit Quantity (Scf)'
                                        value={formData.representativeEmail}
                                        handleChangeEvent={(value: any) => handleInputChange('representativeEmail', value)}
                                        placeholder="Input exit quantity here"
                                        styleVariant='customStyle5'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-[20px] rounded-[20px] mt-[14px] mb-[20px] flex justify-end" style={{ background: colors.dark[50] }}>
                <Button
                    type='primary'
                    label='Proceed'
                    fontSize='12px'
                    width='117px'
                    height='32px'
                    radius='32px'
                    action={function (): void {
                        throw new Error('Function not implemented.');
                    }} />

            </div>
        </div>
    );
};

export default SupplierInformation;