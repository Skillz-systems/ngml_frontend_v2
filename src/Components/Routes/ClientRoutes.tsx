import SamplePage from '@/Pages/SamplePage/SamplePage';
import CustomerInternalLayout from '../Hoc/CustomerInternalLayout';

export const ClientRoutes = [
    {
        title: 'Customer Home page',
        path: '/client/customerhomepage',
        component: CustomerInternalLayout(SamplePage),
        exact: true
      },
]