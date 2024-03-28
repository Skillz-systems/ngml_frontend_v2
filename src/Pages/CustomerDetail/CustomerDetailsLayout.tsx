import TabsCustomer from '@/Components/CustomerTabs/CustomerTab';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import images from '../../assets/index';

const CustomerDetailsLayout: React.FC = () => {
    const { id } = useParams()

    const [activeTab, setActiveTab] = useState<string>('eoirequest')
    const navigate = useNavigate()
    useEffect(() => {

    }, [activeTab])

    return (
        <div className="m-5 bg-white flex-1 p-5 rounded-xl">
            <div className="w-full h-8 justify-between items-center inline-flex flex-wrap"> {/* flex-wrap added */}
                <div className="justify-start items-center gap-3 flex flex-grow"> {/* flex-grow added */}
                    <div className="text-center text-slate-600 text-[32px] font-semibold font-['Mulish'] leading-loose">Dangote Cement</div>
                </div>
                <div className="justify-end items-center gap-4 flex">
                    <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="p-1 bg-green-600 rounded-3xl flex-col justify-end items-center gap-2.5 flex">
                            <div className="text-white text-[10px] font-medium font-['Mulish'] leading-[10px] tracking-tight">04</div>
                        </div>
                        <div className="w-4 h-4 justify-center items-center inline-flex">
                            <div className="w-4 h-4 relative flex-col justify-start items-start flex"><img src={images.Communication} alt="logo" className='absolute top-[-12px]' /></div>
                        </div>
                    </div>
                    <div className="w-[80px] px-2 py-[4px] rounded-[20px] border border-gray-200">
                        <div className="text-slate-600 text-sm font-normal font-['Mulish'] flex justify-between items-center gap-2"><img src={images.Close} alt="close icon" /><p>close</p></div>
                    </div>
                </div>
            </div>
            <TabsCustomer setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
    )
}

export default CustomerDetailsLayout