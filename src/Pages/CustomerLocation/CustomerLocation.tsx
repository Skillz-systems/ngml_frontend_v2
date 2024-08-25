
import React, { useState } from 'react';
import { Button, Heading, LocationCard, Modal } from '@/Components';
import { ArrowBack } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetCustomerByIdQuery } from '@/Redux/Features/Customer/Customer';
import AddNewLocationModal from './AddNewLocationModal';

const CustomerLocation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { customerId } = useParams<{ customerId: string }>();
  const navigate = useNavigate();

  const { data: customer, error, isLoading } = useGetCustomerByIdQuery(Number(customerId));

  console.log(customerId, 'ggggggggg');
  

  const [companyData, setCompanyData] = useState({
    companyaddress: '',
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLocationClick = (locationId?: number) => {
    navigate(`/admin/records/customer/${customerId}/${locationId}/details`);
  };

  const handleCreateLocation = () => {
  };

  if (isLoading) return <div>Loading...</div>;
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
        <div onClick={toggleModal} >
          <button className='border mr-7 bg-[#53B052] text-white hover:bg-[#265929] text-[16px] h-[44px] w-[180px] rounded-[6px]'>
            Add New Location
          </button>
        </div>
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
        <AddNewLocationModal
          companyData={companyData}
          setCompanyData={setCompanyData}
        />
      </Modal>
    </div>
  );
};

export default CustomerLocation;




