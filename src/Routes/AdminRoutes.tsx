import SamplePage from '@/Pages/SamplePage/SamplePage';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';

export const AdminRoutes = [
  {
    title: 'Customer Home page',
    path: '/admin/customerhomepage',
    component: AdminInternalLayout(SamplePage),
    exact: true
  },
]