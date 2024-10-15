import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, DocumentCard, Modal } from '../../Components/index';
import images from '../../assets/index';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
// import { useGetCustomersQuery } from '@/Redux/Features/Customer/customerService';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import { convertFileToBase64 } from '@/Utils/base64Converter';
import FormInput from '@/Components/Custominput/FormInput';
import { FileType } from '@/Components/Fileuploadinput/FileTypes';

interface CardDataItem {
    type: 'withLink' | 'withoutLink' | 'withReport';
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    linkText: string;
    linkText2: string;
    width: number | string;
    height: number | string;
}

type CustomerData = {
    [key: string]: string | File | null;
};

const CostAnalysis: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError, setFormError] = useState<string>('');

    const navigate = useNavigate();
    const location = useLocation();

    const { data, isSuccess, isLoading } = useGetFormByNameQuery('customeranalysisform');
    const [submitForm, { isSuccess: submitSuccess }] = useSubmitFormMutation();


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
            searchParams.set('uploadCapex', 'true');
        } else {
            searchParams.delete('uploadCapex');
        }

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
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

    const handleUploadCapex = async () => {
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
                            console.log(`Attempting to convert file: ${field.name}`, value);
                            const base64File = await convertFileToBase64(value);
                            console.log(`Base64 for ${field.name} (first 100 chars):`, base64File.substring(0, 100));
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

            const validFormFieldAnswers = formFieldAnswers.filter(answer => answer !== null);

            console.log('Form Field Answers:', validFormFieldAnswers);

            const payload = {
                form_builder_id: data?.data?.id?.toString() || '',
                name: data?.data?.name || '',
                process_flow_id: data?.data?.process_flow_id?.toString() || '',
                process_flow_step_id: data?.data?.process_flow_step_id?.toString() || '',
                tag_id: data?.data?.tag_id || '',
                form_field_answers: JSON.stringify(validFormFieldAnswers),
            };

            console.log('Payload:', payload);

            await submitForm(payload).unwrap();

            if (submitSuccess) toggleModal(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormError('An error occurred while submitting the form. Please try again.');
        }
    };

    const costAnalysisCardDataTwo: CardDataItem[] = [
        {
            type: 'withLink',
            title: 'Dangote Cement',
            subtitle: 'Site Survey Report',
            linkText: 'Last Updated',
            linkText2: '12/13/2023',
            icon: <img src={images.files} alt="Copy Icon" className="w-5 h-5" />,
            width: '200px',
            height: '100%',
        },
    ];

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const uploadCapex = searchParams.get('uploadCapex');

        if (uploadCapex === 'true') {
            setIsModalOpen(true);
        }
    }, [location.search]);

    return (
        <div className="w-full h-full p-4 bg-white rounded-xl flex flex-col gap-4 md:gap-6">
            <div className="w-full h-full bg-white rounded-xl border flex flex-col justify-start items-start gap-4">
                <div className="w-full flex flex-col md:flex-row justify-between items-center p-4 bg-white border rounded-xl">
                    <div className="text-lg md:text-xl font-bold font-['Mulish']">
                        Documents
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex items-center border px-3 py-2 rounded-3xl hover:bg-gray-100" onClick={() => toggleModal(true)}>
                            <img src={images.upload} alt="Upload" className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-base ml-2 cursor-pointer">Upload CAPEX</span>
                        </div>
                        <div className="border px-3 py-2 rounded-3xl hover:bg-gray-100">
                            <span className="text-sm md:text-base cursor-pointer">Create CAPEX</span>
                        </div>
                    </div>
                </div>
                <div className=" flex-wrap w-full p-3 bg-[#FFFFFF] border-b items-center gap-3 flex">
                    {costAnalysisCardDataTwo.map((cards, index) => (
                        <div key={index} className="flex flex-1 min-w-[150px] max-w-[200px]">
                            <DocumentCard
                                type={cards.type}
                                title={cards.title}
                                subtitle={cards.subtitle}
                                linkText={cards.linkText}
                                linkText2={cards.linkText2}
                                icon={cards.icon}
                                // width={cards.width}
                                height={cards.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => toggleModal(false)}
                size='medium'
                title='CAPEX Sheet Upload'
                subTitle=''
                buttons={[
                    <div className='flex gap-2 mb-[-10px]'>
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
                                label="Confirm"
                                action={handleUploadCapex}
                                color="#FFFFFF"
                                fontStyle="italic"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
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
    );
};

export default CostAnalysis;