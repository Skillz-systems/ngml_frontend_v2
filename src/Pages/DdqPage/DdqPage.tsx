

import FormInput from '@/Components/Custominput/FormInput';
import { FileType } from '@/Components/Fileuploadinput/FileTypes';
import { Button, Modal } from '@/Components/index';
import { useModalManagement } from '@/Hooks/useModalManagement';
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
    const { isModalOpen, toggleModal } = useModalManagement('createLocationCustomer');

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
            toggleModal(true);
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










