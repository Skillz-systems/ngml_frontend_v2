/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from '@/Utils/colors';
import React, { Fragment, useEffect, useState } from 'react';
import images from '../../assets/index';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import FormInput from '@/Components/Custominput/FormInput';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import { FileType } from '@/Components/Fileuploadinput/FileTypes';
import { Button, Modal } from '@/Components';
import { toast } from 'react-toastify';
import { convertFileToBase64 } from '@/Utils/base64Converter';


type CustomerData = {
    [key: string]: string | File | null;
};

const CustomerDetail: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError, setFormError] = useState<string>('');


    const { data, isSuccess, isLoading } = useGetFormByNameQuery('CustomerDetailsform');
    const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();


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


    useEffect(() => {
        if (isModalOpen) {
            const allFilled = areRequiredFieldsFilled(customerForm, customerData);
            if (!allFilled) return;

        }
    }, [customerData, isModalOpen, customerForm]);

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        setFormError('');
        const searchParams = new URLSearchParams(location.search);

        if (open) {
            searchParams.set('EditCustomer', 'true');
        } else {
            searchParams.delete('createCustomer');
        }
    };


    const handleChange = (field: string, value: string | File | null) => {
        if (value instanceof File) {
            setCustomerData(prev => ({
                ...prev,
                [field]: value,
            }));
        } else {
            setCustomerData(prev => ({ ...prev, [field]: value || '' }));
        }
    };


    const handleEditCustomer = async () => {
        if (!areRequiredFieldsFilled(customerForm, customerData)) {
            setFormError('Please fill all required fields.');
            return;
        }

        try {
            setFormError('');
            const formFieldAnswers = await Promise.all(
                customerForm.map(async (field) => {
                    const value = customerData[field.name as keyof typeof customerData];
                    return {
                        id: field.id,
                        elementType: field.type,
                        name: field.name || field.id.toString(),
                        value: field.type === 'file' && value instanceof File
                            ? await convertFileToBase64(value)
                            : value || ''
                    };
                })
            );

            const payload = {
                form_field_answers: JSON.stringify(formFieldAnswers),
            };

            await submitForm(payload).unwrap();
            toast.success('Customer updated successfully!');
        } catch (error) {
            setFormError('Error updating customer. Please try again.');
        }
    };


    return (
        <div>
            <div className='flex justify-end mb-4'>
                <Button
                    type="secondary"
                    label="Edit Customer Details"
                    action={() => toggleModal(true)}
                    color="#FFFFFF"
                    width="200px"
                    height="40px"
                    radius="20px"
                />
            </div>
            <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
                <div className='border border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                    <div className='flex-col space-y-5'>
                        <h3 className='text-[#49526A] font-[700]'>PERSONAL DETAILS</h3>
                        <div className='border-2 rounded-[10px] p-4'>
                            <div className='flex items-center justify-between'>
                                <div><img src={images.avatarLogo} alt="logo" />
                                </div>
                                <div><h2>COMPANY LOGO</h2>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div>Company Name: {typeof customerData.companyName === 'string' ? customerData.companyName : 'N/A'}</div>
                                <div>Company Email: {typeof customerData.companyEmail === 'string' ? customerData.companyEmail : 'N/A'}</div>
                                <div>Company Phone Number: {typeof customerData.companyPhone === 'string' ? customerData.companyPhone : 'N/A'}</div>
                                <div>Company Address: {typeof customerData.companyAddress === 'string' ? customerData.companyAddress : 'N/A'}</div>
                            </div>
                        </div>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => {
                                setIsModalOpen(false);

                            }}
                            size='medium'
                            title='Create New Customer'
                            subTitle='Only Use this Method if the Customer is an already Existing Customer of the NGML'
                            buttons={[
                                <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
                                    <div className='w-[120px]'>
                                        <Button
                                            type="outline"
                                            label="Cancel"
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
                                            label={submitLoading ? 'Updating...' : 'Edit customer Details'}
                                            action={handleEditCustomer}
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
                                            value={
                                                form.type === 'file'
                                                    ? (customerData[form.name as keyof typeof customerData] as string || '')
                                                    : (customerData[form.name as keyof typeof customerData] as string || '')
                                            }
                                            required={form?.required}
                                            onChange={(value) => handleChange(form?.name as string, value)}
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
                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerDetail;
