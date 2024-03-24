import SamplePage from '@/Pages/SamplePage/SamplePage';
import ClientInternalLayout from '../Hoc/ClientInternalLayout';
import BusinessPage from '@/Pages/BusinessPage';
import HomePage from '@/Pages/HomePage';

export const ClientRoutes = [
  {
    title: 'Sample',
    path: '/client/samplePage',
    component: ClientInternalLayout(SamplePage),
    exact: true
  },
  {
    title: 'Business',
    path: '/client/businessPage',
    component: ClientInternalLayout(BusinessPage),
    exact: true
  },
  {
    title: 'Home',
    path: '/client/homepage',
    component: ClientInternalLayout(HomePage),
    exact: true
  },
]