import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, DocumentCard, Modal } from '../../Components/index';
import AddNewInvoice from './AddNewInvoice';

import images from '../../assets/index';


/**
 * Data structure for billing history information.
 * 
 * @typedef {Object} BillingHistoryData
 * @property {'withLink' | 'withoutLink' | 'withReport'} type - The type of document card.
 * @property {string} title - The title of the document card.
 * @property {string} subtitle - The subtitle of the document card.
 * @property {React.ReactNode} icon - The icon displayed on the document card.
 * @property {string} linkText - The text for the document link.
 * @property {string} linkText2 - Additional link text.
 * @property {number|string} width - Width of the document card.
 * @property {number|string} height - Height of the document card.
 */

/**
 * BillingHistory Component that displays a list of invoice advice for each month.
 * 
 * @component
 * 
 * @example
 * // To use the component, import and include it within a parent component or route
 * <BillingHistory />
 */


interface BillingHistoryData {
    type: 'withLink' | 'withoutLink' | 'withReport';
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    linkText: string;
    linkText2: string;
    width: number | string;
    height: number | string;
}

const BillingHistory: React.FC = () => {

    const navigate = useNavigate();
    const [selectedYear, setSelectedYear] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newInvoiceData, setNewInvoiceData] = useState({
        year: '',
        month: '',
        rate: '',
    });

    const billingHistoryDataTwo: BillingHistoryData[] = [
        {
            type: 'withLink',
            title: 'January',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'February',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'March',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'April',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'May',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'June',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'July',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withLink',
            title: 'August',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withoutLink',
            title: 'September',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
        {
            type: 'withoutLink',
            title: 'October',
            subtitle: 'Invoice Advice',
            linkText: 'Invoice',
            linkText2: 'LINKED',
            icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
            width: '250px',
            height: '100%',
        },
    ]

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = event.target.value;
        setSelectedYear(newYear);
    };

    const years = [2023, 2022, 2021, 2020, 2019];

    const handleClose = () => {
        navigate(-1)
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAddNewInvoice = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleGenerateInvoice = () => {
        console.log('Creating new invoice:', newInvoiceData);
        toggleModal();
    };


    return (
        <div className="">
            <div className="w-full p-8 rounded-lg flex-col justify-start items-start gap-8 flex">
                <div className="w-full justify-between items-center flex">
                    <div className="text-center text-3xl font-semibold font-['Mulish']">Billing History</div>
                    <div className="items-center gap-4 flex">
                        <div className="w-44 p-3 rounded-3xl border justify-center flex cursor-pointer" onClick={handleAddNewInvoice}>
                            <div className="text-base font-normal font-['Mulish'] leading-none">New Invoice Advice</div>
                        </div>
                        <div className="w-16 p-2.5 rounded-3xl border justify-center items-center gap-1 flex cursor-pointer" onClick={handleClose}>
                            <div className="w-4 h-4 justify-center items-center flex">
                                <img src={images.cancel} alt="close icon" width={'10px'} />
                            </div>
                            <div className="Close text-center text-[#808080] text-xs font-normal font-['Mulish']">Close</div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-[#FFFFFF] rounded-xl border">
                    <div className="w-full px-3 py-4 bg-[#f1f7ea] border-b justify-between items-center rounded-t-[10px] flex">
                        <div className="text-[#49526A] text-xl font-bold font-['Mulish'] leading-tight">INVOICE ADVICE</div>
                        <div className="items-center gap-4 flex">
                            <div className="px-6 py-1 rounded-3xl border justify-start items-center gap-2 flex">

                                <div className="w-6 h-6 justify-center items-center flex">
                                    <select
                                        className="bg-[#f1f7ea] border-0 text-base font-normal outline-none"
                                        onChange={handleYearChange}
                                        value={selectedYear}
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="p-2 bg-nnpc-50 rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-[#49526A] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full p-3 bg-[#FFFFFF] rounded-b-[10px] items-center gap-3 flex">
                        {billingHistoryDataTwo.map((cards, index) => (
                            <div key={index} className="flex flex-1 min-w-[150px] md:min-w-[200px] max-w-[200px]">
                                <DocumentCard
                                    type={cards.type}
                                    title={cards.title}
                                    subtitle={cards.subtitle}
                                    linkText={cards.linkText}
                                    linkText2={cards.linkText2}
                                    icon={cards.icon}
                                    height={cards.height}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleAddNewInvoice}
                title="Generate New Invoice Advice"
                buttons={[
                    <div className='flex gap-2 mb-[-10px]'>
                        <div className='w-[120px]'>
                            <Button
                                type="outline"
                                label="Cancel"
                                action={toggleModal}
                                color="#FFFFFF"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                            />
                        </div>
                        <div className='w-[260px]'>
                            <Button
                                type="secondary"
                                label="Generate Invoice"
                                action={handleGenerateInvoice}
                                color="#FFFFFF"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                            />
                        </div>
                    </div>
                ]}
            >
                <AddNewInvoice newInvoiceData={newInvoiceData}
                    setNewInvoiceData={setNewInvoiceData} />
            </Modal>
        </div>
    );
};

export default BillingHistory;