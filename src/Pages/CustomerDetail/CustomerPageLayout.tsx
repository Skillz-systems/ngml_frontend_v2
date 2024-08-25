
import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabLayout } from '../../Components/index';
import Agreement from '../Agreement/Agreement';
import ConnectProject from '../ConnectProject/ConnectProject';
import CostAnalysis from '../CostAnalysis/CostAnalysis';
import CustomerPageDetails from '../CustomerLayout/CustomerPageDetails';
import CustomerManager from '../CustomerManager/CustomerManager';
import DdqPage from '../DdqPage/DdqPage';
import EoiPage from '../EoiPage/EoiPage';
import SiteVisitationPage from '../SiteVisitationPage/SiteVisitationPage';
import CustomerDetail from './CustomerDetail';
import { useGetCustomerByIdQuery } from '@/Redux/Features/Customer/Customer';

const AdminCustomerPageLayout: React.FC = () => {
  const { customerId } = useParams<{ customerId: string }>();
  
  const { data: customer, error, isLoading } = useGetCustomerByIdQuery(Number(customerId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading customer data.</div>;

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
      <Link to={`/admin/records/customer/${customerId}`}>
        <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
          <ArrowBack color="success" style={{ fontSize: 'medium' }} />
        </div>
      </Link>
      <TabLayout
        title={customer?.data?.company_name.toUpperCase() || 'Customer Details'}
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
