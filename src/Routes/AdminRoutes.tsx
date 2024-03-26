import AdminDashboard from '@/Pages/AdminDashboardPage/AdminHomePage';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';
import ProfilePage from '@/Pages/ProfilePage/Profilepage';

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
]

