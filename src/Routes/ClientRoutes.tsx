import SamplePage from '@/Pages/AdminHomePage/AdminHomePage';

import ClientInternalLayout from '../Hoc/ClientInternalLayout';
import CustomerRegistrationPage from '@/Pages/CustomerRegistrationPage/CustomerRegistrationPage';

export const ClientRoutes = [
  // {
  //   title: 'Sample',
  //   path: '/client/samplePage',
  //   component: ClientInternalLayout(SamplePage),
  //   exact: true
  // }
  {
    title: 'Customer Registration Page',
    path: '/client/customerregistrationpage',
    component: ClientInternalLayout(CustomerRegistrationPage),
    exact: true
  }
]