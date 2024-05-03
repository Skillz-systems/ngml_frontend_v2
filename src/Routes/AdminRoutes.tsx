import AdminCustomerList from '@/Pages/AdminCustomerList/AdminCustomerList';
import AdminHomePage from '@/Pages/AdminHomePage/AdminHomePage';
import CustomerPageLayout from '@/Pages/CustomerDetail/CustomerPageLayout';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';
import SuppliersPage from '@/Pages/SuppliersPage/SuppliersPage';
import SupplierRegistrationLayout from '@/Pages/SupplierRegistration/SupplierRegistrationLayout';
import SupplierOverviewLayout from '@/Pages/SupplierOverview/SupplierOverviewLayout';
import BillingHistory from '@/Pages/BillingHistory/BillingHistory';
import Complaints from '@/Pages/Complaints/Complaints';

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
    title: 'Admin Customer List',
    path: '/admin/records/suppliers',
    component: AdminInternalLayout(SuppliersPage),
    exact: true
  },
  {
    title: 'Admin Supplier Registration',
    path: '/admin/records/supplierregistration',
    component: AdminInternalLayout(SupplierRegistrationLayout),
    exact: true
  },
  {
    title: 'Admin Supplier Registration',
    path: '/admin/records/supplier/id',
    component: AdminInternalLayout(SupplierOverviewLayout),
    exact: true
  },
  {
    title: 'Billing History',
    path: '/admin/records/billinghistory',
    component: AdminInternalLayout(BillingHistory),
    exact: true
  },
  {
    title: 'complaints page',
    path: '/admin/records/complaints',
    component: AdminInternalLayout(Complaints),
    exact: true
  },

]

