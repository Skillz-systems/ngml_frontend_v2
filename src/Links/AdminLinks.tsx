import Businessicon from '../../src/assets/images/png-icons/Business.png';
import Homeicon from '../../src/assets/images/png-icons/Home.png';


export const AdminLinks = [
  { id: 1, name: 'Home', to: '/admin/homepage', icon: Homeicon, type: 'primary' },
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
    icon: Businessicon,
    type: 'secondary',
    subMenu: [
      { id: 1, name: 'Suppliers', to: '/admin/records/suppliers', icon: Businessicon, type: 'primary' },
      { id: 2, name: 'Customers', to: '/admin/records/customer', icon: Businessicon, type: 'primary' },
      { id: 3, name: 'Request', to: '', icon: Businessicon, type: 'primary' },
      { id: 4, name: 'Site Visits', to: '', icon: Businessicon, type: 'primary' },
      { id: 5, name: 'Connect Projects', to: '', icon: Businessicon, type: 'primary' },
      { id: 6, name: 'Bids', to: '', icon: Businessicon, type: 'primary' }


    ]
  },
  { id: 4, name: 'Reports', to: '', icon: Homeicon, type: 'primary' },
  { id: 5, name: 'Communications', to: '', icon: Homeicon, type: 'primary' },
  { id: 6, name: 'Profile', to: '', icon: Homeicon, type: 'primary' },
  { id: 7, name: 'Settings', to: '', icon: Homeicon, type: 'primary' },


  // { id: 6, name: 'Existing Customer', to: '/admin/customerpagelayout', icon: customers, type: 'primary' },
  // { id: 7, name: 'Customer Layout', to: '/admin/customerlayout', icon: customers, type: 'primary' },

];



