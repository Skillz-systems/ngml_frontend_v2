import SamplePage from '@/Pages/AdminHomePage/AdminHomePage';

import ClientInternalLayout from '../Hoc/ClientInternalLayout';

export const ClientRoutes = [
  {
    title: 'Sample',
    path: '/client/samplePage',
    component: ClientInternalLayout(SamplePage),
    exact: true
  }
]