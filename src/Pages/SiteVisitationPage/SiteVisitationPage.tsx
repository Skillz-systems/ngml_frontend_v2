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
                <Heading as="h4" size="h6" color='primaryColor' className="font-[2px] text-dark-100">PICK DATES FOR SITE VISITES</Heading>
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


















// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { CustomInput, Heading } from '@/Components';
// import colors from '@/Utils/colors';
// import { Fragment, useEffect, useState } from 'react';
// import { FormField, useGetFormByEntityIdQuery } from '@/Redux/Features/FormBuilder/formBuilderService';



// const SiteVisitationPage = () => {

//     const [siteVisitFields, setSiteVisitFields] = useState<FormField[]>([]);
//     const [siteVisitData, setSiteVisitData] = useState<Record<string, string>>({});

//     const { data, isSuccess, isLoading } = useGetFormByEntityIdQuery('siteVisitFormPage');


//     useEffect(() => {

//         if ( isSuccess && data ) {

//              let parsedForm;
//             try {
//                 parsedForm = JSON.parse(data.data.json_form);
//             } catch (error) {
//                 console.error('Error parsing JSON:', error);
//                 console.log('Problematic JSON string:', data.data.json_form);
//                 parsedForm = []; 
//             }
//             console.log(parsedForm)
//             setSiteVisitFields(parsedForm)

//             const initialData = parsedForm.reduce((acc: Record<string, string>, field: FormField) => {
//                 if (field.name) {
//                     acc[field.name] = '';
//                 }
//                 return acc;
//             }, {});

//             setSiteVisitData(initialData);
//         }
//     }, [data, isSuccess])
    

//     const handleInputChange = (value: string, key: string) => {
//         setSiteVisitData(prevData => ({ ...prevData, [key]: value }));
//     };


//     return (
//         <div className="p-[20px] rounded-[20px] w-[100%] h-fit " style={{ background: colors.dark[50] }}>
//             <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
//                 <Heading as="h4" size="h6" color='primaryColor' className="font-[2px] text-dark-100">PICK DATE FOR SITE VISIT</Heading>
//                 <div className='mt-[20px]'>
//                     {isLoading && <p>Loading form...</p>}
//                     {isSuccess && siteVisitFields.length > 0 ? (
//                         siteVisitFields.map(field => (
//                             <Fragment key={field.id}>
//                                 <CustomInput
//                                     required
//                                     type={field.type}
//                                     label={field.name}
//                                     value={siteVisitData[field.name as keyof typeof siteVisitData]}
//                                     handleChangeEvent={(value) => handleInputChange(value, field.name as keyof typeof siteVisitData)}
//                                     placeholder={field.placeholder}
//                                 />
//                             </Fragment>
//                         ))
//                     ) : (
//                         <p>No form fields available.</p>
//                     )}
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default SiteVisitationPage


