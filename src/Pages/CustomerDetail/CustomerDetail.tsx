
/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from '@/Utils/colors';
import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../Components/index';
import images from '../../assets/index';
import { FormField, useGetFormByEntityIdQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';

const CustomerDetail: React.FC = () => {
    const [formFields, setFormFields] = useState<FormField[]>([]);
    const [formData, setFormData] = useState<Record<string, string>>({});

    const { data, isSuccess } = useGetFormByEntityIdQuery('customerDetailsForm');
    const [submitForm, { isLoading: isSubmitting }] = useSubmitFormMutation();

    useEffect(() => {
        if (isSuccess && data) {

            let parsedForm;
            try {
                parsedForm = JSON.parse(data.data.json_form);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                console.log('Problematic JSON string:', data.data.json_form);
                parsedForm = [];
            }
            console.log(parsedForm)
            setFormFields(parsedForm);


            const initialData = parsedForm.reduce((acc: Record<string, string>, field: FormField) => {
                if (field.name) {
                    acc[field.name] = '';
                }
                return acc;
            }, {});

            setFormData(initialData);


        }


    }, [data, isSuccess])

    const handleInputChange = (value: string, key: string) => {
        setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleSubmit = async () => {
        const formFieldAnswers = formFields.map(field => ({
            id: field.id,
            elementType: field.type,
            name: field.name || field.id,
            placeholder: field.placeholder,
            key: field.name,
            value: formData[field.name as keyof typeof formData]
        }));

        const submissionData = {
            form_builder_id: data?.data.id,
            name: data?.data.name,
            process_flow_id: data?.data?.process_flow_id,
            process_flow_step_id: data?.data?.process_flow_step_id,
            tag_id: data?.data?.tag_id,
            form_field_answers: JSON.stringify(formFieldAnswers),
        };

        await submitForm(submissionData).unwrap();

    };

    return (
        <div className="p-[20px] rounded-[20px]" style={{ background: colors.dark[50] }}>
            <div className='border border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                <div className='flex-col space-y-5'>
                    <h3 className='text-[#49526A] font-[700]'>CUSTOMER DETAILS</h3>
                    <div className='border-2 flex items-center justify-between rounded-[10px] h-16'>
                        <div className='ml-4'><img src={images.avatarLogo} alt="logo" /></div>
                        <div className='mr-4'><h2>COMPANY LOGO</h2></div>
                    </div>

                    {formFields.length > 0 ? (
                        formFields.map((field) => (
                            <CustomInput
                                key={field.id}
                                type={field.type}
                                label={field.name}
                                value={formData[field.name as keyof typeof formData] || ''}
                                handleChangeEvent={(value) => handleInputChange(value, field.name as keyof typeof formData)}
                                placeholder={field.placeholder}
                                styleVariant='customStyle5'
                            />
                        ))
                    ) : (
                        <p>No form field available.</p>
                    )}
                </div>
            </div>

            <div className='mt-6'>
                <button
                    className='bg-green-500 text-white p-2 rounded'
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </div>
    );
};

export default CustomerDetail;

