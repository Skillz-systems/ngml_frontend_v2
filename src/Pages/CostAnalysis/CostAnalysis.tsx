import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, DocumentCard, FileUploadInput, Modal } from '../../Components/index';
import images from '../../assets/index';

interface CardDataItem {
    type: 'withLink' | 'withoutLink' | 'withReport';
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    linkText: string;
    linkText2: string;
    width: number | string;
    height: number | string;
}

const CostAnalysis: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        const searchParams = new URLSearchParams(location.search);

        if (open) {
            searchParams.set('uploadCapex', 'true');
        } else {
            searchParams.delete('uploadCapex');
        }

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const handleCreateCustomer = () => {
        // Handle create customer logic
    };

    const costAnalysisCardDataTwo: CardDataItem[] = [
        {
            type: 'withLink',
            title: 'Dangote Cement',
            subtitle: 'Site Survey Report',
            linkText: 'Last Updated',
            linkText2: '12/13/2023',
            icon: <img src={images.files} alt="Copy Icon" className="w-5 h-5" />,
            width: '200px',
            height: '100%',
        },
    ];

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const uploadCapex = searchParams.get('uploadCapex');

        if (uploadCapex === 'true') {
            setIsModalOpen(true);
        }
    }, [location.search]);

    return (
        <div className="w-full h-full p-4 bg-white rounded-xl flex flex-col gap-4 md:gap-6">
            <div className="w-full h-full bg-white rounded-xl border flex flex-col justify-start items-start gap-4">
                <div className="w-full flex flex-col md:flex-row justify-between items-center p-4 bg-white border rounded-xl">
                    <div className="text-lg md:text-xl font-bold font-['Mulish']">
                        Documents
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex items-center border px-3 py-2 rounded-3xl hover:bg-gray-100" onClick={() => toggleModal(true)}>
                            <img src={images.upload} alt="Upload" className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-base ml-2 cursor-pointer">Upload CAPEX</span>
                        </div>
                        <div className="border px-3 py-2 rounded-3xl hover:bg-gray-100">
                            <span className="text-sm md:text-base cursor-pointer">Create CAPEX</span>
                        </div>
                    </div>
                </div>
                <div className=" flex-wrap w-full p-3 bg-[#FFFFFF] border-b items-center gap-3 flex">
                    {costAnalysisCardDataTwo.map((cards, index) => (
                        <div key={index} className="flex flex-1 min-w-[150px] max-w-[200px]">
                            <DocumentCard
                                type={cards.type}
                                title={cards.title}
                                subtitle={cards.subtitle}
                                linkText={cards.linkText}
                                linkText2={cards.linkText2}
                                icon={cards.icon}
                                // width={cards.width}
                                height={cards.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => toggleModal(false)}
                size='medium'
                title='CAPEX Sheet Upload'
                subTitle=''
                buttons={[
                    <div className='flex gap-2 mb-[-10px]'>
                        <div className='w-[120px]'>
                            <Button
                                type="outline"
                                label="Cancel"
                                action={() => toggleModal(false)}
                                color="#FFFFFF"
                                fontStyle="italic"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                            />
                        </div>
                        <div className='w-[260px]'>
                            <Button
                                type="secondary"
                                label="Confirm"
                                action={handleCreateCustomer}
                                color="#FFFFFF"
                                fontStyle="italic"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                            />
                        </div>
                    </div>
                ]}
            >
                <FileUploadInput
                    title=''
                    maxSizeMB={25}
                    fileDescription="Only .xlxs file accepted"
                />
            </Modal>
        </div>
    );
};

export default CostAnalysis;