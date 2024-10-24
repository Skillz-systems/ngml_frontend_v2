import { Button, EoiRequestTemplate, Modal } from '@/Components';
import FormInput from '@/Components/Custominput/FormInput';
import { useGetCustomerByIdQuery } from '@/Redux/Features/Customer/customerService';
import { FormField, useGetFormByNameQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import { convertFileToBase64 } from '@/Utils/base64Converter';
import { areRequiredFieldsFilled } from '@/Utils/formValidation';
import images from '@/assets';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


type CustomerData = {
  [key: string]: string | File | null;
};

const EoiPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState<FormField[]>([]);
  const [customerData, setCustomerData] = useState<CustomerData>({});
  const [formError, setFormError] = useState<string>('');


  const { data, isSuccess, isLoading } = useGetFormByNameQuery('EOIform');
  const [submitForm, { isLoading: submitLoading }] = useSubmitFormMutation();

  const navigate = useNavigate();

  // Assuming customer ID is passed via params
  const { customerId } = useParams<{ customerId: string }>();

  // Fetch customer details using customerId
  const { data: customerDetails, isSuccess: isCustomerSuccess } = useGetCustomerByIdQuery(Number(customerId));

  // const [status] = useState('Default Status');
  // const [selectedRow] = useState({
  //   companyName: 'Provide Company Name',
  //   companyEmail: 'Provide an email address',
  //   companyNumber: 'Provide a number',
  //   status: 'Approved',
  //   approverName: 'Okoro Florish'
  // });


  // useEffect(() => {
  //   if (isSuccess && data) {
  //     let parsedForm;
  //     try {
  //       parsedForm = JSON.parse(data.data.json_form);
  //       setCustomerForm(parsedForm);

  //       const initialData = parsedForm.reduce((acc: CustomerData, field: FormField) => {
  //         if (field.name) {
  //           acc[field.name] = '';
  //           if (field.type === 'file') {
  //             acc[`${field.name}`] = null;
  //           }
  //         }
  //         return acc;
  //       }, {});

  //       setCustomerData(initialData);
  //     } catch (error) {
  //       console.error('Error parsing JSON:', error);
  //       setCustomerForm([]);
  //     }
  //   }
  // }, [data, isSuccess]);

  // Update form fields with fetched customer data
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
              acc[field.name] = null;
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
    const searchParams = new URLSearchParams(location.search);

    if (open) {
      searchParams.set('reasonForRequest', 'true');
    } else {
      searchParams.delete('eoirquest');
    }
  };

  const handleClose = () => { };


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

  const uploadEoiRequest = useCallback(async () => {
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
      <div className='flex items-end justify-end gap-2 mb-3'>
        <Button
          type="primary"
          label="REASON FOR REQUEST"
          radius="20px"
          width="25%"
          height="32px"
          columnGap="5px"
          action={() => toggleModal(true)}
        />
        <Button
          type="primary"
          label="Upload"
          radius="20px"
          width="120px"
          height="32px"
          icon={<div><img src={images.uploadSvg} alt="send Icon" className='text-white' /></div>}
          columnGap="5px"
          action={() => { }}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => toggleModal(false)}
        size='medium'
        title='Reason For Request'
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
                label={submitLoading ? 'Submitting...' : 'Submit EOI Request'}
                action={uploadEoiRequest}
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
      <EoiRequestTemplate
        handleClose={() => { }}
        dateTime={'09th, Nov, 2023; 09:23:44 AM'}
        status={customerDetails?.data?.status ? 'Approved' : 'Pending'}
        companyName={customerDetails?.data?.company_name || 'N/A'}
        companyEmail={customerDetails?.data?.email || 'N/A'}
        companyNumber={customerDetails?.data?.phone_number || 'N/A'}
        statusHeading={customerDetails?.data?.status ? 'Approved' : 'Pending'}
        approverName={'Okoro Florish'}
      />
    </div>
  );
};

export default EoiPage;
