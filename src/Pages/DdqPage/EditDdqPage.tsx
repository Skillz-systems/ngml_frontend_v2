import React, { Fragment, useEffect, useState } from 'react';
import { FormField, useGetFormByNameQuery } from '@/Redux/Features/FormBuilder/formBuilderService';
import FormInput from '@/Components/Custominput/FormInput';
// import { useGetCustomersQuery } from '@/Redux/Features/Customer/customerService';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
// import { convertFileToBase64 } from '@/Utils/base64Converter';
import { FileType } from '@/Components/Fileuploadinput/FileTypes';



type CustomerData = {
    [key: string]: string | File | null;
};

interface EditModalContentProps {
    companyData: any;
    setCompanyData: React.Dispatch<React.SetStateAction<any>>;
}

const EditDdqPage: React.FC<EditModalContentProps> = () => {
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError,] = useState<string>('');

    const { data, isSuccess, isLoading } = useGetFormByNameQuery('Editddqupload');
    // const [submitForm] = useSubmitFormMutation();
    



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




    // const handleCreateCustomer = async () => {

    //     if (!areRequiredFieldsFilled(customerForm, customerData)) {
    //         setFormError('Please fill all required fields.');
    //         return;
    //     }

    //     try {
    //         setFormError('');

    //         const formFieldAnswers = await Promise.all(
    //             customerForm.map(async (field) => {
    //                 const value = customerData[field.name as keyof typeof customerData];

    //                 if (field.type === 'file' && value instanceof File) {
    //                     try {
    //                         console.log(`Attempting to convert file: ${field.name}`, value);
    //                         const base64File = await convertFileToBase64(value);
    //                         console.log(`Base64 for ${field.name} (first 100 chars):`, base64File.substring(0, 100));
    //                         return {
    //                             id: field.id,
    //                             elementType: field.type,
    //                             name: field.name || field.id.toString(),
    //                             placeholder: field.placeholder || '',
    //                             key: field.name || '',
    //                             value: base64File
    //                         };
    //                     } catch (error) {
    //                         console.error(`Error converting ${field.name} to Base64:`, error);
    //                         return null;
    //                     }
    //                 } else {
    //                     return {
    //                         id: field.id,
    //                         elementType: field.type,
    //                         name: field.name || field.id.toString(),
    //                         placeholder: field.placeholder || '',
    //                         key: field.name || '',
    //                         value: value || ''
    //                     };
    //                 }
    //             })
    //         );

    //         const validFormFieldAnswers = formFieldAnswers.filter(answer => answer !== null);

    //         console.log('Form Field Answers:', validFormFieldAnswers);

    //         const payload = {
    //             form_builder_id: data?.data?.id?.toString() || '',
    //             name: data?.data?.name || '',
    //             process_flow_id: data?.data?.process_flow_id?.toString() || '',
    //             process_flow_step_id: data?.data?.process_flow_step_id?.toString() || '',
    //             tag_id: data?.data?.tag_id || '',
    //             form_field_answers: JSON.stringify(validFormFieldAnswers),
    //         };

    //         console.log('Payload:', payload);

    //         await submitForm(payload).unwrap();
        

    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //         setFormError('An error occurred while submitting the form. Please try again.');
    //     }

    // };


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