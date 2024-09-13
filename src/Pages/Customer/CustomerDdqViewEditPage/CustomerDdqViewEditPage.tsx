import colors from '@/Utils/colors';
import { useState } from 'react';
import { Button, CustomInput } from '../../../Components/index';

const CustomerDdqViewEditPage = () => {

    const [formData, setFormData] = useState({
        supplierName: '',
        supplierEmail: '',
        supplierPhoneNumber: '',
        dateOfAgreement: '',
        agreementDuration: '',
        agreedVolume: '',
        costPerScf: '',
        entryQuantity: '',
        exitQuantity: ''
    });

    /**
     * Handles input changes by updating the form state.
     * @function handleInputChange
     * @param {string} name - The name of the form field to update.
     * @param {string} value - The new value for the form field.
     */
    const handleInputChange = (value: string, key: string) => {
        console.log(value)
        setFormData({ ...formData, [key]: value });
    };

    const options = ['2hr', '4hrs', '5hrs', '6hrs']

    return (
        <div className="w-full h-full pt-8 bg-white/50 rounded-lg">
            <div className="w-full px-8 justify-between items-center flex">
                <div className="text-center text-[#49526a] text-[32px] font-semibold font-['Mulish'] leading-loose">Due Diligence Questionaire</div>
                <div className="p-2.5 rounded-[32px] border border-[#e2e4eb] justify-between items-center gap-1 flex">
                    <img className="Icons w-4 h-4 p-[0.83px] justify-center items-center inline-flex" />
                    <div className="text-center text-[#828da9] text-xs font-normal font-['Mulish']">Close</div>
                </div>
            </div>
            <div className="">
                <div className="w-full h-8 px-5 py-2 bg-[#d2f69e] border-b border-[#e2e4eb] justify-between items-center gap-2.5 flex">
                    <div className="TableOfContent text-[#49526a] text-sm font-semibold font-['Mulish']">TABLE OF CONTENT</div>
                    <div className="Questioniare text-center text-[#49526a] text-sm font-semibold font-['Mulish']">QUESTIONIARE</div>
                    <div className="Status text-[#49526a] text-sm font-semibold font-['Mulish']">STATUS</div>
                </div>
                <div className="w-full flex justify-between gap-20">
                    <div className="space-y-2 ml-5">
                        <div>01 Section A: General</div>
                        <div className='ml-6'>
                            <div>Section A: Ownership an..</div>
                            <div>Section A: Financial info..</div>
                            <div>Section A: Legal</div>
                        </div>
                        <div>01 Section A: General</div>
                        <div className='ml-6'>
                            <div>Section A: Ownership an..</div>
                            <div>Section A: Financial info..</div>
                            <div>Section A: Legal</div>
                        </div>
                        <div>01 Section A: General</div>
                        <div className='ml-6'>
                            <div>Section A: Ownership an..</div>
                            <div>Section A: Financial info..</div>
                            <div>Section A: Legal</div>
                        </div>
                        <div>01 Section A: General</div>
                        <div className='ml-6'>
                            <div>Section A: Ownership an..</div>
                            <div>Section A: Financial info..</div>
                            <div>Section A: Legal</div>
                        </div>
                        <div>01 Section A: General</div>
                        <div className='ml-6'>
                            <div>Section A: Ownership an..</div>
                            <div>Section A: Financial info..</div>
                            <div>Section A: Legal</div>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-full'>
                            <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
                                <div className='border-2 border-dashed rounded-[20px] p-[20px] bg-dark-50'>
                                    <div className='flex-col space-y-5'>
                                        <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
                                        <CustomInput
                                            type="text"
                                            label='Supplier Registered Company Name'
                                            value={formData.supplierName}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierName')}
                                            placeholder="Input company name"
                                            styleVariant='customStyle5'
                                        />
                                        <CustomInput
                                            type="text"
                                            label='Supplier Email '
                                            value={formData.supplierEmail}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierEmail')}
                                            placeholder="Input email here"
                                            styleVariant='customStyle5'
                                        />
                                        <CustomInput
                                            type="text"
                                            label='Supplier Phone Number'
                                            value={formData.supplierPhoneNumber}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierPhoneNumber')}
                                            placeholder="Input phone number here"
                                            styleVariant='customStyle5'
                                        />
                                        <div className='flex flex-col md:flex-row gap-[10px]'>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    type="date"
                                                    label='Date of agreement'
                                                    value={formData.dateOfAgreement}
                                                    handleChangeEvent={(value) => handleInputChange(value, 'dateOfAgreement')}
                                                    placeholder="Enter Company Representative"
                                                    styleVariant='customStyle5'
                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    type="select"
                                                    label='Agreement Duration'
                                                    value={formData.agreementDuration}
                                                    handleChangeEvent={(value) => handleInputChange(value, 'agreementDuration')}
                                                    placeholder="Choose duration"
                                                    styleVariant='customStyle5'
                                                    options={options}
                                                />
                                            </div>
                                        </div>
                                        <CustomInput
                                            type="text"
                                            label='Supplier Registered Company Name'
                                            value={formData.supplierName}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierName')}
                                            placeholder="Input company name"
                                            styleVariant='customStyle5'
                                        />
                                        <CustomInput
                                            type="text"
                                            label='Supplier Email '
                                            value={formData.supplierEmail}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierEmail')}
                                            placeholder="Input email here"
                                            styleVariant='customStyle5'
                                        />
                                        <CustomInput
                                            type="text"
                                            label='Supplier Phone Number'
                                            value={formData.supplierPhoneNumber}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierPhoneNumber')}
                                            placeholder="Input phone number here"
                                            styleVariant='customStyle5'
                                        />
                                    </div>
                                </div>
                                <div className='border-2 border-dashed rounded-[20px] p-[20px] bg-dark-50'>
                                    <div className='flex-col space-y-5'>
                                        <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
                                        <CustomInput
                                            type="text"
                                            label='Supplier Registered Company Name'
                                            value={formData.supplierName}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierName')}
                                            placeholder="Input company name"
                                            styleVariant='customStyle5'
                                        />
                                        <div className='flex flex-col md:flex-row gap-[10px]'>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    type="date"
                                                    label='Date of agreement'
                                                    value={formData.dateOfAgreement}
                                                    handleChangeEvent={(value) => handleInputChange(value, 'dateOfAgreement')}
                                                    placeholder="Enter Company Representative"
                                                    styleVariant='customStyle5'
                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    type="select"
                                                    label='Agreement Duration'
                                                    value={formData.agreementDuration}
                                                    handleChangeEvent={(value) => handleInputChange(value, 'agreementDuration')}
                                                    placeholder="Choose duration"
                                                    styleVariant='customStyle5'
                                                    options={options}
                                                />
                                            </div>
                                        </div>
                                        <CustomInput
                                            type="text"
                                            label='Supplier Registered Company Name'
                                            value={formData.supplierName}
                                            handleChangeEvent={(value) => handleInputChange(value, 'supplierName')}
                                            placeholder="Input company name"
                                            styleVariant='customStyle5'
                                        />
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div className='border-dashed border-2 border rounded-[20px] p-[20px]'>
                                        <div className='flex-col space-y-5'>
                                            <h3 className='text-[#49526A] font-[700]'>AGREEMENT DETAILS</h3>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="date"
                                                        label='Date of agreement'
                                                        value={formData.dateOfAgreement}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'dateOfAgreement')}
                                                        placeholder="Enter Company Representative"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="select"
                                                        label='Agreement Duration'
                                                        value={formData.agreementDuration}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'agreementDuration')}
                                                        placeholder="Choose duration"
                                                        styleVariant='customStyle5'
                                                        options={options}
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Agreed Volume (Scf)'
                                                        value={formData.agreedVolume}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'agreedVolume')}
                                                        placeholder="Input volume here"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Cost per Scf (NGN)'
                                                        value={formData.costPerScf}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'costPerScf')}
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
                                                        value={formData.entryQuantity}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'entryQuantity')}
                                                        placeholder="Input entry quantity here"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Exit Quantity (Scf)'
                                                        value={formData.exitQuantity}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'exitQuantity')}
                                                        placeholder="Input exit quantity here"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div className='border-dashed border-2 border rounded-[20px] p-[20px]'>
                                        <div className='flex-col space-y-5'>
                                            <h3 className='text-[#49526A] font-[700]'>AGREEMENT DETAILS</h3>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="date"
                                                        label='Date of agreement'
                                                        value={formData.dateOfAgreement}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'dateOfAgreement')}
                                                        placeholder="Enter Company Representative"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="select"
                                                        label='Agreement Duration'
                                                        value={formData.agreementDuration}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'agreementDuration')}
                                                        placeholder="Choose duration"
                                                        styleVariant='customStyle5'
                                                        options={options}
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Agreed Volume (Scf)'
                                                        value={formData.agreedVolume}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'agreedVolume')}
                                                        placeholder="Input volume here"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Cost per Scf (NGN)'
                                                        value={formData.costPerScf}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'costPerScf')}
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
                                                        value={formData.entryQuantity}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'entryQuantity')}
                                                        placeholder="Input entry quantity here"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Exit Quantity (Scf)'
                                                        value={formData.exitQuantity}
                                                        handleChangeEvent={(value) => handleInputChange(value, 'exitQuantity')}
                                                        placeholder="Input exit quantity here"
                                                        styleVariant='customStyle5'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-2 border-dashed rounded-[20px] p-[20px] bg-dark-50'>
                                        <div className='flex-col space-y-5'>
                                            <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
                                            <CustomInput
                                                type="textarea"
                                                label='Supplier Registered Company Name'
                                                value={formData.supplierName}
                                                handleChangeEvent={(value) => handleInputChange(value, 'supplierName')}
                                                placeholder="Input company name"
                                                styleVariant='customStyle5'
                                            />
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
                        <div>
                            <div className="Status h-[2118px] flex-col justify-start items-start inline-flex">
                                <div className="Preview h-12 bg-[#f6f8fa] border-l flex-col justify-start items-center flex">
                                    <div className="Frame238103 self-stretch p-2 border-b justify-between items-center inline-flex">
                                        <div className="Page1Of12Showing text-[#49526a] text-xs font-semibold font-['Mulish'] leading-3">Page 1 of 12 showing</div>
                                        <div className="Frame238116 justify-end items-center gap-2 flex">
                                            <div className="PageCounter w-8 h-8 p-2.5 rounded-[40px] border border-[#e2e4eb] flex-col justify-center items-center gap-2.5 inline-flex">
                                                <div className="Icon p-1 origin-top-left rotate-180 rounded justify-center items-center gap-2.5 inline-flex">
                                                    <div className="IconsPack w-4 h-4 justify-center items-center flex">
                                                        <div className="Icons w-4 h-4 px-[5.50px] py-[2.83px] justify-center items-center inline-flex" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="PageCounter w-8 h-8 p-2.5 rounded-[40px] border border-[#e2e4eb] flex-col justify-center items-center gap-2.5 inline-flex">
                                                <div className="Icon p-1 origin-top-left rotate-180 rounded justify-center items-center gap-2.5 inline-flex">
                                                    <div className="IconsPack w-4 h-4 justify-center items-center flex">
                                                        <div className="Icons w-4 h-4 px-[5.50px] py-[2.83px] justify-center items-center inline-flex" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Pages w-[234px] grow shrink basis-0 bg-[#f6f8fa] border-l flex-col justify-start items-center flex">
                                    <div className="Frame238102 self-stretch h-[621px] p-2 flex-col justify-start items-center gap-2.5 flex">
                                        <div className="Frame237972 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="FillingStatus text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Filling status</div>
                                            </div>
                                            <div className=" text-center text-[#050505] text-xs font-normal font-['Mulish'] leading-3">72%</div>
                                        </div>
                                        <div className="Frame237969 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="Uploads text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">uploads</div>
                                            </div>
                                            <div className="12Uploads text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">6/12 Uploads</div>
                                        </div>
                                        <div className="Frame237971 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="Fields text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Fields</div>
                                            </div>
                                            <div className="41Fields text-center text-[#050505] text-xs font-normal font-['Mulish'] leading-3">22/41 Fields</div>
                                        </div>
                                        <div className="Frame237970 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="DateStarted text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Date Started</div>
                                            </div>
                                            <div className="Nov2023 text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">12/Nov/2023</div>
                                        </div>
                                        <div className="Frame237973 self-stretch p-2 bg-[#fff3d5] rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="Frame237964 p-1 bg-[#fd838f] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="DaysLeft text-center text-white text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">days left</div>
                                            </div>
                                            <div className="Days text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">13 Days</div>
                                        </div>
                                        <div className="Frame238120 w-[100px] h-[400px] relative" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDdqViewEditPage;
