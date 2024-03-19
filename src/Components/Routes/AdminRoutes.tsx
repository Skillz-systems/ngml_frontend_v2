import SamplePage from '@/Pages/SamplePage/SamplePage';
import CustomerInternalLayout from '../Hoc/CustomerInternalLayout';

export const AdminRoutes = [
    {
        title: 'Customer Home page',
        path: '/admin/customerhomepage',
        component: CustomerInternalLayout(SamplePage),
        exact: true
      },
]