import { Heading, LocationCard } from '@/Components';
import { CompanyAddressData } from '@/Data';
import { ArrowBack } from '@mui/icons-material';
// import colors from '@/Utils/colors';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CustomerLocation: React.FC = () => {
  const navigate = useNavigate();

  const handleLocationClick = (_id?: number) => {
    navigate(`/admin/records/customer/:customerId/:locationId/:tabId`);
  };

  return (
    <div className='mt-6'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <Link to={'/admin/records/customer'}>
            <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
              <ArrowBack color="success" style={{ fontSize: 'medium' }} />
            </div>
          </Link>
          <Heading color='primaryColor' className="font-bold text-gray-600 text-[23px]">COMPANY LOCATIONS</Heading>
        </div>
        <div>
          <span className="text-sm md:text-base ml-2 cursor-pointer">Upload Agreement</span>
        </div>
      </div>
      <div className='h-fit w-[100%] rounded-[20px] px-6 ' >
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {CompanyAddressData.map((card, index) => (
            <div
              key={index}
              onClick={() => handleLocationClick(card.id)}
              className="cursor-pointer hover:shadow-lg rounded-[20px] transition-shadow duration-600 ease-in-out"
            >
              <LocationCard
                label={card.name}
                value={card.address}
                primary={card.primary}
              />
            </div>
          ))}
        </div>

      </div>
    </div>

  );
};

export default CustomerLocation;
