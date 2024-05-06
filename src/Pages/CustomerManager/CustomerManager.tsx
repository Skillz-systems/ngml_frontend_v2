import { DocumentCard } from '../../Components/index';
import images from '../../assets/index';
import { useNavigate } from 'react-router-dom';

/**
 * DocumentCardProps describes the props for the DocumentCard component.
 *
 * @typedef {Object} DocumentCardProps
 * @property {'withLink' | 'withoutLink' | 'withReport'} type - The type of document card.
 * @property {React.ReactNode} icon - The icon to be displayed on the card.
 * @property {string} title - The title text displayed on the card.
 * @property {string} [subtitle] - The subtitle text displayed on the card (optional).
 * @property {string} [linkText] - The text for the first link in the card (optional).
 * @property {string} [linkText2] - The text for the second link in the card (optional).
 * @property {string} [reports] - The report information displayed on the card (optional).
 * @property {string} [reportTitle] - The title for the report displayed on the card (optional).
 * @property {number | string} [width] - The width of the card (optional).
 * @property {number | string} [height] - The height of the card (optional).
 * @property {React.ReactNode} [reportIcon] - The icon for the report displayed on the card (optional).
 */

/**
 * CustomerManager is a functional component that renders a list of document cards.
 * Each document card is configured based on the properties defined in the DocumentCardProps interface.
 *
 * @returns {JSX.Element} The JSX element that represents the CustomerManager component.
 */

const CustomerManager: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className="bg-white flex-row md:flex gap-4 items-center p-4 rounded-lg">
      <DocumentCard
        type='withReport'
        icon={<img src={images.petrol} alt="Report Icon" />}
        title='Daily Volumes'
        subtitle='Last Updated'
        height='330px'
        reports='12/nov/2023'
        reportIcon={<img src={images.callmade} alt="callmade Icon" className='w-4 h-4' />}
      />
      <DocumentCard
        type='withReport'
        icon={<img src={images.receipt} alt="Report Icon2" />}
        title='Billing'
        subtitle='Last Updated'
        height='330px'
        reports='12/nov/2023'
        reportIcon={<img src={images.callmade} alt="callmade Icon2" className='w-4 h-4' onClick={() => navigate('/admin/records/billinghistory')} />}
      />
      <DocumentCard
        type='withReport'
        icon={<img src={images.messenger} alt="Report Icon3" />}
        title=''
        subtitle=''
        height='330px'
        reportTitle='Complaints'
        reportIcon={<img src={images.callmade} alt="callmade Icon3" className='w-4 h-4' onClick={() => navigate('/admin/records/complaints')} />}
      />
    </div>
  );
};

export default CustomerManager;