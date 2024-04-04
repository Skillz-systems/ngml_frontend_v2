import AdminDashboard from '@/Pages/AdminDashboardPage/AdminHomePage';
import BusinessPage from '@/Pages/BusinessPage';
import CustomerDetailsLayout from '@/Pages/CustomerDetail/CustomerDetailsLayout';
import ProfilePage from '@/Pages/ProfilePage/Profilepage';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';

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
    component: AdminInternalLayout(ProfilePage),
    exact: true
  },
  {
    title: 'Customer Detail Layout',
    path: '/admin/customerdetailslayout',
    component: AdminInternalLayout(CustomerDetailsLayout),
    exact: true
  },
]

