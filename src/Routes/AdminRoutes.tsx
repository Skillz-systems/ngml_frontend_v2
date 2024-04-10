import AdminDashboard from '@/Pages/AdminDashboardPage/AdminHomePage';
import BusinessPage from '@/Pages/BusinessPage';
// import ProfilePage from '@/Pages/ProfilePage/Profilepage';
import AdminCustomerList from '@/Pages/AdminCustomerList/AdminCustomerList';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';
import EoiPage from '@/Pages/EoiPage/EoiPage';

export const AdminRoutes = [
  {
    title: 'Admin Home page',
    path: '/admin/adminhomepage',
    component: AdminInternalLayout(AdminDashboard),
    exact: true
  },
  {
    title: 'Admin Business page',
    path: '/admin/businessPage',
    component: AdminInternalLayout(BusinessPage),
    exact: true
  },
  {
    title: 'Admin Profile page',
    path: '/admin/profilePage',
    component: AdminInternalLayout(EoiPage),
    exact: true
  },
  {
    title: 'Admin Customer List',
    path: '/admin/customerlist',
    component: AdminInternalLayout(AdminCustomerList),
    exact: true
  },
]

