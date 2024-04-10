import Businessicon from '../../src/assets/images/png-icons/Business.png';
import Homeicon from '../../src/assets/images/png-icons/Home.png';
import profileicon from '../../src/assets/images/png-icons/Profile.png';
import customers from '../../src/assets/images/png-icons/Customers.png'
// import Settingsicon from '../../src/assets/images/png-icons/Settings.png'


export const AdminLinks = [
  { id: 1, name: 'Home', to: '/admin/adminhomepage', icon: Homeicon, type: 'primary' },
  {
     id: 2,
     name: 'Business',
     to: '',
     icon: Businessicon,
     type: 'secondary',
     subMenu: [
       { id: 1, name: 'Forte oil', to: '/admin/customerbusinesspage', icon: Businessicon, type: 'primary' },
       { id: 2, name: 'Dangote', to: '/admin/customerbusinesspage', icon: Businessicon, type: 'primary' },
       { id: 3, name: 'Shaffa', to: '/admin/customerbusinesspage', icon: Businessicon, type: 'primary' }
     ]
  },
  { id: 3, name: 'Profile', to: '/admin/profilePage', icon: profileicon, type: 'primary' },
  {id: 4, name: 'Customer', to: '/admin/customerlist', icon: customers, type: 'primary'},
  {id: 5, name: 'Existing Customer', to: 'admin/customerpagelayout', icon: customers, type: 'primary'},
//   {
//      id: 4, name: 'Settings', to: '/client/businessPage', icon: Settingsicon, type: 'secondary', 
//      subMenu: [
//        { id: 1, name: 'Business', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' },
//        { id: 2, name: 'Business', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' },
//        { id: 3, name: 'Business', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' }
//      ]
//   },
//   { id: 5, name: 'Profile', to: '/client/customerprofilepage', icon: profileicon, type: 'primary' },
//   { id: 5, name: 'Sample ', to: '/client/samplePage', icon: profileicon, type: 'primary' },

 ];
 

