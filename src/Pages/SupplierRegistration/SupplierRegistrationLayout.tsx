import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TabLayout } from '../../Components/index';



const SupplierRegistrationLayout: React.FC = () => {

    const tablist = [
        {
            name: '01 Supplier Information',
            ref: 'supplierinformation',
            sublist: [
                {
                    name: 'Personal Details',
                    ref: 'personaldetails'
                },
                {
                    name: 'Agreement Details',
                    ref: 'agreementdetails'
                }
            ]
           
        },
        {
            name: '02 Uploads',
            ref: 'uploads',
          
        },
       
       
    ]

    // Define the content or pages here
    const tabContent = {
       
        customers: <div className="flex-1 w-full"><p>Customers Content Here</p></div>,
        subdetail1: <p>tyfyufuyfifyt</p>
    };

    return (
        <div className='flex justify-end gap-[6px] ' >
            <Link to={'/admin/records/suppliers'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>
            <TabLayout
                title="Supplier Registration"
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

export default SupplierRegistrationLayout;