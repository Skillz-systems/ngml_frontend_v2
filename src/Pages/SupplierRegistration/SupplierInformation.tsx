// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';
// import { Button, CustomInput } from '../../Components/index';
// import colors from '@/Utils/colors';


// /**
// * `SupplierInformation` renders a form with inputs for supplier and agreement details.
// * It provides inputs for supplier name, email, phone number, and several agreement-related inputs like date, duration, volume, and cost.
// *
// * @component
// * @example
// * return (
// *   <SupplierInformation />
// * )
// */
// const SupplierInformation: React.FC = () => {
//     /**
//     * Holds and sets the form state for supplier information and agreement details.
//     * @state {Object} formData - Contains the current state of the form data.
//     */
//     const [formData, setFormData] = useState({
//         supplierName: '',
//         supplierEmail: '',
//         supplierPhoneNumber: '',
//         dateOfAgreement: '',
//         agreementDuration: '',
//         agreedVolume: '',
//         costPerScf: '',
//         entryQuantity: '',
//         exitQuantity: ''
//     });

//     /**
//      * Handles input changes by updating the form state.
//      * @function handleInputChange
//      * @param {string} name - The name of the form field to update.
//      * @param {string} value - The new value for the form field.
//      */
//     const handleInputChange = (value: string, key: string) => {
//         console.log(value)
//         setFormData({ ...formData, [key]: value });
//     };

//     const options=['2hr', '4hrs', '5hrs', '6hrs']

//     return (
//         <div>
//             <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
//                 <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
//                     <div className='flex-col space-y-5'>
//                         <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
//                         <CustomInput
//                             type="text"
//                             label='Supplier Registered Company Name'
//                             value={formData.supplierName}
//                             handleChangeEvent={(value) => handleInputChange(value, 'supplierName')}
//                             placeholder="Input company name"
//                             styleVariant='customStyle5'
//                         />
//                         <CustomInput
//                             type="text"
//                             label='Supplier Email '
//                             value={formData.supplierEmail}
//                             handleChangeEvent={(value) => handleInputChange(value, 'supplierEmail')}
//                             placeholder="Input email here"
//                             styleVariant='customStyle5'
//                         />
//                         <CustomInput
//                             type="text"
//                             label='Supplier Phone Number'
//                             value={formData.supplierPhoneNumber}
//                             handleChangeEvent={(value) => handleInputChange(value, 'supplierPhoneNumber')}
//                             placeholder="Input phone number here"
//                             styleVariant='customStyle5'
//                         />
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <div className='border-dashed border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px]'>
//                         <div className='flex-col space-y-5'>
//                             <h3 className='text-[#49526A] font-[700]'>AGREEMENT DETAILS</h3>
//                             <div className='flex flex-col md:flex-row gap-[10px]'>
//                                 <div className='flex-1'>
//                                     <CustomInput
//                                         type="date"
//                                         label='Date of agreement'
//                                         value={formData.dateOfAgreement}
//                                         handleChangeEvent={(value) => handleInputChange(value, 'dateOfAgreement')}
//                                         placeholder="Enter Company Representative"
//                                         styleVariant='customStyle5'
//                                     />
//                                 </div>
//                                 <div className='flex-1'>
//                                     <CustomInput
//                                         type="select"
//                                         label='Agreement Duration'
//                                         value={formData.agreementDuration}
//                                         handleChangeEvent={(value) => handleInputChange(value, 'agreementDuration')}
//                                         placeholder="Choose duration"
//                                         styleVariant='customStyle5'
//                                         options={options}
//                                     />
//                                 </div>
//                             </div>
//                             <div className='flex flex-col md:flex-row gap-[10px]'>
//                                 <div className='flex-1'>
//                                     <CustomInput
//                                         type="text"
//                                         label='Agreed Volume (Scf)'
//                                         value={formData.agreedVolume}
//                                         handleChangeEvent={(value) => handleInputChange(value, 'agreedVolume')}
//                                         placeholder="Input volume here"
//                                         styleVariant='customStyle5'
//                                     />
//                                 </div>
//                                 <div className='flex-1'>
//                                     <CustomInput
//                                         type="text"
//                                         label='Cost per Scf (NGN)'
//                                         value={formData.costPerScf}
//                                         handleChangeEvent={(value) => handleInputChange(value, 'costPerScf')}
//                                         placeholder="Input cost here"
//                                         styleVariant='customStyle5'
//                                     />
//                                 </div>
//                             </div>
//                             <div className='flex flex-col md:flex-row gap-[10px]'>
//                                 <div className='flex-1'>
//                                     <CustomInput
//                                         type="text"
//                                         label='Entry Quantity (Scf)'
//                                         value={formData.entryQuantity}
//                                         handleChangeEvent={(value) => handleInputChange(value,'entryQuantity')}
//                                         placeholder="Input entry quantity here"
//                                         styleVariant='customStyle5'
//                                     />
//                                 </div>
//                                 <div className='flex-1'>
//                                     <CustomInput
//                                         type="text"
//                                         label='Exit Quantity (Scf)'
//                                         value={formData.exitQuantity}
//                                         handleChangeEvent={(value) => handleInputChange(value,'exitQuantity')}
//                                         placeholder="Input exit quantity here"
//                                         styleVariant='customStyle5'
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="p-[20px] rounded-[20px] mt-[14px] mb-[20px] flex justify-end" style={{ background: colors.dark[50] }}>
//                 <Button
//                     type='primary'
//                     label='Proceed'
//                     fontSize='12px'
//                     width='117px'
//                     height='32px'
//                     radius='32px'
//                     action={function (): void {
//                         throw new Error('Function not implemented.');
//                     }} />

//             </div>
//         </div>
//     );
// };

// export default SupplierInformation;
















import React, { Fragment, useEffect, useState } from 'react';
import { useGetFormByEntityIdQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import { Button, CustomInput, Heading } from '../../Components/index';
import { FormField } from '@/Redux/Features/FormBuilder/formBuilderService';
import colors from '@/Utils/colors';

const SUPPLIER_FORM_ID = '7/0/0'; 

const SupplierInformation: React.FC = () => {
    const [supplierForm, setSupplierForm] = useState<FormField[]>([]);
    const [supplierData, setSupplierData] = useState<Record<string, string>>({});

    const { data, isSuccess, isLoading } = useGetFormByEntityIdQuery(SUPPLIER_FORM_ID);
    const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

    useEffect(() => {
        if (isSuccess && data) {
            let parsedForm;
            try {
                parsedForm = JSON.parse(data.data.json_form);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                parsedForm = [];
            }
            const updatedFields = parsedForm.filter((field: FormField) => field.id !== 0);
            setSupplierForm(updatedFields);
            const initialData = updatedFields.reduce((acc: Record<string, string>, field: FormField) => {
                if (field.key) {
                    acc[field.key] = '';
                }
                return acc;
            }, {});
            setSupplierData(initialData);
        }
    }, [data, isSuccess]);

    const handleInputChange = (value: string, key: string) => {
        setSupplierData(prevData => ({ ...prevData, [key]: value }));
    };

    const handleSubmit = async () => {
        const formFieldAnswers = supplierForm.map(field => ({
            id: field.id,
            elementType: field.elementType,
            name: field.name || field.key,
            placeholder: field.placeholder,
            key: field.key,
            value: supplierData[field.key as keyof typeof supplierData]
        }));

        const buildFormSubmission = {
            form_builder_id: data?.data.id,
            name: data?.data.name,
            process_flow_id: data?.data?.process_flow_id,
            process_flow_step_id: data?.data?.process_flow_step_id,
            tag_id: data?.data?.tag_id,
            form_field_answers: JSON.stringify(formFieldAnswers),
        };
        await submitForm(buildFormSubmission).unwrap();

    };

    return (
        <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600 mb-5">SUPPLIER INFORMATION</Heading>
                {isLoading ? (
                    <p>Loading form fields...</p>
                ) : supplierForm.length > 0 ? (
                    supplierForm.map((form) => (
                        <Fragment key={form.id}>
                            <CustomInput
                                required
                                type={form?.elementType}
                                label={form.name}
                                value={supplierData[form.key as keyof typeof supplierData] || ''}
                                handleChangeEvent={(value) => handleInputChange(value, form.key as keyof typeof supplierData)}
                                placeholder={form.placeholder}
                            />
                        </Fragment>
                    ))
                ) : (
                    <p>No form fields available.</p>
                )}
            </div>
            <div className="mt-[14px] mb-[20px] flex justify-end">
                <Button
                    type='primary'
                    label={submitLoading ? 'Submitting...' : 'Submit'}
                    fontSize='12px'
                    width='117px'
                    height='32px'
                    radius='32px'
                    action={handleSubmit}
                />
            </div>
        </div>
    );
};

export default SupplierInformation;






