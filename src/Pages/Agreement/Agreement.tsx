import { DocumentCard, DocumentCardTwo } from '../../Components/index';

import images from '../../assets/index';

const documentCardData = [
    {
        title: 'Un-Verified Staff',
        subtitle: 'jhgfhfjh',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'hgffyfy'

    },
    {
        title: 'Un-Verified Staff',
        subtitle: 'jhgfhfjh',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'hgffyfy',

    },
    {
        title: 'Un-Verified Staff',
        subtitle: 'jhgfhfjh',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'hgffyfy'

    },
    {
        title: 'Un-Verified Staff',
        subtitle: 'jhgfhfjh',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'hgffyfy'

    },
    {
        title: 'Un-Verified Staff',
        subtitle: 'jhgfhfjh',
        icon: <img src={images.file} alt='icon' />,
        buttonText: 'hgffyfy'

    },
];


const Agreement: React.FC = () => {

    return (
        <div className="w-100 h-100 bg-white rounded-[10px] border flex-col">
            <div className="w-full h-14 px-3 py-2.5 bg-white border-b">
                <div className="AgreementTemplates text-slate-600 text-xl font-bold font-['Mulish'] leading-tight">AGREEMENT TEMPLATES</div>
            </div>
            <div className="w-full p-3 bg-white border-b items-center gap-3 flex">
                {documentCardData.map((card, index) => (
                    <DocumentCardTwo
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        buttonText={card.buttonText}
                        icon={card.icon}
                        // height={card.height}
                        // width={card.width}
                    />
                ))}
            </div>
            <div className="w-full px-3 py-2.5 bg-slate-50 border-t border-b justify-between items-center flex">
                <div className="text-xs font-bold font-['Mulish'] leading-3">Agreement Documents</div>
                <div className="p-2 bg-slate-200 rounded-3xl gap-2.5 inline-flex">
                    <div className="text-center text-xs font-medium font-['Mulish'] leading-3">01</div>
                </div>
            </div>
            <div className="w-full p-3 bg-white justify-start items-start gap-3 inline-flex">
                <DocumentCard
                    type="withLink"
                    title="Dangote Cement"
                    subtitle="Site Survey Report"
                    linkText="Last Updated"
                    linkText2="12/13/2023"
                    icon={<img src={images.copy} alt="Copy Icon" className="w-5 h-5" />}
                    width="200px"
                    height="250px"
                />

            </div>
        </div>
    );
};

export default Agreement;