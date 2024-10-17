/* eslint-disable @typescript-eslint/no-explicit-any */
import FormInput from '@/Components/Custominput/FormInput';
import { FormField, useGetFormByNameQuery } from '@/Redux/Features/FormBuilder/formBuilderService';
import React, { Fragment, useEffect, useState } from 'react';
// import { useGetCustomersQuery } from '@/Redux/Features/Customer/customerService';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
// import { convertFileToBase64 } from '@/Utils/base64Converter';
import { FileType } from '@/Components/Fileuploadinput/FileTypes';
import { useLocation } from 'react-router-dom';



type CustomerData = {
    [key: string]: string | File | null;
};



const EditDdqPage: React.FC = () => {
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [customerId, setSetCustomerId] = useState<number | null>(null)
    const [formError,] = useState<string>('');

    const location = useLocation()
    //   const { data, isSuccess, isLoading } = useGetFormByNameQuery('Edditddqupload/customer/customerId');
    const { data, isSuccess, isLoading } = useGetFormByNameQuery(`Edditddqupload/customer/${customerId}`, {
        skip: !customerId
    });





    // const [submitForm] = useSubmitFormMutation();

    useEffect(() => {
        const customer = location.pathname.split('/')
        setSetCustomerId(Number(customer[4]))
    }, [location])




    useEffect(() => {
        if (isSuccess && data) {
            let parsedForm;
            try {
                parsedForm = JSON.parse(data.data.json_form);
                setCustomerForm(parsedForm);

                const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
                    if (field.name) {
                        acc[field.name] = '';
                        if (field.type === 'file') {
                            acc[`${field.name}`] = null;
                        }
                    }
                    return acc;
                }, {});

                setCustomerData(initialData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                setCustomerForm([]);
            }
        }
    }, [data, isSuccess]);



    const handleInputChange = (field: string, value: string | File | null) => {
        if (value instanceof File) {
            setCustomerData(prev => ({
                ...prev,
                [field]: value,
            }));
        } else {
            setCustomerData(prev => ({ ...prev, [field]: value || '' }));
        }
    };



    const checkRequiredFields = (customerForm: FormField[], customerData: CustomerData) => {
        const allFilled = areRequiredFieldsFilled(customerForm, customerData);
        if (!allFilled) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        checkRequiredFields(customerForm, customerData);
    }, [customerData, customerForm]);


    return (
        <div>
            <div className='border-2 p-4 border-dashed border-dark-200 rounded-[10px] mt-2 space-y-4'>
                <h3>COMPANY DETAILS</h3>
                {formError && <p className="text-red-500 mb-4">{formError}</p>}
                {isLoading ? (
                    <p>Loading form fields...</p>
                ) : customerForm.length > 0 ? (
                    customerForm.map((form) => (
                        <Fragment key={form.id}>
                            <FormInput
                                type={form?.type}
                                label={form.label ?? form.name}
                                value={
                                    form.type === 'file'
                                        ? (customerData[form.name as keyof typeof customerData] as string || '')
                                        : (customerData[form.name as keyof typeof customerData] as string || '')
                                }
                                required={form?.required}
                                onChange={(value: string | File | null) => handleInputChange(form?.name as string, value)}
                                placeholder={form.placeholder}
                                options={form.options?.map(opt =>
                                    typeof opt === 'string'
                                        ? { label: opt, value: opt }
                                        : opt
                                )}
                                maxSizeMB={10}
                                allowedFileTypes={[FileType.PDF]}

                            />
                        </Fragment>
                    ))
                ) : (
                    <p>No form fields available.</p>
                )}
            </div>
        </div>
    );
};

export default EditDdqPage;

// import { Button, Modal } from '@/Components';
// import FormInput from '@/Components/Custominput/FormInput';
// import { FileType } from '@/Components/Fileuploadinput/FileTypes';
// import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
// import { convertFileToBase64 } from '@/Utils/base64Converter';
// import { areRequiredFieldsFilled } from '@/Utils/formValidation';
// import React, { Fragment, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// type CustomerData = {
//     [key: string]: string | File | null;
// };

// const EditDdqPage: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [customerForm, setCustomerForm] = useState<FormField[]>([]);
//     const [customerData, setCustomerData] = useState<CustomerData>({});
//     const [customerId, setCustomerId] = useState<number | null>(null);
//     const [formError, setFormError] = useState<string>('');

//     const location = useLocation();
//     const navigate = useNavigate();

//     const { data, isSuccess, isLoading } = useGetFormByNameQuery(`Edditddqupload/customer/${customerId}`, {
//         skip: !customerId
//     });

//     const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

//     useEffect(() => {
//         const customer = location.pathname.split('/');
//         setCustomerId(Number(customer[4]));
//     }, [location]);

//     useEffect(() => {
//         if (isSuccess && data) {
//             let parsedForm;
//             try {
//                 parsedForm = JSON.parse(data.data.json_form);
//                 setCustomerForm(parsedForm);

//                 const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
//                     if (field.name) {
//                         acc[field.name] = field.type === 'file' ? null : '';
//                     }
//                     return acc;
//                 }, {});

//                 setCustomerData(initialData);
//             } catch (error) {
//                 console.error('Error parsing JSON:', error);
//                 setCustomerForm([]);
//             }
//         }
//     }, [data, isSuccess]);

//     const toggleModal = (open: boolean) => {
//         setIsModalOpen(open);
//         setFormError('');
//         const searchParams = new URLSearchParams(location.search);

//         if (open) {
//             searchParams.set('createDdq', 'true');
//         } else {
//             searchParams.delete('createDdq');
//         }
//         navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
//     };

//     const handleInputChange = (field: string, value: string | File | null) => {
//         if (value instanceof File) {
//             setCustomerData(prev => ({
//                 ...prev,
//                 [field]: value,
//             }));
//         } else {
//             setCustomerData(prev => ({ ...prev, [field]: value || '' }));
//         }
//     };

//     const handleSubmit = async () => {
//         if (!areRequiredFieldsFilled(customerForm, customerData)) {
//             setFormError('Please fill all required fields.');
//             return;
//         }

//         try {
//             setFormError('');
//             const formFieldAnswers = await Promise.all(
//                 customerForm.map(async (field) => {
//                     const value = customerData[field.name as keyof typeof customerData];

//                     if (field.type === 'file' && value instanceof File) {
//                         try {
//                             const base64File = await convertFileToBase64(value);
//                             return {
//                                 id: field.id,
//                                 elementType: field.type,
//                                 name: field.name || field.id.toString(),
//                                 placeholder: field.placeholder || '',
//                                 key: field.name || '',
//                                 value: base64File
//                             };
//                         } catch (error) {
//                             console.error(`Error converting ${field.name} to Base64:`, error);
//                             return null;
//                         }
//                     } else {
//                         return {
//                             id: field.id,
//                             elementType: field.type,
//                             name: field.name || field.id.toString(),
//                             placeholder: field.placeholder || '',
//                             key: field.name || '',
//                             value: value || ''
//                         };
//                     }
//                 })
//             );

//             const validFormFieldAnswers = formFieldAnswers.filter(answer => answer !== null);

//             const payload = {
//                 form_builder_id: data?.data?.id?.toString() || '',
//                 name: data?.data?.name || '',
//                 process_flow_id: data?.data?.process_flow_id?.toString() || '',
//                 process_flow_step_id: data?.data?.process_flow_step_id?.toString() || '',
//                 tag_id: data?.data?.tag_id || '',
//                 form_field_answers: JSON.stringify(validFormFieldAnswers),
//             };

//             const result = await submitForm(payload).unwrap();

//             if (result) {
//                 const initialData = customerForm.reduce((acc: CustomerData, field: FormField) => {
//                     if (field.name) {
//                         acc[field.name] = field.type === 'file' ? null : '';
//                     }
//                     return acc;
//                 }, {});

//                 setCustomerData(initialData);
//                 toggleModal(false);
//                 // Optionally, you can add a success message or redirect the user
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setFormError('An error occurred while submitting the form. Please try again.');
//         }
//     };

//     useEffect(() => {
//         const searchParams = new URLSearchParams(location.search);
//         const createDdq = searchParams.get('createDdq');

//         if (createDdq === 'true') {
//             setIsModalOpen(true);
//         }
//     }, [location.search]);

//     return (
//         <div>
//             <Button
//                 type="primary"
//                 label="Edit DDQ"
//                 action={() => toggleModal(true)}
//                 color="#FFFFFF"
//                 fontStyle="italic"
//                 width="200px"
//                 height="35px"
//                 fontSize="16px"
//                 radius="20px"
//             />
//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={() => {
//                     setIsModalOpen(false);
//                     const searchParams = new URLSearchParams(location.search);
//                     searchParams.delete('createDdq');
//                     navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
//                 }}
//                 size='large'
//                 title='Edit DDQ'
//                 subTitle='Update the DDQ information'
//                 buttons={[
//                     <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
//                         <div className='w-[120px]'>
//                             <Button
//                                 type="outline"
//                                 label="Cancel"
//                                 action={() => toggleModal(false)}
//                                 color="#FFFFFF"
//                                 fontStyle="italic"
//                                 width="100%"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                             />
//                         </div>
//                         <div className='w-[260px]'>
//                             <Button
//                                 type="secondary"
//                                 label={submitLoading ? 'Updating...' : 'Update DDQ'}
//                                 action={handleSubmit}
//                                 color="#FFFFFF"
//                                 fontStyle="italic"
//                                 width="100%"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                                 disabled={submitLoading || !areRequiredFieldsFilled(customerForm, customerData)}
//                             />
//                         </div>
//                     </div>
//                 ]}
//             >
//                 {formError && <p className="text-red-500 mb-4">{formError}</p>}
//                 {isLoading ? (
//                     <p>Loading form fields...</p>
//                 ) : customerForm.length > 0 ? (
//                     customerForm.map((form) => (
//                         <Fragment key={form.id}>
//                             <FormInput
//                                 type={form?.type}
//                                 label={form.label ?? form.name}
//                                 value={
//                                     form.type === 'file'
//                                         ? (customerData[form.name as keyof typeof customerData] as string || '')
//                                         : (customerData[form.name as keyof typeof customerData] as string || '')
//                                 }
//                                 required={form?.required}
//                                 onChange={(value) => handleInputChange(form?.name as string, value)}
//                                 placeholder={form.placeholder}
//                                 options={form.options?.map(opt =>
//                                     typeof opt === 'string'
//                                         ? { label: opt, value: opt }
//                                         : opt
//                                 )}
//                                 maxSizeMB={10}
//                                 allowedFileTypes={[FileType.PDF]}
//                             />
//                         </Fragment>
//                     ))
//                 ) : (
//                     <p>No form fields available.</p>
//                 )}
//             </Modal>
//         </div>
//     );
// };

// export default EditDdqPage;