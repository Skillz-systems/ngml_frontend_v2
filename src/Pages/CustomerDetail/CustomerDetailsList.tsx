import React from 'react';
import { TabLayout } from '../../Components/index';
import CustomerDetail from './CustomerDetail';
// import images from '../../assets/index';



const CustomerDetailsList: React.FC = () => {

    const tablist = [
        {
            name: 'overview',
            ref: 'overview',
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
        overview: <div className="flex-1 w-full"><p>Overview Content Here</p></div>,
        customers: <div className="flex-1 w-full"><p>Customers Content Here</p></div>,
        customerdetails: <CustomerDetail />,
        subdetail1: <p>tyfyufuyfifyt</p>
    };

    return (
        <div>
            <TabLayout
                title="Dangote Cement"
                width=""
                height=""
                backgroundColor="#ffffff"
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

export default CustomerDetailsList;