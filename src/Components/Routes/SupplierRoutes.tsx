import SamplePage from '@/Pages/SamplePage/SamplePage';
import SupplierInternalLayout from '../Hoc/SupplierInternalLayout';


export const SupplierRoutes = [
  {
    title: 'Customer Home page',
    path: '/supplier/customerhomepage',
    component: SupplierInternalLayout(SamplePage),
    exact: true
  },
]