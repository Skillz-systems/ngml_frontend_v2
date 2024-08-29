// import { CREATE_NEW_CUSTOMER_FORM_ID, FormField, useGetFormByIdQuery } from '@/Redux/Features/FormBuilder/formBuilderService';
// import React, { Fragment, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button, CustomInput, CustomerListTable, Heading, Modal, StatisticRectangleCard } from '../../Components/index';
// import images from '../../assets/index';

// const AdminCustomerList: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [customerForm, setCustomerForm] = useState<FormField[]>([]);
//     const [customerData, setCustomerData] = useState<Record<string, string>>({});

//     const navigate = useNavigate();
//     const location = useLocation();

//     const { data, isSuccess } = useGetFormByIdQuery(CREATE_NEW_CUSTOMER_FORM_ID);

//     if (isSuccess) {
//         console.log(data)

//         const parsedForm = JSON.parse(data.json_form);
//         setCustomerForm(parsedForm)
//         console.log(customerForm)
//     }

//     // if (data?.json_form && isSuccess) {
//     //     console.log(data?.json_form)

//     //     const parsedForm = JSON.parse(data.json_form);
//     //     const updatedFields = parsedForm.filter((field: FormField) => field.id !== 0);
//     //     setCustomerForm(updatedFields);

//     //     // Initialize customerData with empty strings for each field
//     //     const initialData = updatedFields.reduce((acc, field) => {
//     //         if (field.key) {
//     //             acc[field.key] = '';
//     //         }
//     //         return acc;
//     //     }, {} as Record<string, string>);
//     //     setCustomerData(initialData);
//     // }
//     const toggleModal = (open: boolean) => {
//         setIsModalOpen(open);
//         const searchParams = new URLSearchParams(location.search);

//         if (open) {
//             searchParams.set('createCustomer', 'true');
//         } else {
//             searchParams.delete('createCustomer');
//         }

//         navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
//     };

//     const handleInputChange = (value: string, key: string) => {
//         setCustomerData(prevData => ({ ...prevData, [key]: value }));
//     };

//     useEffect(() => {
//         const searchParams = new URLSearchParams(location.search);
//         const createCustomer = searchParams.get('createCustomer');

//         if (createCustomer === 'true') {
//             setIsModalOpen(true);
//         }
//     }, [location.search]);

//     const handleCreateCustomer = () => {
//         console.log('Creating customer:', customerData);
//         toggleModal(false);
//         alert('Customer successfully registered!');
//         window.location.href = '/admin/records/customernewregistration';
//     };

//     return (
//         <div className="">
//             <div className=' mr-[25px]'>
//                 <div className='flex flex-col md:flex-row items-center justify-between'>
//                     <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600">CUSTOMERS</Heading>
//                     {isSuccess &&
//                         <Button
//                             type='outline'
//                             label='Add Customer'
//                             radius='20px'
//                             width='150px'
//                             height='30px'
//                             action={() => toggleModal(true)}
//                         />
//                     }
//                 </div>
//                 <div className='flex flex-col md:flex-row items-center gap-4 mt-6 ' >
//                     <StatisticRectangleCard
//                         title='Total Customers'
//                         icon={<img src={images.customers} alt="staff icon" />}
//                         value='554'
//                         valueColor='text-nnpcmediumgreen-700'
//                         iconBgColor='rounded-[10px] bg-nnpcmediumgreen-500'
//                     />
//                     <StatisticRectangleCard
//                         title='Active Customers'
//                         icon={<img src={images.customers} alt="staff icon" />}
//                         value='442'
//                         valueColor='text-black'
//                         iconBgColor='bg-nnpc-50 rounded-[10px]'
//                     />
//                     <StatisticRectangleCard
//                         title='Processing Customers'
//                         icon={<img src={images.warning} alt="staff icon" />}
//                         value='112'
//                         valueColor='text-green-800'
//                         backgroundColor='bg-nnpc-600'
//                         iconBgColor='rounded-full bg-nnpc-700'
//                     />
//                 </div>
//             </div>
//             {JSON.stringify(data?.json_form, null, 2)}
//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={() => toggleModal(false)}
//                 size='medium'
//                 title='Create New Customer'
//                 subTitle='Only Use this Method if the Customer is an already Existing Customer of the NGML'
//                 buttons={[
//                     <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
//                         <div className='w-[120px]'>
//                             <Button
//                                 type="outline"
//                                 label="Cancel"
//                                 action={() => toggleModal(false)}
//                                 color="#FFFFFF"
//                                 fontStyle="italic"
//                                 width="100%"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                             />
//                         </div>
//                         <div className='w-[260px]'>
//                             <Button
//                                 type="secondary"
//                                 label="Create Customer"
//                                 action={handleCreateCustomer}
//                                 color="#FFFFFF"
//                                 fontStyle="italic"
//                                 width="100%"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                             />
//                         </div>
//                     </div>
//                 ]}
//             >
//                 {customerForm.length > 0 ? (
//                     customerForm.map((form) => (
//                         <Fragment key={form.id}>
//                             <CustomInput
//                                 required
//                                 type={form?.elementType}
//                                 label={form.name}
//                                 value={customerData[form.key as keyof typeof customerData] || ''}
//                                 handleChangeEvent={(value) => handleInputChange(value, form.key as keyof typeof customerData)}
//                                 placeholder={form.placeholder}
//                             />
//                         </Fragment>
//                     ))
//                 ) : (
//                     <p>Loading form fields...</p>
//                 )}
//             </Modal>
//             <div className='w-full mt-10'>
//                 <CustomerListTable />
//             </div>
//         </div>
//     );
// };

// export default AdminCustomerList;
import images from '@/assets';
import { CREATE_NEW_CUSTOMER_FORM_ID, FormField, useGetFormByIdQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, CustomInput, CustomerListTable, Heading, Modal, StatisticRectangleCard } from '../../Components/index';

const AdminCustomerList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerForm, setCustomerForm] = useState<FormField[]>([]);
    const [customerData, setCustomerData] = useState<Record<string, string>>({});

    const navigate = useNavigate();
    const location = useLocation();

    const { data, isSuccess, isLoading } = useGetFormByIdQuery(CREATE_NEW_CUSTOMER_FORM_ID);
    const [submitForm, { isLoading: submitLoading, isSuccess: submitSuccess }] = useSubmitFormMutation()
    useEffect(() => {
        if (isSuccess && data) {
            const parsedForm = JSON.parse(data.data.json_form);
            const updatedFields = parsedForm.filter((field: FormField) => field.id !== 0);
            setCustomerForm(updatedFields);
            const initialData = updatedFields.reduce((acc: Record<string, string>, field: FormField) => {
                if (field.key) {
                    acc[field.key] = '';
                }
                return acc;
            }, {});
            setCustomerData(initialData);

        }


    }, [data, isSuccess])

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        const searchParams = new URLSearchParams(location.search);

        if (open) {
            searchParams.set('createCustomer', 'true');
        } else {
            searchParams.delete('createCustomer');
        }

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const handleInputChange = (value: string, key: string) => {
        setCustomerData(prevData => ({ ...prevData, [key]: value }));
    };

    const handleCreateCustomer = async () => {
        console.log('customerForm:', customerForm)
        console.log('customerData:', customerData);


        const formFieldAnswers = customerForm.map((field) => ({
            field_id: field.id,
            answer: customerData[field.key as keyof typeof customerData]
        }));

        const buildFormSubmission = {
            form_builder_id: data?.data.id,
            process_flow_id: data?.data.process_flow_id,
            form_field_answers: formFieldAnswers,
        };
        const stringify = JSON.stringify(buildFormSubmission);

        const response = await submitForm(stringify).unwrap();
        console.log(response)
        if (submitSuccess) toggleModal(false);
    };

    return (
        <div className="">
            <div className='mr-[25px]'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600">CUSTOMERS</Heading>
                    {isSuccess &&
                        <Button
                            type='outline'
                            label='Add Customer'
                            radius='20px'
                            width='150px'
                            height='30px'
                            action={() => toggleModal(true)}
                        />
                    }
                </div>

                <div className='flex flex-col md:flex-row items-center gap-4 mt-6 ' >
                    <StatisticRectangleCard
                        title='Total Customers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='554'
                        valueColor='text-nnpcmediumgreen-700'
                        iconBgColor='rounded-[10px] bg-nnpcmediumgreen-500'
                    />
                    <StatisticRectangleCard
                        title='Active Customers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='442'
                        valueColor='text-black'
                        iconBgColor='bg-nnpc-50 rounded-[10px]'
                    />
                    <StatisticRectangleCard
                        title='Processing Customers'
                        icon={<img src={images.warning} alt="staff icon" />}
                        value='112'
                        valueColor='text-green-800'
                        backgroundColor='bg-nnpc-600'
                        iconBgColor='rounded-full bg-nnpc-700'
                    />
                </div>
                {/* StatisticRectangleCard components... */}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => toggleModal(false)}
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
                                label={submitLoading ? 'Creating...' : 'Create customer'}
                                action={handleCreateCustomer}
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
                {isLoading ? (
                    <p>Loading form fields...</p>
                ) : customerForm.length > 0 ? (
                    customerForm.map((form) => (
                        <Fragment key={form.id}>
                            <CustomInput
                                required
                                type={form?.elementType}
                                label={form.name}
                                value={customerData[form.key as keyof typeof customerData] || ''}
                                handleChangeEvent={(value) => handleInputChange(value, form.key as keyof typeof customerData)}
                                placeholder={form.placeholder}
                            />
                        </Fragment>
                    ))
                ) : (
                    <p>No form fields available.</p>
                )}
            </Modal>
            <div className='w-full mt-10'>
                <CustomerListTable />
            </div>
        </div>
    );
};

export default AdminCustomerList;