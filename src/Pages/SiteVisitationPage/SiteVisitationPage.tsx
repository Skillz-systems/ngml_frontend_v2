import { Button, Heading, Modal } from '@/Components';
import FormInput from '@/Components/Custominput/FormInput';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import colors from '@/Utils/colors';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type CustomerData = {
    [key: string]: string | File | null;
};

const SiteVisitationPage = () => {
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<Record<string, string | File | null>>({});
    const [formError, setFormError] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [buttonLabel, setButtonLabel] = useState<string>('Pick Site Visit Date');

    const { data, isSuccess, isLoading } = useGetFormByNameQuery('SiteVisitForm/0/0');
    const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

    useEffect(() => {
        if (isSuccess && data) {
            try {
                const parsedForm = JSON.parse(data.data.json_form);
                setCustomerForm(parsedForm);

                const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
                    acc[`${field.name}`] = '';
                    if (field.type === 'file') {
                        acc[`${field.name}`] = null;
                    }
                    return acc;
                }, {});

                setCustomerData(initialData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }, [data, isSuccess]);

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        setFormError('');
    };

    const handleInputChange = (field: string, value: string | File | null) => {
        setCustomerData(prev => ({ ...prev, [field]: value }));
    };

    const updateSiteVisit = useCallback(async () => {
        if (!areRequiredFieldsFilled(customerForm, customerData)) {
            setFormError('Please fill all required fields.');
            return;
        }

        try {
            const selectedDateField = customerForm.find(field => field.type === 'date');
            const dateValue = customerData[selectedDateField?.name || ''] as string;

            if (dateValue) {
                setSelectedDate(dateValue);
                setButtonLabel('Upload Site Report');
                toggleModal(false);
                toast.success('Site visit date saved successfully.');
            } else {
                toast.error('Please select a valid date.');
            }
        } catch (error) {
            console.error('Error saving site visit:', error);
            setFormError('An error occurred while saving the site visit. Please try again.');
        }
    }, [customerForm, customerData, submitForm]);

    return (
        <div>
            <div className="mb-2 flex justify-end">
                <Button
                    type="primary"
                    label={buttonLabel}
                    radius="20px"
                    width="20%"
                    height="32px"
                    columnGap="5px"
                    action={() => toggleModal(true)}
                />
            </div>
            <div className="p-[20px] rounded-[20px] w-[100%] h-fit" style={{ background: colors.dark[50] }}>
                <div className="border-2 border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50">
                    <Heading as="h4" size="h6" color="primaryColor" className="font-[2px] text-dark-100">
                        PICK DATES FOR SITE VISITES
                    </Heading>
                    <div className="mt-[20px]">
                        {selectedDate && (
                            <p className="text-primaryColor font-bold mb-4">
                                Selected Date: {selectedDate}
                            </p>
                        )}
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
                            ]}>
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
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteVisitationPage;
