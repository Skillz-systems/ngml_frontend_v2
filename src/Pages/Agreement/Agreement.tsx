import { DocumentCard, DocumentCardTwo } from '../../Components/index';

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


const documentCardData = [
    {
        title: 'GSPA',
        subtitle: 'Agreement',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'Use template',
        height: '140px'

    },
    {
        title: 'Supplement',
        subtitle: 'Agreement',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'Use template',
        height: '140px'

    },
    {
        title: 'Addendum',
        subtitle: 'Agreement',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'Use template',
        height: '140px'

    },
    {
        title: 'Side',
        subtitle: 'Letter',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'Use template',
        height: '140px'

    },
    {
        title: 'Approval',
        subtitle: 'Letter',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'Use template',
        height: '140px'

    },
];

const documentCardDataTwo: CardDataItem[] = [
    {
        type: "withLink",
        title: "Dangote Cement",
        subtitle: "Site Survey Report",
        linkText: "Last Updated",
        linkText2: "12/13/2023",
        icon: <img src={images.copy} alt="Copy Icon" className="w-5 h-5" />,
        width: "200px",
        height: "100%",
    }]


const Agreement: React.FC = () => {

    return (
        <div className="w-full h-full bg-[#ffffff] border flex-col">
            <div className="w-full px-3 py-2.5 bg-white border-b rounded-[10px]">
                <div className="text-xl font-bold font-['Mulish']">AGREEMENT TEMPLATES</div>
            </div>
            <div className="flex flex-wrap w-full p-3 bg-[#FFFFFF] border-b items-center gap-3 flex">
                {documentCardData.map((card, index) => (
                    <div key={index} className="flex flex-1 min-w-[150px] max-w-[200px]">
                        <DocumentCardTwo
                            title={card.title}
                            subtitle={card.subtitle}
                            buttonText={card.buttonText}
                            icon={card.icon}
                            height={card.height}
                        />
                    </div>
                ))}
            </div>
            <div className="w-full px-3 py-2.5 bg-[#EAEEF2] border-t border-b justify-between items-center flex">
                <div className="text-xs font-bold font-['Mulish'] leading-3">Agreement Documents</div>
                <div className="p-2 bg-nnpcmediumgreen-850 rounded-3xl gap-2.5 inline-flex">
                    <div className="text-center text-xs font-medium font-['Mulish'] leading-3">01</div>
                </div>
            </div>
            <div className="flex flex-wrap w-full p-3 bg-[#FFFFFF] border-b items-center gap-3 flex">
                {documentCardDataTwo.map((cards, index) => (
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
    );
};

export default Agreement;