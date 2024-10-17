/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading } from '@/Components'
import FormInput from '@/Components/Custominput/FormInput';
import { FormField, useGetFormByNameQuery } from '@/Redux/Features/FormBuilder/formBuilderService';
import colors from '@/Utils/colors'
import { Fragment, useEffect, useState } from 'react';


type CustomerData = {
    [key: string]: string | File | null;
};


const SiteVisitationPage = () => {
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError,] = useState<string>('');


    const { data, isSuccess, isLoading } = useGetFormByNameQuery('Sitevisiteform');

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

    return (
        <div className="p-[20px] rounded-[20px] w-[100%] h-fit " style={{ background: colors.dark[50] }}>
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'>
                <Heading as="h4" size="h6" color='primaryColor' className="font-[2px] text-dark-100">PICK DATES FOR SITE VISITES</Heading>
                <div className='mt-[20px]'>
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
                                />
                            </Fragment>
                        ))
                    ) : (
                        <p>No form fields available.</p>
                    )}
                </div>
            </div>

        </div>
    )
}
export default SiteVisitationPage




