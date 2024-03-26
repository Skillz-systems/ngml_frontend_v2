import SamplePage from '@/Pages/SamplePage/SamplePage';
import StaffInternalLayout from '../Hoc/StaffInternalLayout';



export const StaffRoutes = [
  {
    title: 'Customer Home page',
    path: '/staff/customerhomepage',
    component: StaffInternalLayout(SamplePage),
    exact: true
  },
]


