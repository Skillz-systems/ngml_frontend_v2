import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TabLayout } from '../../../Components/index';
import EoiPage from '@/Pages/EoiPage/EoiPage';
import DdqPage from '@/Pages/DdqPage/DdqPage';
import SiteVisitationPage from '@/Pages/SiteVisitationPage/SiteVisitationPage';
import Agreement from '@/Pages/Agreement/Agreement';
import ConnectProject from '@/Pages/ConnectProject/ConnectProject';
import CustomerManager from '@/Pages/CustomerManager/CustomerManager';


const CustomerBusinessManagerPageLayout: React.FC = () => {

  const tablist = [
    { name: 'Manager', ref: 'manager' },
    { name: '01 EOI request', ref: 'eoirequest' },
    { name: '02 DDQ', ref: 'ddq' },
    { name: '03 site visit', ref: 'sitevisit' },
    { name: '04 agreement', ref: 'agreement' },
    { name: '05 connect project', ref: 'connectproject' },
  ];

  const tabContent = {
    manager: <CustomerManager />,
    eoirequest: <EoiPage />,
    ddq: <DdqPage />,
    sitevisit: <SiteVisitationPage />,
    agreement: <Agreement />,
    connectproject: <ConnectProject />,
  };

  return (
    <div className='flex justify-end gap-[6px]'>
      <Link to={'/customer'}>
        <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
          <ArrowBack color="success" style={{ fontSize: 'medium' }} />
        </div>
      </Link>
      <TabLayout
        title="Business Manager"
        width=""
        height=""
        // backgroundColor="#F5F7F9"
        color="#49526A"
        borderColor=""
        borderWidth=""
        borderRadius=""
        tablist={tablist}
        tabContent={tabContent}
        showButtons={false}
      />
    </div>
  );
};

export default CustomerBusinessManagerPageLayout;