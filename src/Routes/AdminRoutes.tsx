import AdminCustomerList from '@/Pages/AdminCustomerList/AdminCustomerList';
import AdminHomePage from '@/Pages/AdminHomePage/AdminHomePage';
import CustomerPageLayout from '@/Pages/CustomerDetail/CustomerPageLayout';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';
// import SuppliersPage from '@/Pages/SuppliersPage/SuppliersPage';

export const AdminRoutes = [
  {
    title: 'Admin Home page',
    path: '/admin/homepage',
    component: AdminInternalLayout(AdminHomePage),
    exact: true
  },
  {
    title: 'Admin Customer List',
    path: '/admin/records/customer',
    component: AdminInternalLayout(AdminCustomerList),
    exact: true
  },
  {
    title: 'Admin Customer Page ',
    path: '/admin/records/customer/id',
    component: AdminInternalLayout(CustomerPageLayout),
    exact: true
  },
  // {
  //   title: 'Admin Customer List',
  //   path: '/admin/records/suppliers',
  //   component: AdminInternalLayout(SuppliersPage),
  //   exact: true
  // },
]

