import { Button, EoiRequestTemplate } from '@/Components';
import images from '@/assets';
import { useState } from 'react';

const EoiPage = () => {
  const [status] = useState('Default Status');
  const [selectedRow] = useState({
    companyName: 'Provide Company Name',
    companyEmail: 'Provide an email address',
    companyNumber: 'Provide a number',
    status: 'Approved',
    approverName: 'Okoro Florish'
  });

  const handleClose = () => { };

  return (
    <div>
      <div className='flex items-end justify-end mb-3'>
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
      <EoiRequestTemplate
        handleClose={handleClose}
        dateTime={'09th, Nov, 2023; 09:23:44 AM'}
        status={status}
        companyName={selectedRow.companyName}
        companyEmail={selectedRow.companyEmail}
        companyNumber={selectedRow.companyNumber}
        statusHeading={selectedRow.status}
        approverName={selectedRow.approverName}
      />
    </div>
  );
};

export default EoiPage;
