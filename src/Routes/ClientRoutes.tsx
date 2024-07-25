
import CustomerRegistrationPage from '@/Pages/Customer/CustomerRegistrationPage/CustomerRegistrationPage';
import ClientInternalLayout from '../Hoc/ClientInternalLayout';

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