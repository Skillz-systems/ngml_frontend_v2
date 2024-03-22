import Businessicon from '../../../public/assets/png-icons/Business.png';
import Homeicon from '../../../public/assets/png-icons/Home.png';
import profileicon from '../../../public/assets/png-icons/Profile.png';
import Settingsicon from '../../../public/assets/png-icons/Settings.png';


export const Navigationlinks = [
  { id: 1, name: 'Home', to: '/client/homepage', icon: Homeicon, type: 'primary' },
  {
     id: 2,
     name: 'Business',
     to: '/client/businessPage',
     icon: Businessicon,
     type: 'secondary',
     subMenu: [
       { id: 1, name: 'Forte oil', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' },
       { id: 2, name: 'Dangote', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' },
       { id: 3, name: 'Shaffa', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' }
     ]
  },
  { id: 3, name: 'Profile', to: '/client/customerprofilepage', icon: profileicon, type: 'primary' },
  {
     id: 4, name: 'Settings', to: '/client/businessPage', icon: Settingsicon, type: 'secondary', 
     subMenu: [
       { id: 1, name: 'Business', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' },
       { id: 2, name: 'Business', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' },
       { id: 3, name: 'Business', to: '/customer/customerbusinesspage', icon: Businessicon, type: 'primary' }
     ]
  },
  { id: 5, name: 'Profile', to: '/client/customerprofilepage', icon: profileicon, type: 'primary' },
  { id: 5, name: 'Sample ', to: '/client/samplePage', icon: profileicon, type: 'primary' },

 ];
 

