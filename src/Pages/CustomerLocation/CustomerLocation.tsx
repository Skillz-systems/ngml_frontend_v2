import { Button, CustomInput, Heading, LocationCard, Modal } from '@/Components';
import { useGetCustomerByIdQuery } from '@/Redux/Features/Customer/customerService';
import { FormField, useGetFormByEntityIdQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import { ArrowBack } from '@mui/icons-material';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CustomerLocation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { customerId } = useParams<{ customerId: string }>();
  const [form, setForm] = useState<FormField[]>([]);
  const [formRecords, setFormRecords] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const { data: customer, error, isLoading } = useGetCustomerByIdQuery(Number(customerId));
  const { data: formData, isSuccess: formSuccess, isLoading: formLoading } = useGetFormByEntityIdQuery('5/customer/1');
  const [submitForm, { isLoading: submitLoading, isSuccess: submitSuccess }] = useSubmitFormMutation();

  useEffect(() => {
    if (formSuccess && formData) {
      console.log(formData.data.json_form)

      let parsedForm;
      try {
        parsedForm = JSON.parse(formData.data.json_form);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        console.log('Problematic JSON string:', formData.data.json_form);
        parsedForm = [];
      }
      console.log(parsedForm)
      const updatedFields = parsedForm.filter((field: FormField) => field.elementType === 'text');
      setForm(updatedFields);
      resetFormValues(updatedFields);
    }
  }, [formSuccess, formData])

  useEffect(() => {
    if (submitSuccess) {
      setIsModalOpen(false);
      resetFormValues(form);
    }
  }, [submitSuccess, form]);

  const resetFormValues = (fields: FormField[]) => {
    const initialData = fields.reduce((acc: Record<string, string>, field: FormField) => {
      if (field.key) {
        acc[field.key] = '';
      }
      return acc;
    }, {});
    setFormRecords(initialData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLocationClick = (locationId?: number) => {
    navigate(`/admin/records/customer/${customerId}/${locationId}/details`);
  };

  const handleInputChange = (value: string, key: string) => {
    setFormRecords(prevData => ({ ...prevData, [key]: value }));
  };

  const handleCreateLocation = async () => {
    console.log('customerForm:', form)
    console.log('customerData:', formRecords);

    const formFieldAnswers = form.map((field) => ({
      field_id: field.id,
      answer: formRecords[field.key as keyof typeof formRecords]
    }));

    const buildFormSubmission = {
      form_builder_id: formData?.data.id,
      form_field_answers: JSON.stringify(formFieldAnswers),
      data_id: formData?.task?.id
    };
    await submitForm(buildFormSubmission).unwrap();
  };

  if (isLoading || formLoading || submitLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading customer data.</div>;

  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
          <Link to={'/admin/records/customer'}>
            <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
              <ArrowBack color="success" style={{ fontSize: 'medium' }} />
            </div>
          </Link>
          <Heading color='primaryColor' className="font-bold text-gray-600 text-[23px]">
            {customer?.data?.company_name.toUpperCase()}
          </Heading>
        </div>

        <Button
          type="primary"
          label="Add New Location"
          action={toggleModal}
          color="#FFFFFF"
          fontStyle="italic"
          width="200px"
          height="35px"
          fontSize="16px"
          radius="20px"
        />
        {/* <div onClick={toggleModal} >
          <button className='border mr-7 bg-[#53B052] text-white hover:bg-[#265929] text-[16px] h-[44px] w-[180px] rounded-[6px]'>
            Add New Location
          </button>
        </div> */}
      </div>
      <div className='h-fit w-[100%] rounded-[20px] px-6'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {customer?.data?.sites.map((site) => (
            <div
              key={site.id}
              onClick={() => handleLocationClick(site.id)}
              className="cursor-pointer hover:shadow-lg rounded-[20px] transition-shadow duration-600 ease-in-out"
            >
              <LocationCard
                label={site.site_name}
                value={site.site_address}
                primary={false}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        size='medium'
        title='Add New Location Address'
        subTitle=''
        buttons={[
          <div className='flex gap-2 mb-[-10px]' key="modal-buttons">
            <div className='w-[120px]'>
              <Button
                type="outline"
                label="Cancel"
                action={toggleModal}
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
                label="Save"
                action={handleCreateLocation}
                color="#FFFFFF"
                fontStyle="italic"
                width="100%"
                height="40px"
                fontSize="14px"
                radius="20px"
              />
            </div>
          </div>
        ]}
      >
        {isLoading ? (
          <p>Loading form fields...</p>
        ) : form.length > 0 ? (
          form.map((item) => (
            <Fragment key={item.id}>
              <CustomInput
                required
                type={item?.elementType}
                label={item.name}
                value={formRecords[item.key as keyof typeof formRecords] || ''}
                handleChangeEvent={(value) => handleInputChange(value, item.key as keyof typeof formRecords)}
                placeholder={item.placeholder}
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

export default CustomerLocation;




// import { Button, CustomInput, Heading, LocationCard, Modal } from '@/Components';
// import { useGetCustomerByIdQuery } from '@/Redux/Features/Customer/customerService';
// import { FormField, useGetFormByEntityIdQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
// import { ArrowBack } from '@mui/icons-material';
// import React, { Fragment, useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';

// const CustomerLocation: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { customerId } = useParams<{ customerId: string }>();
//   const [form, setForm] = useState<FormField[]>([]);
//   const [formRecords, setFormRecords] = useState<Record<string, string>>({});
//   const navigate = useNavigate();

//   const { data: customer, error, isLoading } = useGetCustomerByIdQuery(Number(customerId));
//   const { data: formData, isSuccess: formSuccess, isLoading: formLoading } = useGetFormByEntityIdQuery('5/customer/1');
//   const [submitForm, { isLoading: submitLoading, isSuccess: submitSuccess }] = useSubmitFormMutation();

//   useEffect(() => {
//     if (formSuccess && formData) {
//       console.log(formData.data.json_form)

//       // const cleanedJsonString = data.data.json_form.replace(/[\n\r]/g, '').trim();
//       // const parsedForm = JSON.parse(cleanedJsonString);
//       // const parsedForm = JSON.parse(data.data.json_form);

//       let parsedForm;
//       try {
//         parsedForm = JSON.parse(formData.data.json_form);
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//         console.log('Problematic JSON string:', formData.data.json_form);
//         parsedForm = [];
//       }
//       console.log(parsedForm)
//       const updatedFields = parsedForm.filter((field: FormField) => field.elementType === 'text');
//       setForm(updatedFields);
//       // console.log(form)
//       const initialData = updatedFields.reduce((acc: Record<string, string>, field: FormField) => {
//         if (field.key) {
//           acc[field.key] = '';
//         }
//         return acc;
//       }, {});
//       setFormRecords(initialData);

//     }


//   }, [formSuccess, formData])


//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleLocationClick = (locationId?: number) => {
//     navigate(`/admin/records/customer/${customerId}/${locationId}/details`);
//   };



//   const handleInputChange = (value: string, key: string) => {
//     setFormRecords(prevData => ({ ...prevData, [key]: value }));
//   };


//   const handleCreateLocation = async () => {
//     console.log('customerForm:', form)
//     console.log('customerData:', formRecords);


//     const formFieldAnswers = form.map((field) => ({
//       field_id: field.id,
//       answer: formRecords[field.key as keyof typeof formRecords]
//     }));

//     const buildFormSubmission = {
//       form_builder_id: formData?.data.id,
//       form_field_answers: JSON.stringify(formFieldAnswers),
//       data_id: formData?.task?.id
//     };
//     await submitForm(buildFormSubmission).unwrap();

//     if (submitSuccess) setIsModalOpen(false);
//   };

//   if (isLoading || formLoading || submitLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading customer data.</div>;

//   return (
//     <div className='mt-6'>
//       <div className='flex justify-between items-center'>
//         <div className='flex gap-4'>
//           <Link to={'/admin/records/customer'}>
//             <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
//               <ArrowBack color="success" style={{ fontSize: 'medium' }} />
//             </div>
//           </Link>
//           <Heading color='primaryColor' className="font-bold text-gray-600 text-[23px]">
//             {customer?.data?.company_name.toUpperCase()}
//           </Heading>
//         </div>
//         <div onClick={toggleModal} >
//           <button className='border mr-7 bg-[#53B052] text-white hover:bg-[#265929] text-[16px] h-[44px] w-[180px] rounded-[6px]'>
//             Add New Location
//           </button>
//         </div>
//       </div>
//       <div className='h-fit w-[100%] rounded-[20px] px-6'>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
//           {customer?.data?.sites.map((site) => (
//             <div
//               key={site.id}
//               onClick={() => handleLocationClick(site.id)}
//               className="cursor-pointer hover:shadow-lg rounded-[20px] transition-shadow duration-600 ease-in-out"
//             >
//               <LocationCard
//                 label={site.site_name}
//                 value={site.site_address}
//                 primary={false}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Modal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         size='medium'
//         title='Add New Location Address'
//         subTitle=''
//         buttons={[
//           <div className='flex gap-2 mb-[-10px]' key="modal-buttons">
//             <div className='w-[120px]'>
//               <Button
//                 type="outline"
//                 label="Cancel"
//                 action={toggleModal}
//                 color="#FFFFFF"
//                 fontStyle="italic"
//                 width="100%"
//                 height="40px"
//                 fontSize="16px"
//                 radius="20px"
//               />
//             </div>
//             <div className='w-[260px]'>
//               <Button
//                 type="secondary"
//                 label="Save"
//                 action={handleCreateLocation}
//                 color="#FFFFFF"
//                 fontStyle="italic"
//                 width="100%"
//                 height="40px"
//                 fontSize="14px"
//                 radius="20px"
//               />
//             </div>
//           </div>
//         ]}
//       >
//         {isLoading ? (
//           <p>Loading form fields...</p>
//         ) : form.length > 0 ? (
//           form.map((item) => (
//             <Fragment key={item.id}>
//               <CustomInput
//                 required
//                 type={item?.elementType}
//                 label={item.name}
//                 value={formRecords[item.key as keyof typeof formRecords] || ''}
//                 handleChangeEvent={(value) => handleInputChange(value, item.key as keyof typeof formRecords)}
//                 placeholder={item.placeholder}
//               />
//             </Fragment>
//           ))
//         ) : (
//           <p>No form fields available.</p>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default CustomerLocation;




