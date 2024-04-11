import React from 'react';
import { TabLayout } from '../../Components/index';
import CustomerPageDetails from './CustomerPageDetails';
import images from '../../assets/index';



const CustomerLayout: React.FC = () => {

    const tablist = [
        {
            name: 'overview',
            ref: 'overview',
            // content: 'numeric',
            content: 'icon',
            icon: <img src={images.business} alt="logo" className='w-6'/>
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
        customers: <div className="flex-1 w-full"><p>Customers Content Here</p></div>,
        customerdetails: <div className="flex-1 w-full"><p>Customers details Content Here</p></div>,
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