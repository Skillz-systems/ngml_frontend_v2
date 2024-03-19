import SamplePage from '@/Pages/SamplePage/SamplePage';
import CustomerInternalLayout from '../Hoc/CustomerInternalLayout';


export const SupplierRoutes = [
    {
        title: 'Customer Home page',
        path: '/supplier/customerhomepage',
        component: CustomerInternalLayout(SamplePage),
        exact: true
      },
]