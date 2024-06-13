/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomInput, Heading } from '@/Components'
import colors from '@/Utils/colors'
import { useState } from 'react';


const SiteVisitationPage = () => {
    const [formData, setFormData] = useState({
        firstSiteVisitDate: '',
        // secondSiteVisitDate: '',
        // thirdSiteVisitDate: '',
    });

    const handleInputChange = (value: string, key: string) => {
        console.log(value)
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div className="p-[20px] rounded-[20px] w-[100%] h-fit " style={{ background: colors.dark[50] }}>
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                <Heading as="h4" size="h6" color='primaryColor' className="font-[2px] text-dark-100">PICK DATE FOR SITE VISIT</Heading>
                <div className='mt-[20px]'>
                    <CustomInput
                        type="date"
                        label='1st Site Visit Date'
                        value={formData.firstSiteVisitDate}
                        handleChangeEvent={(value) => handleInputChange(value, 'firstSiteVisitDate')}
                        placeholder="Select First Date"
                        styleVariant='customStyle3'
                    />
                </div>
                {/* <div className='mt-[20px]'>
                    <CustomInput
                        type="date"
                        label='2nd Site Visit Date'
                        value={formData.secondSiteVisitDate}
                        handleChangeEvent={(value) => handleInputChange(value, 'secondSiteVisitDate')}
                        placeholder="Select First Date"
                        styleVariant='customStyle3'
                    />
                </div>
                <div className='mt-[20px]'>
                    <CustomInput
                        type="date"
                        label='3rd Site Visit Date'
                        value={formData.thirdSiteVisitDate}
                        handleChangeEvent={(value) => handleInputChange(value, 'thirdSiteVisitDate')}
                        placeholder="Select First Date"
                        styleVariant='customStyle3'
                    />
                </div> */}



            </div>

        </div>
    )
}
export default SiteVisitationPage

