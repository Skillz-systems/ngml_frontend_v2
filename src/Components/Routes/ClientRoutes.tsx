import SamplePage from '@/Pages/SamplePage/SamplePage';
import ClientInternalLayout from '../Hoc/ClientInternalLayout';

export const ClientRoutes = [
  {
    title: 'Customer Home page',
    path: '/client/customerhomepage',
    component: ClientInternalLayout(SamplePage),
    exact: true
  },
]