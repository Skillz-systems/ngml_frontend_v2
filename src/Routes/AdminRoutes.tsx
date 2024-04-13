import AdminCustomerList from '@/Pages/AdminCustomerList/AdminCustomerList';
import AdminHomePage from '@/Pages/AdminHomePage/AdminHomePage';
import CustomerPageLayout from '@/Pages/CustomerDetail/CustomerPageLayout';
import CustomerLayout from '@/Pages/CustomerLayout/CustomerLayout';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';

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




  
  {
    title: 'Customer Layout',
    path: '/admin/customerlayout',
    component: AdminInternalLayout(CustomerLayout),
    exact: true
  },
]

