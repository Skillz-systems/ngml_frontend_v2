import React from 'react';
import { TabLayout } from '../../Components/index';
import images from '../../assets/index';
import CustomerPageDetails from './CustomerPageDetails';
import CustomerDetail from '../CustomerDetail/CustomerDetail';
import EoiPage from '../EoiPage/EoiPage';
import SiteVisitationPage from '../SiteVisitationPage/SiteVisitationPage';
import DdqPage from '../DdqPage/DdqPage';



const CustomerLayout: React.FC = () => {

    const tablist = [
        {
            name: 'overview',
            ref: 'overview',
            content: 'icon',
            icon: <img src={images.business} alt="logo" className='w-4 h-4 ' />
        },
        {
            name: 'customer details',
            ref: 'customerdetails',
            // content: 'numeric',
            // content: 'icon',
            // icon: <img src={images.email} alt="logo" />,
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
            name: 'daily volumes',
            ref: 'daily volumes',
            // content: 'numeric'
        },
        {
            name: 'billing',
            ref: 'billing',
            // content: 'numeric'
        }
    ]

    // Define the content or pages here
    const tabContent = {
        overview: <CustomerPageDetails />,
        customerdetails: <CustomerDetail />,
        ddq: <DdqPage />,
        eoirequest: <EoiPage />,
        sitevisit: <SiteVisitationPage />,
        subdetail1: <p>tyfyufuyfifyt</p>
    };

    return (
        <div className='mt-[-30px]'>
            <TabLayout
                title="Bucketfull Industries"
                width=""
                height=""
                backgroundColor="#F5F7F9"
                color="#000000"
                borderColor=""
                borderWidth=""
                borderRadius="10px"
                tablist={tablist}
                tabContent={tabContent}
            />
        </div>
    )
}

export default CustomerLayout;