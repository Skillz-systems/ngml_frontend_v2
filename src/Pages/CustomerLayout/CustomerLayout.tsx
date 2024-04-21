import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TabLayout } from '../../Components/index';
// import images from '../../assets/index';
import CustomerDetail from '../CustomerDetail/CustomerDetail';
import DdqPage from '../DdqPage/DdqPage';
import EoiPage from '../EoiPage/EoiPage';
import SiteVisitationPage from '../SiteVisitationPage/SiteVisitationPage';
import CustomerPageDetails from './CustomerPageDetails';
// import { useNavigate } from 'react-router-dom';



const CustomerLayout: React.FC = () => {

    // const navigate = useNavigate();

    // const handleUpdate = (activeTab: string): void =>  {
    //     console.log(`Updating for tab: ${activeTab}`);
    //     switch (activeTab) {
    //       case 'ddq':
    //         navigate('/admin/records/editddqpage');
    //         break;
    //       case 'eoirequest':
    //         navigate('/admin/records/customer/eoirequest');
    //         break;
    //       default:
    //         console.log(`Unknown tab: ${activeTab}`);
    //     }
    //   };

    const tablist = [
        {
            name: 'overview',
            ref: 'overview',
            // content: 'icon',
            // icon: <img src={images.business} alt="logo" className='w-4 h-4 ' />
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

        <div className=''>
            <div className='flex justify-end gap-[6px]'>
                <Link to={'/admin/records/customer'}>
                    <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
                        <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                    </div>
                </Link>
                <TabLayout
                    title="Bucketfull Industries"
                    width=""
                    height=""
                    backgroundColor="#F5F7F9"
                    color="#000000"
                    borderColor=""
                    borderWidth="4px"
                    borderRadius="10px"
                    tablist={tablist}
                    tabContent={tabContent}
                    // onUpdate={handleUpdate}
                />
            </div>
        </div>
    )
}

export default CustomerLayout;