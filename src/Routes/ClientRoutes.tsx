import SamplePage from '@/Pages/AdminDashboardPage/AdminHomePage';
import BusinessPage from '@/Pages/BusinessPage';
import HomePage from '@/Pages/HomePage';
import ClientInternalLayout from '../Hoc/ClientInternalLayout';

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