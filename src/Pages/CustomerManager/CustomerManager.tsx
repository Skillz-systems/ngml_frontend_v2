import { DocumentCard } from '../../Components/index';
import images from '../../assets/index';

interface DocumentCardProps {
  type: 'withLink' | 'withoutLink' | 'withReport';
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  linkText?: string;
  linkText2?: string;
  reports?: string;
  reportTitle?: string;
  width?: number | string;
  height?: number | string;
}

const CustomerManager: React.FC = () => {
  const documentCards: DocumentCardProps[] = [
    {
      type: 'withReport',
      icon: <img src={images.customers} alt="Report Icon" />,
      title: 'Daily Volumes',
      subtitle: 'Last Updated',
      width: '250px',
      height: '300px',
      reports: '12/nov/2023'
    },
    {
      type: 'withReport',
      icon: <img src={images.customers} alt="Report Icon" />,
      title: 'Billing',
      subtitle: 'Last Updated',
      width: '250px',
      height: '300px',
      reports: '12/nov/2023'
    },
    {
      type: 'withReport',
      icon: <img src={images.customers} alt="Report Icon" />,
      title: '',
      subtitle: '',
      width: '250px',
      height: '300px',
      reportTitle: 'Complaints'
    },
  ];

  return (
    <div className="bg-white flex gap-8 items-center p-4 rounded-[10px]">
      {documentCards.map((card, index) => (
        <div className=''>
        <DocumentCard
          key={index}
          type={card.type}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          linkText={card.linkText}
          linkText2={card.linkText2}
          width={card.width}
          height={card.height}
          reports={card.reports}
          reportTitle={card.reportTitle}
        />
        </div>
      ))}
    </div>
  );
};

export default CustomerManager;