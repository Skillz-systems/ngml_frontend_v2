import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TabLayout } from '../../Components/index';
import CustomerPageDetails from '../CustomerLayout/CustomerPageDetails';
import DdqPage from '../DdqPage/DdqPage';
import EoiPage from '../EoiPage/EoiPage';
import SiteVisitationPage from '../SiteVisitationPage/SiteVisitationPage';
import CustomerDetail from './CustomerDetail';
// import images from '../../assets/index';




const AdminCustomerPageLayout: React.FC = () => {

    const tablist = [
        {
            name: 'overview',
            ref: 'overview',
            // icon: <img src={images.business} alt="logo" className='w-4 h-4' />,
            // content: 'icon',

            // content: 'numeric',
            // content: 'icon',
            // icon: <img src={images.LeftArrow} alt="logo" />
        },
        {
            name: 'customers',
            ref: 'customers',
            // content: 'numeric',
            // content: 'icon',
            // icon: <img src={images.LeftArrow} alt="logo" />
        },
        {
            name: 'customer details',
            ref: 'customerdetails',
            // content: 'numeric',
            // content: 'icon',
            // icon: <img src={images.LeftArrow} alt="logo" />,
            // sublist: [
            //     {
            //         name: 'Sub Detail 1',
            //         ref: 'subdetail1'
            //     },
            //     {
            //         name: 'Sub Detail 2',
            //         ref: 'subdetail2'
            //     }
            // ]
        },
        {
            name: 'Eoi request',
            ref: 'eoirequest',
            // content: 'numeric'
        },
        {
            name: 'DDQ',
            ref: 'ddq',
            // content: 'numeric'
        },
        {
            name: 'site visit',
            ref: 'sitevisit',
            // content: 'numeric'
        },
        {
            name: 'cost analysis',
            ref: 'costanalysis',
            // content: 'numeric'
        },
        {
            name: 'agreement',
            ref: 'agreement',
            // content: 'numeric'
        },
        {
            name: 'connect project',
            ref: 'connectproject',
            // content: 'numeric'
        },
        {
            name: 'customer manager',
            ref: 'customermanager',
            // content: 'numeric'
        }
    ]

    // Define the content or pages here
    const tabContent = {
        overview: <CustomerPageDetails />,
        customers: <div className="flex-1 w-full"><p>Customers Content Here</p></div>,
        customerdetails: <CustomerDetail />,
        eoirequest: <EoiPage />,
        ddq: <DdqPage />,
        sitevisit: <SiteVisitationPage />,
        subdetail1: <p>tyfyufuyfifyt</p>
    };

    return (
        <div className='flex justify-end gap-[6px]'>
            <Link to={'/admin/records/customer'}>
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
                borderWidth="4px"
                borderRadius=""
                tablist={tablist}
                tabContent={tabContent}
                showButtons={false}
            />
        </div>
    )
}

export default AdminCustomerPageLayout;