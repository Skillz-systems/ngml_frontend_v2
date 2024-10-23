/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Heading, Modal } from '@/Components'
import FormInput from '@/Components/Custominput/FormInput';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import { convertFileToBase64 } from '@/Utils/base64Converter';
import colors from '@/Utils/colors'
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


type CustomerData = {
    [key: string]: string | File | null;
};


const SiteVisitationPage = () => {
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError, setFormError] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);



    const { data, isSuccess, isLoading } = useGetFormByNameQuery('Sitevisiteform');
    const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

    const navigate = useNavigate();


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

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        setFormError('');
        const searchParams = new URLSearchParams(location.search);

        if (open) {
            searchParams.set('createCustomer', 'true');
        } else {
            searchParams.delete('createCustomer');
        }
    };



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


    const updateSiteVisit = useCallback(async () => {
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
        <div>
           <div className='mb-2 flex justify-end'>
           <Button
                type="primary"
                label="Pick Site Visit Date"
                radius="20px"
                width="20%"
                height="32px"
                columnGap="5px"
                action={() => toggleModal(true)}
            />
           </div>
            <div className="p-[20px] rounded-[20px] w-[100%] h-fit " style={{ background: colors.dark[50] }}>
                <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                    <Heading as="h4" size="h6" color='primaryColor' className="font-[2px] text-dark-100">PICK DATES FOR SITE VISITES</Heading>
                    <div className='mt-[20px]'>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => toggleModal(false)}
                            title="Save Site Visit"
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
                                            action={updateSiteVisit}
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
                            ]}> {formError && <p className="text-red-500 mb-4">{formError}</p>}
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
                                        />
                                    </Fragment>
                                ))
                            ) : (
                                <p>No form fields available.</p>
                            )}
                        </Modal>

                    </div>
                </div>

            </div></div>

    )
}
export default SiteVisitationPage




