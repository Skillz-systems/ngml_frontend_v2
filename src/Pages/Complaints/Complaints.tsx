import { GppMaybeOutlined, NotificationImportantOutlined, PowerSettingsNewOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Notification, CustomInput, Modal } from '../../Components/index';
import { useNavigate } from 'react-router-dom';

import images from '../../assets/index';

const Complaints: React.FC = () => {

    const messageNotifications = [
        { title: 'New Message', date: '2024-03-29', content: 'Message content 1' },
        { title: 'New Message', date: '2024-03-29', content: 'Message content 1' },
        { title: 'New Message', date: '2024-03-29', content: 'Message content 1' },
    ];

    const navigate=useNavigate()

    const [newInvoiceData, setNewInvoiceData] = useState({
        year: '',
        month: '',
        rate: '',
    });

    const handleInputChange = (value: any, key: any) => {
        console.log(value)
        setNewInvoiceData({ ...newInvoiceData, [key]: value });
    };

    const handleClose = () => {
        navigate(-1)
    };

    return (
        <div className="w-full h-full p-8 bg-white bg-opacity-50 rounded-lg flex-col justify-start items-start gap-8 inline-flex">
  <div className="w-full justify-between items-center flex">
    <div className="text-center text-slate-600 text-3xl font-bold font-['Mulish']">COMPLAINTS</div>
    <div className="justify-between items-center gap-4 flex">
      {/* <div className="w-8 h-8 p-2.5 bg-lime-200 rounded-3xl border border-green-900 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="p-1 bg-green-600 rounded-3xl flex-col justify-end items-center gap-2.5 flex">
          <div className=" text-white text-xs font-medium font-['Mulish'] leading-3 tracking-tight">04</div>
        </div>
        <div className="w-4 h-4 justify-center items-center flex">
          <img src={images.messenger} alt='messenger icon' className="justify-center items-center flex" />
        </div>
      </div> */}
      <Notification
                        count={messageNotifications.length}
                        headerTitle="Messages"
                        notifications={messageNotifications}
                        renderIcon={() => <div><GppMaybeOutlined style={{ fontSize: 'medium' }} /></div>}
                    />
      <div className="w-16 p-2.5 rounded-3xl border justify-between items-center gap-1 flex cursor-pointer" onClick={handleClose}>
        <div className="w-4 h-4 justify-center items-center flex">
          <img src={images.cancel} alt='cancel icon' />
        </div>
        <div className="text-center text-slate-400 text-xs font-normal font-['Mulish']">Close</div>
      </div>
    </div>
  </div>
  <div className="w-full grow justify-start items-start gap-5 inline-flex">
    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-full grow shrink basis-0 bg-white rounded-xl border border-gray-200 flex-col justify-between items-start flex">
        <div className="w-full h-16 flex-col justify-start items-center gap-4 flex">
          <div className="w-full p-4 bg-lime-50 border-b rounded-[10px] border-gray-200 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <img className="w-8 h-8 rounded-full" src={images.avatar} alt='avatar icon' />
              </div>
              <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="text-slate-600 text-base font-bold font-['Mulish'] leading-none">Dangote Cement Ltd.</div>
              </div>
            </div>
            <div className="justify-end items-center gap-2 flex">
              <div className="w-44 px-4 py-3 rounded-3xl border border-gray-200 justify-center items-center gap-2.5 flex">
                <div className="text-slate-600 text-xs font-normal font-['Mulish'] leading-none tracking-tight">Mark this issue as resolved</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-80 flex-col justify-start items-center flex">
          <div className="w-full h-32 pl-4 pr-16 pb-4 bg-slate-50 flex-col justify-start items-start gap-2 flex">
            <div className="h-28 py-2 border-t border-slate-600 flex-col justify-start items-start gap-2 flex">
              <div className="px-2 py-1 bg-gray-200 rounded-lg justify-start items-start gap-2.5 inline-flex">
                <div className="text-slate-600 text-xs font-bold font-['Red Hat Display']">DANGOTE CEMENT LTD</div>
              </div>
              <div className="text-slate-600 text-xs font-normal font-['Mulish']">Gas Delivery timeline overdue be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</div>
              <div className="justify-end items-start gap-2 inline-flex">
                <div className="text-slate-400 text-xs font-bold font-['Mulish']">1:22pm</div>
                <div className="text-slate-400 text-xs font-bold font-['Mulish']">17/11/23</div>
              </div>
            </div>
          </div>
          <div className="w-full h-32 px-4 pb-4 flex-col justify-start items-end gap-2 flex">
            <div className="h-28 py-2 border-t border-green-600 flex-col justify-start items-end gap-2 flex">
              <div className="px-2.5 py-1 bg-green-600 rounded-lg justify-start items-start gap-2.5 inline-flex">
                <div className="text-white text-xs font-bold font-['Red Hat Display']">You</div>
              </div>
              <div className="text-right text-slate-600 text-xs font-normal font-['Mulish']">So sorry for the inconvenience,  we will attend to you shortly</div>
              <div className="text-right text-slate-600 text-xs font-normal font-['Mulish']">Thank you</div>
              <div className="justify-end items-start gap-2 inline-flex">
                <div className="text-slate-400 text-xs font-bold font-['Mulish']">2:22pm</div>
                <div className="text-slate-400 text-xs font-bold font-['Mulish']">18/11/23</div>
              </div>
            </div>
          </div>
          <div className="StartAMessageBar self-stretch p-4 bg-white border-t border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="w-full border-b">
            <CustomInput
                    type="text"
                    value={newInvoiceData.rate}
                    handleChangeEvent={(value) => handleInputChange(value, "rate")}
                    placeholder="Send a message"
                />
            </div>
            <div className="IconsPack w-6 h-6 justify-center items-center flex">
              <img src={images.send} alt='sendicon' className='w-20' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Complaints;