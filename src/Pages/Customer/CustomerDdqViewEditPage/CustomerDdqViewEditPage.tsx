import colors from '@/Utils/colors';
import { Button, CustomInput } from '../../../Components/index';
import images from '../../../assets/index';

interface CompanyDetailsProps {
    companyData: {
        companyName: string;
        rcNumber: string;
        natureOfBusiness: string;
        companyTelephoneNumber: string;
        companyMobileNumber: string;
        email: string;
        website: string;
        companyAddress: string;
        contactName: string;
        contactTelephone: string;
        contactEmail: string;
        contactAddress: string;
        title: string;
        firstName: string;
        otherName: string;
        lastName: string;
        phoneNumber: string;
        companyPosition: string;
        titlePlus: string;
        firstNamePlus: string;
        otherNamePlus: string;
        lastNamePlus: string;
        phoneNumberPlus: string;
        companyPositionPlus: string;
        jointVenture: string;
    }
}

const CustomerDdqViewEditPage: React.FC<CompanyDetailsProps> = ({ companyData }) => {

    /**
     * Handles input changes by updating the form state.
     * @function handleInputChange
     * @param {string} name - The name of the form field to update.
     * @param {string} value - The new value for the form field.
     */

    const handleInputChange = (value: string, key: string) => {
        console.log(value)
    };

    return (
        <div className="w-full h-full pt-8 bg-white/50 rounded-lg">
            <div className="w-full px-8 justify-between items-center flex">
                <div className="text-center text-[#49526a] text-[32px] font-semibold font-['Mulish'] leading-loose">Due Diligence Questionaire</div>
                <div className="p-2.5 rounded-[32px] border border-[#e2e4eb] justify-between items-center gap-1 flex">
                    <img src={images.cancelIcon} className="Icons w-4 h-4 p-[0.83px] justify-center items-center inline-flex" />
                    <div className="text-center text-[#828da9] text-xs font-normal font-['Mulish']">Close</div>
                </div>
            </div>
            <div className="mt-6">
                <div className="w-full h-8 px-5 py-2 bg-[#d2f69e] border-b border-[#e2e4eb] justify-between items-center gap-2.5 flex">
                    <div className="TableOfContent text-[#49526a] text-sm font-semibold font-['Mulish']">TABLE OF CONTENT</div>
                    <div className="Questioniare text-center text-[#49526a] text-sm font-semibold font-['Mulish']">QUESTIONIARE</div>
                    <div className="Status text-[#49526a] text-sm font-semibold font-['Mulish'] mr-10">STATUS</div>
                </div>
                <div className="w-full flex justify-between gap-20 mt-6">
                    <div className="space-y-2 ml-5">
                        <div>01 Section A: General</div>
                        <div className='ml-6'>
                            <div>Section A: Ownership an..</div>
                            <div>Section A: Financial info..</div>
                            <div>Section A: Legal</div>
                        </div>
                        <div>02 Section B: Gas Supply</div>
                        <div className='ml-6'>
                            <div>Section B: Commercial</div>
                            <div>Section B: Gas Off Take..</div>
                            <div>Section B: Permits and L..</div>
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
                    <div className='md:flex block w-full'>
                        <div className='w-full'>
                            <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
                                <div className='' >OWNERSHIP AND MANAGEMENT</div>
                                <div className='border-2 border-dashed rounded-[20px] p-[20px] bg-dark-50 mt-4'>
                                    <div className='flex-col space-y-5'>
                                        <h3 className='text-[#49526A] font-[700]'>COMPANY DETAILS</h3>
                                        <CustomInput
                                            required
                                            type="text"
                                            label='Company Name'
                                            value={companyData.companyName}
                                            handleChangeEvent={(value) => handleInputChange(value, "companyName")}
                                            placeholder="Company name"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                        <CustomInput
                                            required
                                            type="text"
                                            label='RC Number '
                                            value={companyData.rcNumber}
                                            handleChangeEvent={(value) => handleInputChange(value, "rcNumber")}
                                            placeholder="Input Rc number here"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                        <CustomInput
                                            required
                                            type="text"
                                            label='Nature of Business'
                                            value={companyData.natureOfBusiness}
                                            handleChangeEvent={(value) => handleInputChange(value, "natureOfBusiness")}
                                            placeholder="Input nature of business here"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                        <div className='flex flex-col md:flex-row gap-[10px]'>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    label='Company Telephone Number'
                                                    value={companyData.companyTelephoneNumber}
                                                    handleChangeEvent={(value) => handleInputChange(value, "companyTelephoneNumber")}
                                                    placeholder="Enter Company Telephone number"
                                                    styleVariant='customStyle5'
                                                    readOnly
                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    label='Company Mobile Number'
                                                    value={companyData.companyMobileNumber}
                                                    handleChangeEvent={(value) => handleInputChange(value, "companyMobileNumber")}
                                                    placeholder="Enter company Mobile number"
                                                    styleVariant='customStyle5'
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <CustomInput
                                            required
                                            type="text"
                                            label='Email'
                                            value={companyData.email}
                                            handleChangeEvent={(value) => handleInputChange(value, "email")}
                                            placeholder="Input email"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                        <CustomInput
                                            type="text"
                                            label='Website '
                                            value={companyData.website}
                                            handleChangeEvent={(value) => handleInputChange(value, "website")}
                                            placeholder="Input website here"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                        <CustomInput
                                            required
                                            type="text"
                                            label='Company Address'
                                            value={companyData.companyAddress}
                                            handleChangeEvent={(value) => handleInputChange(value, "companyAddress")}
                                            placeholder="Input phone number here"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className='border-2 border-dashed rounded-[20px] p-[20px] bg-dark-50 mt-4'>
                                    <div className='flex-col space-y-5'>
                                        <h3 className='text-[#49526A] font-[700]'>CONTACT PERSON</h3>
                                        <CustomInput
                                            required
                                            type="text"
                                            label='Contact Name'
                                            value={companyData.contactName}
                                            handleChangeEvent={(value) => handleInputChange(value, "contactName")}
                                            placeholder="Input contact name"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                        <div className='flex flex-col md:flex-row gap-[10px]'>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    label='Contact Telephone Number'
                                                    value={companyData.contactTelephone}
                                                    handleChangeEvent={(value) => handleInputChange(value, "contactTelephone")}
                                                    placeholder="Enter Contact Telephone"
                                                    styleVariant='customStyle5'
                                                    readOnly
                                                />
                                            </div>
                                            <div className='flex-1'>
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    label='Contact Email Address'
                                                    value={companyData.contactEmail}
                                                    handleChangeEvent={(value) => handleInputChange(value, "contactEmail")}
                                                    placeholder="Enter contact email"
                                                    styleVariant='customStyle5'
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <CustomInput
                                            type="text"
                                            label='Contact Address'
                                            value={companyData.contactAddress}
                                            handleChangeEvent={(value) => handleInputChange(value, "contactAddress")}
                                            placeholder="Input contact aaddress"
                                            styleVariant='customStyle5'
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div className='border-dashed border-2 border rounded-[20px] p-[20px]'>
                                        <div className='flex-col space-y-5'>
                                            <h3 className='text-[#49526A] font-[700]'>SENIOR MANAGEMENT/OFFICER</h3>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="select"
                                                        label='Title'
                                                        value={companyData.title}
                                                        handleChangeEvent={(value) => handleInputChange(value, "title")}
                                                        placeholder="Mr"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='First Name'
                                                        value={companyData.firstName}
                                                        handleChangeEvent={(value) => handleInputChange(value, "firstName")}
                                                        placeholder="Enter first name"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Other name'
                                                        value={companyData.otherName}
                                                        handleChangeEvent={(value) => handleInputChange(value, "otherName")}
                                                        placeholder="other names"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='Last Name'
                                                        value={companyData.lastName}
                                                        handleChangeEvent={(value) => handleInputChange(value, "lastName")}
                                                        placeholder="Input last name here"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='Phone Number'
                                                        value={companyData.phoneNumber}
                                                        handleChangeEvent={(value) => handleInputChange(value, "phoneNumber")}
                                                        placeholder="Input phone number here"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='Company Position'
                                                        value={companyData.companyPosition}
                                                        handleChangeEvent={(value) => handleInputChange(value, "companyPosition")}
                                                        placeholder="Input company position"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div className='border-dashed border-2 border rounded-[20px] p-[20px]'>
                                        <div className='flex-col space-y-5'>
                                            <h3 className='text-[#49526A] font-[700]'>SENIOR MANAGEMENT/OFFICER</h3>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="select"
                                                        label='Title'
                                                        value={companyData.titlePlus}
                                                        handleChangeEvent={(value) => handleInputChange(value, "titlePlus")}
                                                        placeholder="Mr"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='First Name'
                                                        value={companyData.firstNamePlus}
                                                        handleChangeEvent={(value) => handleInputChange(value, "firstNamePlus")}
                                                        placeholder="Enter first name"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        type="text"
                                                        label='Other name'
                                                        value={companyData.otherNamePlus}
                                                        handleChangeEvent={(value) => handleInputChange(value, "otherNamePlus")}
                                                        placeholder="other names"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='Last Name'
                                                        value={companyData.lastNamePlus}
                                                        handleChangeEvent={(value) => handleInputChange(value, "lastNamePlus")}
                                                        placeholder="Input last name here"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-[10px]'>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='Phone Number'
                                                        value={companyData.phoneNumberPlus}
                                                        handleChangeEvent={(value) => handleInputChange(value, "phoneNumberPlus")}
                                                        placeholder="Input phone number here"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <CustomInput
                                                        required
                                                        type="text"
                                                        label='Company Position'
                                                        value={companyData.companyPositionPlus}
                                                        handleChangeEvent={(value) => handleInputChange(value, "companyPositionPlus")}
                                                        placeholder="Input company position"
                                                        styleVariant='customStyle5'
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-2 border-dashed rounded-[20px] p-[20px] bg-dark-50 mt-4'>
                                        <div className='flex-col space-y-5'>
                                            <h3 className='text-[#49526A] font-[700]'>Joint Venture</h3>
                                            <CustomInput
                                                type="textarea"
                                                label=''
                                                value={companyData.jointVenture}
                                                handleChangeEvent={(value) => handleInputChange(value, "jointVenture")}
                                                styleVariant='customStyle5'
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[20px] rounded-[20px] mt-[14px] mb-[20px] flex justify-end" style={{ background: colors.dark[50] }}>
                                <Button
                                    type='primary'
                                    label='Continue'
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
                            <div className="h-full w-full">
                                <div className="h-12 bg-[#f6f8fa] border-l">
                                    <div className="w-full p-2 border-b justify-between items-center flex">
                                        <div className="text-[#49526a] text-xs font-semibold font-['Mulish'] leading-3">Page 1 of 12 showing</div>
                                        <div className="justify-end items-center gap-2 flex">
                                            <div className="w-8 h-8 p-2.5 rounded-[40px] border border-[#e2e4eb] justify-center items-center gap-2.5 flex">
                                                <div className="p-1">
                                                    <div className="w-4 h-4 justify-center items-center flex">
                                                        <img src={images.leftarrow} className="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 p-2.5 rounded-[40px] border border-[#e2e4eb] justify-center items-center gap-2.5 flex">
                                                <div className="p-1">
                                                    <div className="w-4 h-4 justify-center items-center flex">
                                                        <img src={images.rightarrow} className="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[234px] grow shrink basis-0 bg-[#f6f8fa] border-l flex-col justify-start items-center flex">
                                    <div className="w-full h-[621px] p-2 flex-col justify-start items-center gap-2.5 flex">
                                        <div className="w-full p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Filling status</div>
                                            </div>
                                            <div className="text-center text-[#050505] text-xs font-normal font-['Mulish'] leading-3">72%</div>
                                        </div>
                                        <div className="w-full p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">uploads</div>
                                            </div>
                                            <div className="text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">6/12 Uploads</div>
                                        </div>
                                        <div className="w-full p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Fields</div>
                                            </div>
                                            <div className="text-center text-[#050505] text-xs font-normal font-['Mulish'] leading-3">22/41 Fields</div>
                                        </div>
                                        <div className="w-full p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Date Started</div>
                                            </div>
                                            <div className="text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">12/Nov/2023</div>
                                        </div>
                                        <div className="w-full p-2 bg-[#fff3d5] rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                                            <div className="p-1 bg-[#fd838f] rounded-sm justify-center items-start gap-2.5 flex">
                                                <div className="text-center text-white text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">days left</div>
                                            </div>
                                            <div className="text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">13 Days</div>
                                        </div>
                                        <div className="w-[100px] h-[400px] relative" />
                                    </div>
                                </div>
                                {/* <div className="p-4 mt-6 w-full space-y-6 flex-col items-center gap-4">
                                    <div className="p-2 rounded-lg border justify-between items-center flex">
                                        <div className="p-1 bg-nnpcdark-100 rounded-sm justify-center items-start gap-2.5 flex">
                                            <div className="text-center text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Filling status</div>
                                        </div>
                                        <div className="text-center text-xs font-normal font-['Mulish'] leading-3">72%</div>
                                    </div>
                                    <div className="p-2 rounded-lg border justify-between items-center flex">
                                        <div className="p-1 bg-nnpcdark-100 rounded-sm justify-center items-start gap-2.5 flex">
                                            <div className="text-center text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">uploads</div>
                                        </div>
                                        <div className="text-center text-xs font-semibold font-['Mulish'] leading-3">6/12 Uploads</div>
                                    </div>
                                    <div className="p-2 rounded-lg border justify-between items-center flex">
                                        <div className="p-1 bg-nnpcdark-100 rounded-sm justify-center items-start gap-2.5 flex">
                                            <div className="text-center text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Fields</div>
                                        </div>
                                        <div className="text-center text-xs font-normal font-['Mulish'] leading-3">22/41 Fields</div>
                                    </div>
                                    <div className="p-2 rounded-lg border justify-between items-center flex">
                                        <div className="p-1 bg-nnpcdark-100 rounded-sm justify-center items-start gap-2.5 flex">
                                            <div className="text-center text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Date Started</div>
                                        </div>
                                        <div className="text-center text-zinc-950 text-xs font-semibold font-['Mulish'] leading-3">12/Nov/2023</div>
                                    </div>
                                    <div className="p-2 bg-nnpc-600 rounded-lg border border-dark-100 justify-between items-center flex">
                                        <div className="p-1 bg-nnpcred-300 rounded-sm justify-center items-start gap-2.5 flex">
                                            <div className="text-center text-white text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">days left</div>
                                        </div>
                                        <div className="text-center text-zinc-950 text-xs font-semibold font-['Mulish'] leading-3">13 Days</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDdqViewEditPage;
