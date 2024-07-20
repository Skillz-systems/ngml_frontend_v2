import { Button, Heading, LocationCard, Modal } from '@/Components';
import { CompanyAddressData } from '@/Data';
import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddNewLocationModal from './AddNewLocationModal';

const CustomerLocation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyData, setCompanyData] = useState({
    companyaddress: '',

  });



  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();

  const handleLocationClick = (_id?: number) => {
    navigate(`/admin/records/customer/:customerId/:locationId/:tabId`);
  };

  const handleCreatelocation = () => {

  };

  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
          <Link to={'/admin/records/customer'}>
            <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
              <ArrowBack color="success" style={{ fontSize: 'medium' }} />
            </div>
          </Link>
          <Heading color='primaryColor' className="font-bold text-gray-600 text-[23px]">COMPANY LOCATIONS</Heading>
        </div>
        <div onClick={toggleModal} >
          <button className='border mr-7 bg-[#53B052] text-white hover:bg-[#265929] text-[16px] text-gray-600 h-[44px] w-[180px] rounded-[6px]'>Add New Location</button>
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
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        size='medium'
        title='Add New Location Address'
        subTitle=''
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
                radius="20px" />
            </div>
            <div className='w-[260px]'>
              <Button
                type="secondary"
                label="Save"
                action={handleCreatelocation}
                color="#FFFFFF"
                fontStyle="italic"
                width="100%"
                height="40px"
                fontSize="16px"
                radius="20px" />
            </div>
          </div>
        ]}
      >
        <AddNewLocationModal
          companyData={companyData}
          setCompanyData={setCompanyData}
        />
      </Modal>
    </div>

  );
};

export default CustomerLocation;
