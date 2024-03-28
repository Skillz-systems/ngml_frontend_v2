import AdminDashboard from '@/Pages/AdminDashboardPage/AdminHomePage';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';
import ProfilePage from '@/Pages/ProfilePage/Profilepage';
import CustomerDetailsLayout from '@/Pages/CustomerDetail/CustomerDetailsLayout';

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
    component: AdminInternalLayout(AdminDashboard),
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

