
import colors from '@/Utils/colors';
// import { useState } from 'react';


const CustomerSiteVisitPage = () => {
    // const [formData, setFormData] = useState({
    //     firstSiteVisitDate: '',
    //     secondSiteVisitDate: '',
    //     thirdSiteVisitDate: '',
    // });

 

    return (
        <div className="p-[20px] flex flex-col gap-4 rounded-[20px] w-[100%] h-fit " style={{ background: colors.dark[50] }}>
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[10px] p-[15px] bg-dark-50'>
                <div className='text-[18px] font-[600]'>Notice !!!</div>
                <div className='mt-2 text-[14px]'>The NNPC Gas Marketing Limited will
                    be required to visit the premises of your
                    business operations, to carry out a preliminary feasibilty
                    and site survey assessment. We therefore need you to pick
                    a date most convenient for that visit from the 3 available
                    dates provided below.
                </div>
            </div>
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[10px] p-[15px] bg-dark-50'>
                <div className='font-[600]'>Available Dates</div>
                <div className='mt-[12px]'>
                   
                </div>
            </div>
        </div>
    )
}
export default CustomerSiteVisitPage


