import Businessicon from '../../src/assets/images/png-icons/Business.png';
import Communicationicon from '../../src/assets/images/png-icons/Communication.png';
import Customericon from '../../src/assets/images/png-icons/Customers.png';
import Bidicon from '../../src/assets/images/png-icons/Filter.png';
import Homeicon from '../../src/assets/images/png-icons/Home.png';
import Invoiceicon from '../../src/assets/images/png-icons/Invoice.png';
import Requesticon from '../../src/assets/images/png-icons/Notifications.png';
import Profilenameicon from '../../src/assets/images/png-icons/Profile.png';
import Recordicon from '../../src/assets/images/png-icons/Records.png';
import Reporticon from '../../src/assets/images/png-icons/Reports.png';
import Settingicon from '../../src/assets/images/png-icons/Settings.png';
import Suppliericon from '../../src/assets/images/png-icons/Suppliers.png';
import Sitevisiteicon from '../../src/assets/images/png-icons/Zone.png';

export const AdminLinks = [
  { id: 1, name: 'Home', to: '/admin', icon: Homeicon, type: 'primary' },
  {
    id: 2,
    name: 'Manager',
    to: '',
    icon: Businessicon,
    type: 'secondary',
    subMenu: [
      { id: 1, name: 'Operations', to: '', icon: Businessicon, type: 'primary' },
      { id: 2, name: 'Contracts', to: '', icon: Businessicon, type: 'primary' },
      { id: 3, name: 'Legal', to: '', icon: Businessicon, type: 'primary' },
      { id: 4, name: 'Accounts', to: '', icon: Businessicon, type: 'primary' },
      { id: 5, name: 'Staff', to: '', icon: Businessicon, type: 'primary' }

    ]
  },
  {
    id: 3,
    name: 'Records',
    to: '',
    icon: Recordicon,
    type: 'secondary',
    subMenu: [
      { id: 1, name: 'Suppliers', to: '/admin/records/suppliers', icon: Suppliericon, type: 'primary' },
      { id: 2, name: 'Customers', to: '/admin/records/customer', icon: Customericon, type: 'primary' },
      { id: 3, name: 'Request', to: '', icon: Requesticon, type: 'primary' },
      { id: 4, name: 'Site Visits', to: '', icon: Sitevisiteicon, type: 'primary' },
      { id: 5, name: 'Connect Projects', to: '', icon: Invoiceicon, type: 'primary' },
      { id: 6, name: 'Bids', to: '', icon: Bidicon, type: 'primary' }


    ]
  },
  { id: 4, name: 'Reports', to: '', icon: Reporticon, type: 'primary' },
  { id: 5, name: 'Communications', to: '', icon: Communicationicon, type: 'primary' },
  { id: 6, name: 'Profile', to: '', icon: Profilenameicon, type: 'primary' },
  { id: 7, name: 'Settings', to: '', icon: Settingicon, type: 'primary' },

];



