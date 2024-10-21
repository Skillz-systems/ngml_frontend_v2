

// import FormInput from '@/Components/Custominput/FormInput';
// import { FileType } from '@/Components/Fileuploadinput/FileTypes';
// import { Button, Modal, PDFViewer } from '@/Components/index';
// import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
// import { convertFileToBase64 } from '@/Utils/base64Converter';
// import { areRequiredFieldsFilled } from '@/Utils/formValidation';
// import React, { Fragment, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// type CustomerData = {
//     [key: string]: string | File | null;
// };


// const DdqPage: React.FC = () => {

//     const samplePDFUrl = 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf';

//     const [customerForm, setCustomerForm] = useState<FormField[]>([]);
//     const [customerData, setCustomerData] = useState<CustomerData>({});
//     const [formError, setFormError] = useState<string>('');
//     const [customerId, setSetCustomerId] = useState<number | null>(null)


//     const location = useLocation()
//     //   const { data, isSuccess, isLoading } = useGetFormByNameQuery('Edditddqupload/customer/customerId');
//     const { data, isSuccess, isLoading } = useGetFormByNameQuery(`Edditddqupload/customer/${customerId}`, {
//         skip: !customerId
//     });





//     const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

//     useEffect(() => {
//         const customer = location.pathname.split('/')
//         setSetCustomerId(Number(customer[4]))
//         // alert(JSON.stringify(customer[4]))
//     }, [location])
//     const [isModalOpen, setIsModalOpen] = useState(false);


//     const navigate = useNavigate()


//     const toggleModal = (open: boolean) => {
//         setIsModalOpen(open);
//         const searchParams = new URLSearchParams(location.search);

//         if (open) {
//             searchParams.set('uploadDdq', 'true');
//         } else {
//             searchParams.delete('uploadDdq');
//         }

//         navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
//     };


//     useEffect(() => {
//         if (isSuccess && data) {
//             let parsedForm;
//             try {
//                 parsedForm = JSON.parse(data.data.json_form);
//                 setCustomerForm(parsedForm);

//                 const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
//                     if (field.name) {
//                         acc[field.name] = '';
//                         if (field.type === 'file') {
//                             acc[`${field.name}`] = null;
//                         }
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

//     const checkRequiredFields = (customerForm: FormField[], customerData: CustomerData) => {
//         const allFilled = areRequiredFieldsFilled(customerForm, customerData);
//         if (!allFilled) {
//             return false;
//         }
//         return true;
//     };

//     useEffect(() => {
//         checkRequiredFields(customerForm, customerData);
//     }, [customerData, customerForm]);

//     const handleEditButtonClick = () => {
//         toggleModal(true);
//     };
//     useEffect(() => {
//         const searchParams = new URLSearchParams(location.search);
//         const uploadDdq = searchParams.get('uploadDdq');

//         if (uploadDdq === 'true') {
//             setIsModalOpen(true);
//         }
//     }, [location.search]);


//     const uploadCustomerDdq = async () => {
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
//                             console.log(`Attempting to convert file: ${field.name}`, value);
//                             const base64File = await convertFileToBase64(value);
//                             console.log(`Base64 for ${field.name} (first 100 chars):`, base64File.substring(0, 100));
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

//             await submitForm(payload).unwrap();

//             const result = await submitForm(payload).unwrap();

//             if (result) {
//                 toast.success('Customer created successfully');
//                 const initialData = customerForm.reduce((acc: CustomerData, field: FormField) => {
//                     if (field.name) {
//                         acc[field.name] = field.type === 'file' ? null : '';
//                     }
//                     return acc;
//                 }, {});

//                 setCustomerData(initialData);
//                 setIsModalOpen(false);
//                 const searchParams = new URLSearchParams(location.search);
//                 searchParams.delete('createCustomer');
//                 navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setFormError('An error occurred while submitting the form. Please try again.');
//         }
//     };

//     return (
//         <div className='bg-[#FFFFFF] p-4 rounded-xl'>
//             <div className="rounded-xl border flex-col justify-start items-start bg-[#FFFFFF]">
//                 <div className="w-full h-[60px] px-3 py-2.5 bg-dark-50 border-b justify-between items-center flex">
//                     <div className="text text-xl font-bold font-['Mulish'] leading-tight">Due Diligence Questionnaire</div>
//                     <div className="px-4 py-2 rounded-[32px] border justify-center items-center gap-2.5 flex">

//                         <div className="text-base font-normal font-['Mulish'] leading-none tracking-tight cursor-pointer" onClick={handleEditButtonClick}>Upload DDQ</div>
//                     </div>
//                 </div>
//                 <div className="bg-dark-50 justify-between ">
//                     {/* <PDFViewer/> */}
//                     {/* <PDFViewer
//                         documentUrl="https://example.com/sample.pdf"
//                         width="800px"
//                         height="600px"
//                     /> */}
//                     <PDFViewer
//                         url={samplePDFUrl}
//                         className="w-full max-w-3xl mx-auto"

//                     />
//                 </div>
//                 <Modal
//                     isOpen={isModalOpen}
//                     onClose={() => toggleModal(false)}
//                     title="Upload DDQ"
//                     buttons={[
//                         <div className='flex gap-2 mb-[-10px]'>
//                             <div className='w-[120px]'>
//                                 <Button
//                                     type="outline"
//                                     label="Save and Close"
//                                     action={() => toggleModal(false)}
//                                     color="#FFFFFF"
//                                     fontStyle="italic"
//                                     width="100%"
//                                     height="40px"
//                                     fontSize="16px"
//                                     radius="20px"
//                                 />
//                             </div>
//                             <div className='w-[260px]'>
//                                 <Button
//                                     type="secondary"
//                                     label="Save and Continue"
//                                     action={uploadCustomerDdq}
//                                     color="#FFFFFF"
//                                     fontStyle="italic"
//                                     width="100%"
//                                     height="40px"
//                                     fontSize="16px"
//                                     radius="20px"
//                                     disabled={submitLoading || !areRequiredFieldsFilled(customerForm, customerData)}
//                                 />
//                             </div>
//                         </div>
//                     ]}
//                 >
//                     {formError && <p className="text-red-500 mb-4">{formError}</p>}
//                     {isLoading ? (
//                         <p>Loading form fields...</p>
//                     ) : customerForm.length > 0 ? (
//                         customerForm.map((form) => (
//                             <Fragment key={form.id}>
//                                 <FormInput
//                                     type={form?.type}
//                                     label={form.label ?? form.name}
//                                     value={
//                                         form.type === 'file'
//                                             ? (customerData[form.name as keyof typeof customerData] as string || '')
//                                             : (customerData[form.name as keyof typeof customerData] as string || '')
//                                     }
//                                     required={form?.required}
//                                     onChange={(value: string | File | null) => handleInputChange(form?.name as string, value)}
//                                     placeholder={form.placeholder}
//                                     options={form.options?.map(opt =>
//                                         typeof opt === 'string'
//                                             ? { label: opt, value: opt }
//                                             : opt
//                                     )}
//                                     maxSizeMB={10}
//                                     allowedFileTypes={[FileType.PDF]}

//                                 />
//                             </Fragment>
//                         ))
//                     ) : (
//                         <p>No form fields available.</p>
//                     )}
//                 </Modal>
//             </div>

//         </div>
//     );
// };

// export default DdqPage;

import FormInput from '@/Components/Custominput/FormInput';
import { FileType } from '@/Components/Fileuploadinput/FileTypes';
import { Button, Modal } from '@/Components/index';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import { convertFileToBase64 } from '@/Utils/base64Converter';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type CustomerData = Record<string, string | File | null>;

const DdqPage: React.FC = () => {


    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError, setFormError] = useState<string>('');
    const [customerId, setCustomerId] = useState<number | null>(null);
    const [customerSiteId, setCustomerSiteId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const { data, isSuccess, isLoading } = useGetFormByNameQuery(`Edditddqupload/customer/${customerId}/${customerSiteId}`, {
        skip: !customerId
    });

    const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

    useEffect(() => {
        const customer = location.pathname.split('/');
        setCustomerId(Number(customer[4]));
        setCustomerSiteId(Number(customer[5]))
    }, [location]);

    const toggleModal = useCallback((open: boolean) => {
        setIsModalOpen(open);
        const searchParams = new URLSearchParams(location.search);

        if (open) {
            searchParams.set('uploadDdq', 'true');
        } else {
            searchParams.delete('uploadDdq');
        }

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    }, [location, navigate]);

    useEffect(() => {
        if (isSuccess && data) {
            try {
                const parsedForm = JSON.parse(data.data.json_form);
                setCustomerForm(parsedForm);

                const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
                    if (field.name) {
                        acc[field.name] = field.type === 'file' ? null : '';
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

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const uploadDdq = searchParams.get('uploadDdq');

        if (uploadDdq === 'true') {
            setIsModalOpen(true);
        }
    }, [location.search]);

    const handleInputChange = useCallback((field: string, value: string | File | null) => {
        setCustomerData(prev => ({ ...prev, [field]: value }));
    }, []);

    const uploadCustomerDdq = useCallback(async () => {
        if (!areRequiredFieldsFilled(customerForm, customerData)) {
            setFormError('Please fill all required fields.');
            return;
        }

        try {
            setFormError('');
            const formFieldAnswers = await Promise.all(
                customerForm.map(async (field) => {
                    const value = customerData[field.name as keyof typeof customerData];

                    if (field.type === 'file' && value instanceof File) {
                        try {
                            const base64File = await convertFileToBase64(value);
                            return {
                                id: field.id,
                                elementType: field.type,
                                name: field.name || field.id.toString(),
                                placeholder: field.placeholder || '',
                                key: field.name || '',
                                value: base64File
                            };
                        } catch (error) {
                            console.error(`Error converting ${field.name} to Base64:`, error);
                            return null;
                        }
                    } else {
                        return {
                            id: field.id,
                            elementType: field.type,
                            name: field.name || field.id.toString(),
                            placeholder: field.placeholder || '',
                            key: field.name || '',
                            value: value || ''
                        };
                    }
                })
            );

            const validFormFieldAnswers = formFieldAnswers.filter(Boolean);
            console.log('customerSiteId', customerSiteId)

            const payload = {
                form_builder_id: data?.data?.id?.toString() || '',
                name: data?.data?.name || '',
                process_flow_id: data?.data?.process_flow_id?.toString() || '',
                process_flow_step_id: data?.data?.process_flow_step_id?.toString() || '',
                tag_id: data?.data?.tag_id || '',
                form_field_answers: JSON.stringify(validFormFieldAnswers),
            };

            const result = await submitForm(payload).unwrap();

            if (result) {
                toast.success('DDQ created successfully');
                setCustomerData({});
                toggleModal(false);
                const searchParams = new URLSearchParams(location.search);
                searchParams.delete('createCustomer');
                navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormError('An error occurred while submitting the form. Please try again.');
        }
    }, [customerForm, customerData, data, submitForm, toggleModal, location, navigate]);

    return (
        <div className='bg-[#FFFFFF] p-4 rounded-xl'>
            <div className="rounded-xl border flex-col justify-start items-start bg-[#FFFFFF]">
                <div className="w-full h-[60px] px-3 py-2.5 bg-dark-50 border-b justify-between items-center flex">
                    <div className="text text-xl font-bold font-['Mulish'] leading-tight">Due Diligence Questionnaire</div>
                    <div className="px-4 py-2 rounded-[32px] border justify-center items-center gap-2.5 flex">
                        <div className="text-base font-normal font-['Mulish'] leading-none tracking-tight cursor-pointer" onClick={() => toggleModal(true)}>Upload DDQ</div>
                    </div>
                </div>
                <div className="bg-dark-50 justify-between">

                    {/* <PDFViewer url='https://s28.q4cdn.com/392171258/files/doc_downloads/test.pdf' /> */}

                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => toggleModal(false)}
                    title="Upload DDQ"
                    buttons={[
                        <div key="buttons" className='flex gap-2 mb-[-10px]'>
                            <div className='w-[120px]'>
                                <Button
                                    type="outline"
                                    label="Save and Close"
                                    action={() => toggleModal(false)}
                                    color="#FFFFFF"
                                    fontStyle="italic"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                />
                            </div>
                            <div className='w-[260px]'>
                                <Button
                                    type="secondary"
                                    label="Save and Continue"
                                    action={uploadCustomerDdq}
                                    color="#FFFFFF"
                                    fontStyle="italic"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                    disabled={submitLoading || !areRequiredFieldsFilled(customerForm, customerData)}
                                />
                            </div>
                        </div>
                    ]}
                >
                    {formError && <p className="text-red-500 mb-4">{formError}</p>}
                    {isLoading ? (
                        <p>Loading form fields...</p>
                    ) : customerForm.length > 0 ? (
                        customerForm.map((form) => (
                            <Fragment key={form.id}>
                                <FormInput
                                    type={form?.type}
                                    label={form.label ?? form.name}
                                    value={customerData[form.name as keyof typeof customerData] as string || ''}
                                    required={form?.required}
                                    onChange={(value: string | File | null) => handleInputChange(form?.name as string, value)}
                                    placeholder={form.placeholder}
                                    options={form.options?.map(opt =>
                                        typeof opt === 'string'
                                            ? { label: opt, value: opt }
                                            : opt
                                    )}
                                    url={form?.url}
                                    maxSizeMB={10}
                                    allowedFileTypes={[FileType.PDF]}
                                />
                            </Fragment>
                        ))
                    ) : (
                        <p>No form fields available.</p>
                    )}
                </Modal>
            </div>
        </div>
    );
};

export default DdqPage;










