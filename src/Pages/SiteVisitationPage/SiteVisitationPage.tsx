import { Button, Heading, Modal } from '@/Components';
import FormInput from '@/Components/Custominput/FormInput';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import colors from '@/Utils/colors';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type CustomerData = {
    [key: string]: string | File | null;
};

const SiteVisitationPage = () => {
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [uploadReportForm, setUploadReportForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({});
    const [formError, setFormError] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');

    const navigate = useNavigate();
    const location = useLocation();
    const modalTypeFromUrl = new URLSearchParams(location.search).get('modal');

    const { data, isSuccess, isLoading } = useGetFormByNameQuery('SiteVisitForm/0/0');
    const { data: uploadReportData, isSuccess: isUploadSuccess, isLoading: isUploadLoading } = useGetFormByNameQuery('SiteUploadReport/0/0');
    const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

    useEffect(() => {
        if (isSuccess && data) {
            try {
                const parsedForm = JSON.parse(data.data.json_form);
                setCustomerForm(parsedForm);

                const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
                    acc[`${field.name}`] = field.type === 'file' ? null : '';
                    return acc;
                }, {});

                setCustomerData(initialData);
            } catch (error) {
                console.error('Error parsing JSON for SiteVisitForm:', error);
            }
        }
    }, [data, isSuccess]);

    useEffect(() => {
        if (isUploadSuccess && uploadReportData) {
            try {
                const parsedForm = JSON.parse(uploadReportData.data.json_form);
                setUploadReportForm(parsedForm);

                const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
                    acc[`${field.name}`] = field.type === 'file' ? null : '';
                    return acc;
                }, {});

                setCustomerData(initialData);
            } catch (error) {
                console.error('Error parsing JSON for SiteUploadReport:', error);
            }
        }
    }, [uploadReportData, isUploadSuccess]);

    const openModal = (type: 'siteVisitDate' | 'uploadSiteReport') => {
        navigate(`?modal=${type}`); // Update URL with modal type
    };

    const closeModal = () => {
        navigate('?modal='); // Clear the modal type from the URL
    };

    const handleInputChange = (field: string, value: string | File | null) => {
        setCustomerData((prev) => ({ ...prev, [field]: value }));
    };

    const updateSiteVisit = useCallback(async () => {
        if (!areRequiredFieldsFilled(customerForm, customerData)) {
            setFormError('Please fill all required fields.');
            return;
        }

        try {
            const selectedDateField = customerForm.find((field) => field.type === 'date');
            const dateValue = customerData[selectedDateField?.name || ''] as string;

            if (dateValue) {
                setSelectedDate(dateValue);
                closeModal();
                toast.success('Site visit date saved successfully.');
            } else {
                toast.error('Please select a valid date.');
            }
        } catch (error) {
            console.error('Error saving site visit:', error);
            setFormError('An error occurred while saving the site visit. Please try again.');
        }
    }, [customerForm, customerData]);

    const saveSiteReport = useCallback(async () => {
        if (!areRequiredFieldsFilled(uploadReportForm, customerData)) {
            setFormError('Please fill all required fields.');
            return;
        }

        try {
            const fileField = uploadReportForm.find((field) => field.type === 'file');
            const fileValue = customerData[fileField?.name || ''] as File;

            if (fileValue) {
                closeModal();
                toast.success('Site report uploaded successfully.');
            } else {
                toast.error('Please upload a valid file.');
            }
        } catch (error) {
            console.error('Error uploading site report:', error);
            setFormError('An error occurred while uploading the site report. Please try again.');
        }
    }, [uploadReportForm, customerData, submitForm]);

    return (
        <div>
            <div className="mb-2 flex justify-end gap-2">
                {!selectedDate ? (
                    <Button
                        type="primary"
                        label="Pick Site Visit Date"
                        radius="20px"
                        width="20%"
                        height="32px"
                        columnGap="5px"
                        action={() => openModal('siteVisitDate')}
                    />
                ) : (
                    <Button
                        type="secondary"
                        label="Upload Site Report"
                        radius="20px"
                        width="20%"
                        height="32px"
                        columnGap="5px"
                        action={() => openModal('uploadSiteReport')}
                    />
                )}
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
                            isOpen={modalTypeFromUrl === 'siteVisitDate' || modalTypeFromUrl === 'uploadSiteReport'}
                            onClose={closeModal}
                            title={modalTypeFromUrl === 'siteVisitDate' ? 'Save Site Visit' : 'Upload Site Report'}
                            buttons={[
                                <div key="buttons" className="flex gap-2 mb-[-10px]">
                                    <div className="w-[120px]">
                                        <Button
                                            type="outline"
                                            label="Save and Close"
                                            action={closeModal}
                                            color="#FFFFFF"
                                            fontStyle="italic"
                                            width="100%"
                                            height="40px"
                                            fontSize="16px"
                                            radius="20px"
                                        />
                                    </div>
                                    <div className="w-[260px]">
                                        <Button
                                            type="secondary"
                                            label="Save and Continue"
                                            action={modalTypeFromUrl === 'siteVisitDate' ? updateSiteVisit : saveSiteReport}
                                            color="#FFFFFF"
                                            fontStyle="italic"
                                            width="100%"
                                            height="40px"
                                            fontSize="16px"
                                            radius="20px"
                                            disabled={submitLoading || !areRequiredFieldsFilled(
                                                modalTypeFromUrl === 'siteVisitDate' ? customerForm : uploadReportForm,
                                                customerData
                                            )}
                                        />
                                    </div>
                                </div>,
                            ]}
                        >
                            {formError && <p className="text-red-500 mb-4">{formError}</p>}
                            {isLoading || isUploadLoading ? (
                                <p>Loading form fields...</p>
                            ) : (modalTypeFromUrl === 'siteVisitDate' ? customerForm : uploadReportForm).length > 0 ? (
                                (modalTypeFromUrl === 'siteVisitDate' ? customerForm : uploadReportForm)
                                    .map((form) => (
                                        <Fragment key={form.id}>
                                            <FormInput
                                                type={form.type}
                                                label={form.label ?? form.name}
                                                value={form.type === 'file' ? (customerData[form.name as keyof typeof customerData] as string || '') : (customerData[form.name as keyof typeof customerData] as string || '')}
                                                required={form?.required}
                                                onChange={(value: string | File | null) => handleInputChange(form?.name as string, value)}
                                            />
                                        </Fragment>
                                    ))
                            ) : null}
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteVisitationPage;
