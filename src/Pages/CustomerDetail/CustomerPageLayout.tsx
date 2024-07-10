import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TabLayout } from '../../Components/index';
import CostAnalysis from '../CostAnalysis/CostAnalysis';
import CustomerPageDetails from '../CustomerLayout/CustomerPageDetails';
import DdqPage from '../DdqPage/DdqPage';
import EoiPage from '../EoiPage/EoiPage';
import SiteVisitationPage from '../SiteVisitationPage/SiteVisitationPage';
import CustomerDetail from './CustomerDetail';
import ConnectProject from '../ConnectProject/ConnectProject';
import CustomerManager from '../CustomerManager/CustomerManager';
import Agreement from '../Agreement/Agreement';

const AdminCustomerPageLayout: React.FC = () => {

  const tablist = [
    { name: 'overview', ref: 'overview' },
    { name: 'customer details', ref: 'customerdetails' },
    { name: 'Eoi request', ref: 'eoirequest' },
    { name: 'DDQ', ref: 'ddq' },
    { name: 'site visit', ref: 'sitevisit' },
    { name: 'cost analysis', ref: 'costanalysis' },
    { name: 'agreement', ref: 'agreement' },
    { name: 'connect project', ref: 'connectproject' },
    { name: 'customer manager', ref: 'customermanager' }
  ];

  const tabContent = {
    overview: <CustomerPageDetails />,
    customerdetails: <CustomerDetail />,
    eoirequest: <EoiPage />,
    ddq: <DdqPage />,
    sitevisit: <SiteVisitationPage />,
    costanalysis: <CostAnalysis />,
    agreement: <Agreement />,
    connectproject: <ConnectProject />,
    customermanager: <CustomerManager />
  };

  return (
    <div className='flex justify-end gap-[6px]'>
      <Link to={'/admin/records/customer/location'}>
        <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
          <ArrowBack color="success" style={{ fontSize: 'medium' }} />
        </div>
      </Link>
      <TabLayout
        title="Dangote Cement"
        width=""
        height=""
        backgroundColor="#F5F7F9"
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

export default AdminCustomerPageLayout;