import { Heading, StatisticCard } from '@/Components';
import { CompanyAddressData } from '@/Data';
import colors from '@/Utils/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerLocation: React.FC = () => {
    const navigate = useNavigate();

    const handleLocationClick = (id: number) => {
        navigate(`/admin/records/customer/id`);
    };

    return (
        <div className='h-fit w-[100%] rounded-[20px] px-6 py-6' >
            <Heading color='primaryColor' className="font-bold text-gray-600 text-[20px]">COMPANY LOCATIONS</Heading>
            <div  className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {CompanyAddressData.map((card, index) => (
                    <div
                    key={index}
                    onClick={() => handleLocationClick(card.id)}
                    className="cursor-pointer hover:shadow-lg rounded-[20px] transition-shadow duration-600 ease-in-out"
                  >
                    <StatisticCard
                      label={card.name}
                      value={card.address}
                      primary={card.primary}
                    />
                  </div>
                ))}
            </div>

        </div>
    );
};

export default CustomerLocation;
