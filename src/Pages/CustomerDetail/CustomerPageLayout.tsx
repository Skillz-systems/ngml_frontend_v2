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
// import images from '../../assets/index';




const AdminCustomerPageLayout: React.FC = () => {

    const tablist = [
        {
            name: 'overview',
            ref: 'overview',
            // content: 'numeric',
            // icon: <img src={images.business} alt="logo" className='w-4 h-4' />,
            // content: 'icon',
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
        customerdetails: <CustomerDetail />,
        eoirequest: <EoiPage />,
        ddq: <DdqPage />,
        sitevisit: <SiteVisitationPage />,
        costanalysis: <CostAnalysis />,
        agreement: <Agreement />,
        connectproject: <ConnectProject />,
        customermanager: <CustomerManager />,
        // subdetail1: <p>tyfyufuyfifyt</p>,
        // subdetail2: <p>tyfyufuyfifyt</p>
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
    )
}

export default AdminCustomerPageLayout;