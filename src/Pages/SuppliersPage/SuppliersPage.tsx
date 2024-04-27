import InfoCard from '@/Components/InfoCardComponent/InfoCardComponent';
import { Link } from 'react-router-dom';
import { Button, Heading, StatisticRectangleCard, SuppliersListTable } from '../../Components/index';
import { FileDownloadDoneOutlined, GolfCourseOutlined, HailOutlined } from '@mui/icons-material';
import React from 'react';

const SuppliersPage: React.FC = () => {

    const dropdownOptions = ['All Suppliers', 'Option 2', 'Option 3'];


    const getIconStyles = (title: string) => {
        switch (title) {
            case 'Suppliers':
                return { bgColor: 'bg-[#005828]', iconColor: 'text-white' };
            case 'Active Suppliers':
                return { bgColor: 'bg-[#00AF50]', iconColor: 'text-white' };
            case 'Processing Suppliers':
                return { bgColor: 'bg-[#FFD181]', iconColor: 'text-black' };
            default:
                return { bgColor: 'bg-gray-500', iconColor: 'text-white' };
        }
    };

    const cardData = [
        {
            title: 'Suppliers',
            value: '9',
            icon: <GolfCourseOutlined />,

        },
        {
            title: 'Active Suppliers',
            value: '9',
            icon: <FileDownloadDoneOutlined />,

        },
        {
            title: 'Processing Suppliers',
            value: '2',
            icon: <HailOutlined />,
        },
    ];

    return (
        <div className="">
            <div className=' mr-[25px]'>
                <div className='flex flex-col md:flex-row items-center justify-between '>
                    <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600">SUPPLIERS</Heading>
                    <div className='flex gap-[16px]'>
                        <Button
                            type='outline'
                            label='Create PDF'
                            radius='20px'
                            width='120px'
                            height='30px'
                            action={() => { }}
                        />
                        <Link to={'/admin/records/supplierregistration'}>
                            <Button
                                type='outline'
                                label='New Supplier'
                                radius='20px'
                                width='120px'
                                height='30px'
                                action={() => { }}

                            />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 gap-4" >
                    {cardData.map((card, index) => {
                        const { bgColor, iconColor } = getIconStyles(card.title);
                        return (
                            <StatisticRectangleCard
                                key={index}
                                title={card.title}
                                value={card.value}
                                icon={React.cloneElement(card.icon, { className: `${iconColor} ${bgColor} rounded-[8px] w-[32px] h-[32px] p-1` })}
                                iconBgColor=''
                            />
                        );
                    })}
                </div>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 items-center gap-4 mt-6 mb-[20px]' >
                    <StatisticRectangleCard
                        title='Suppliers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='9'
                        valueColor='text-nnpcmediumgreen-700'
                        iconBgColor='rounded-[5px] bg-nnpcmediumgreen-500'
                    />
                    <StatisticRectangleCard
                        title='Active Suppliers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='9'
                        valueColor='text-black'
                        iconBgColor='bg-nnpc-50 rounded-[5px]'
                    />
                    <StatisticRectangleCard
                        title='Processing Suppliers'
                        icon={<img src={images.warning} alt="staff icon" />}
                        value='2'
                        valueColor='text-green-800'
                        backgroundColor='bg-nnpc-600'
                        iconBgColor='rounded-full bg-nnpc-700'
                    />
                </div> */}
            </div>
            <div className=' flex flex-col md:flex-row md:mt-[30px] gap-[16px] w-[100%] '>
                <InfoCard
                    title={'Aggregate Monthly Supply Volume'}
                    number={'472,593,854.00'}
                    subtitle={'(Srf)'}
                    showDropdown={true}
                    options={dropdownOptions}
                />
                <InfoCard
                    title={'Aggregate Daily Supply Volume'}
                    number={'793,854.00'}
                    subtitle={'(Srf)'}
                    showDropdown={true}
                    options={dropdownOptions}
                />


            </div>

            <div className='w-full mt-9'>
                <SuppliersListTable />
            </div>
        </div>
    );
};

export default SuppliersPage;