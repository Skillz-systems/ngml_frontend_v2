import SamplePage from '@/Pages/SamplePage/SamplePage';
import CustomerInternalLayout from '../Hoc/CustomerInternalLayout';



export const StaffRoutes = [
    {
        title: 'Customer Home page',
        path: '/staff/customerhomepage',
        component: CustomerInternalLayout(SamplePage),
        exact: true
      },
]


