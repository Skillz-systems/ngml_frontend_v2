/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, CustomInput, EoiRequestTable, Heading, Modal, StatisticRectangleCard } from '../../Components/index';
import images from '../../assets/index';

const AdminCustomerList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        location: '',
        type: '',
        phoneNumber: ''
    });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleInputChange = (value: any, key: any) => {
        console.log(value)
        setCustomerData({ ...customerData, [key]: value });
    };

    const handleCreateCustomer = () => {
        if (customerData.name.trim() === '' || customerData.email.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Creating customer:', customerData);
        toggleModal();
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="">
            <div className=' mr-[25px]'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600">CUSTOMERS</Heading>
                    <Button
                        type='outline'
                        label='Add Customer'
                        radius='20px'
                        width='150px'
                        height='30px'
                        action={toggleModal}
                    />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4 mt-6'>
                    <StatisticRectangleCard
                        title='Total Customers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='554'
                        valueColor='text-nnpcmediumgreen-700'
                        iconBgColor='rounded-[5px] bg-nnpcmediumgreen-500'
                    />
                    <StatisticRectangleCard
                        title='Active Customers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='442'
                        valueColor='text-black'
                        iconBgColor='bg-nnpc-50 rounded-[5px]'
                    />
                    <StatisticRectangleCard
                        title='Processing Customers'
                        icon={<img src={images.warning} alt="staff icon" />}
                        value='112'
                        valueColor='text-green-800'
                        backgroundColor='bg-orange-100'
                        iconBgColor='rounded-full bg-nnpcred-200'
                    />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                size='medium'
                title='Create New Customer'
                subTitle='Only Use this Method if the Customer is an already Existing Customer of the NGML'
                buttons={[
                    <div className='flex gap-2 mb-[-10px]'>
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
                                label="Create Customer"
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
                <CustomInput
                    required
                    type="text"
                    label='Name of Customer'
                    value={customerData.name}
                    handleChangeEvent={(value) => handleInputChange(value, "name")}
                    placeholder="Enter Name of Customer"
                />
                <CustomInput
                    required
                    type="text"
                    label='Email'
                    value={customerData.email}
                    handleChangeEvent={(value) => handleInputChange(value, "email")}
                    placeholder="Enter email"
                />
                <CustomInput
                    type="select"
                    label='Customer Location'
                    value={customerData.location}
                    handleChangeEvent={(value) => handleInputChange(value, "location")}
                    placeholder="Choose Type"
                    options={options}
                />
                <CustomInput
                    type="select"
                    label='Customer Type'
                    value={customerData.type}
                    handleChangeEvent={(value) => handleInputChange(value, "type")}
                    placeholder="Choose Type"
                    options={options}
                />
                <CustomInput
                    type="text"
                    label='Customer Phone Number'
                    value={customerData.phoneNumber}
                    handleChangeEvent={(value) => handleInputChange(value, "phoneNumber")}
                    placeholder="Enter Phone Number"
                />
            </Modal>
            <div className='w-full'>
                <EoiRequestTable />
            </div>
        </div>
    );
};

export default AdminCustomerList;