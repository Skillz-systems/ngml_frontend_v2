import { Heading } from '@/Components';
import { CompanyAddressData } from '@/Data';
import colors from '@/Utils/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerLocation: React.FC = () => {
    const navigate = useNavigate();

    const handleLocationClick = () => {
        navigate(`/admin/records/customer/id`);
    };

    return (
        <div className='h-fit w-[100%] rounded-[20px] px-6 py-6' >
            <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600">COMPANY LOCATIONS</Heading>
            <div className='w-[100%] flex items-center flex-col gap-5 mt-4'>
                {CompanyAddressData.map((location) => (
                    <div
                        className='border md:h-[100px] h-fit md:w-[500px] w-[100%] border-nnpcdarkgreen-500 rounded-[20px] p-[20px] bg-dark-50'
                        key={location.id}
                        onClick={() => handleLocationClick()}
                        style={{ cursor: 'pointer', marginBottom: '10px', background: colors.dark[50] }}
                    >
                        <h2 className='text-[20px] font-semibold text-gray-600'>{location.name}</h2>
                        <p className='text-[14px] font-700'>{location.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerLocation;
