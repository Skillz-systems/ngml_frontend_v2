import AdminCustomerList from '@/Pages/AdminCustomerList/AdminCustomerList';
import AdminHomePage from '@/Pages/AdminHomePage/AdminHomePage';
import BillingHistory from '@/Pages/BillingHistory/BillingHistory';
import Complaints from '@/Pages/Complaints/Complaints';
import CustomerPageLayout from '@/Pages/CustomerDetail/CustomerPageLayout';
import CustomerNewRegistration from '@/Pages/CustomerNewRegistration/CustomerNewRegistration';
import InvoicePage from '@/Pages/InvoicePage.tsx/InvoicePage';
import SupplierOverviewLayout from '@/Pages/SupplierOverview/SupplierOverviewLayout';
import SupplierRegistrationLayout from '@/Pages/SupplierRegistration/SupplierRegistrationLayout';
import SuppliersPage from '@/Pages/SuppliersPage/SuppliersPage';
import AdminInternalLayout from '../Hoc/AdminInternalLayout';
import RequestPage from '@/Pages/RequestPage/RequestPage';
import Dailyvolumns from '@/Pages/Dailyvolumns/Dailyvolumns';
import CustomerManager from '@/Pages/CustomerManager/CustomerManager';
import CustomerLocation from '@/Pages/CustomerLocation/CustomerLocation';

export const AdminRoutes = [
  {
    title: 'Admin Home page',
    path: '/admin',
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
    title: 'Admin Customer New Registration Page ',
    path: '/admin/records/customernewregistration',
    component: AdminInternalLayout(CustomerNewRegistration),
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
  {
    title: 'Daily Volumns page',
    path: '/admin/records/dailyvolumns',
    component: AdminInternalLayout(Dailyvolumns),
    exact: true
  },
  {
    title: 'invoice page',
    path: '/admin/records/invoice',
    component: AdminInternalLayout(InvoicePage),
    exact: true
  },
  {
    title: 'Request page',
    path: '/admin/records/requestpage',
    component: AdminInternalLayout(RequestPage),
    exact: true
  },
  {
    title: 'customer Location',
    path: '/admin/records/customer/location',
    component: AdminInternalLayout(CustomerLocation),
    exact: true
  },
  {
    title: 'customer page',
    path: '/admin/records/customer/id',
    component: AdminInternalLayout(CustomerManager),
    exact: true
  },
  

]

