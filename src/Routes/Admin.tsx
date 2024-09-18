import AdminCustomerList from '@/Pages/AdminCustomerList/AdminCustomerList';
import AdminHomePage from '@/Pages/AdminHomePage/AdminHomePage';
import BidPage from '@/Pages/BidPage/BidPage';
import BillingHistory from '@/Pages/BillingHistory/BillingHistory';
import Complaints from '@/Pages/Complaints/Complaints';
import ConnectProjectPage from '@/Pages/ConnectProjectPage/ConnectProjectPage';
import { default as AdminCustomerPageLayout, default as CustomerPageLayout } from '@/Pages/CustomerDetail/CustomerPageLayout';
import CustomerLocation from '@/Pages/CustomerLocation/CustomerLocation';
import CustomerNewRegistration from '@/Pages/CustomerNewRegistration/CustomerNewRegistration';
import Dailyvolumns from '@/Pages/Dailyvolumns/Dailyvolumns';
import InvoicePage from '@/Pages/InvoicePage.tsx/InvoicePage';
import OperationPage from '@/Pages/Manager/OperationPage/OperationPage';
import RequestPage from '@/Pages/RequestPage/RequestPage';
import SiteVisitPage from '@/Pages/SiteVisitPage/SiteVisitPage';
import SupplierOverviewLayout from '@/Pages/SupplierOverview/SupplierOverviewLayout';
import SupplierRegistrationLayout from '@/Pages/SupplierRegistration/SupplierRegistrationLayout';
import SuppliersPage from '@/Pages/SuppliersPage/SuppliersPage';
import TenderPage from '@/Pages/TenderPage/TenderPage';

import { RouteObject } from 'react-router-dom';


export const admin: RouteObject[] = [
    {

        path: '',
        element: <AdminHomePage />,
        index: true

    },
    {
        path: '/admin/manager/operation',
        element: <OperationPage />,

    },
    {
        path: '/admin/records/customer',
        element: <AdminCustomerList />,

    },
    {

        path: '/admin/records/customer/:customerId/:projectId/:tabId',
        element: <CustomerPageLayout />,

    },
    {
        path: '/admin/records/customernewregistration',
        element: <CustomerNewRegistration />,

    },
    {
        path: '/admin/records/suppliers',
        element: <SuppliersPage />,

    },
    {
        path: '/admin/records/supplierregistration',
        element: <SupplierRegistrationLayout />,

    },
    {

        path: '/admin/records/supplier/:supplierId/:projectId/:tabId',
        element: <SupplierOverviewLayout />,

    },
    {
        path: '/admin/records/requestpage',
        element: <RequestPage />,

    },
    {
        path: '/admin/records/billinghistory',
        element: <BillingHistory />,

    },
    {
        path: '/admin/records/complaints',
        element: <Complaints />,

    },
    {
        path: '/admin/records/dailyvolumns',
        element: <Dailyvolumns />,

    },
    {
        path: '/admin/records/invoice',
        element: <InvoicePage />,

    },
    {
        path: '/admin/records/requestpage',
        element: <RequestPage />,

    },
    {
        path: '/admin/records/customer/:customerId',
        element: <CustomerLocation />,

    },
    {
        path: '/admin/records/customer/:tabId',
        element: <AdminCustomerPageLayout />,

    },
    {
        path: '/admin/records/sitevisit',
        element: <SiteVisitPage />,

    },
    {

        path: '/admin/records/connectprojectpage',
        element: <ConnectProjectPage />,

    },
    {
        path: '/admin/records/bidspage',
        element: <BidPage />,

    },
    {
        path: '/admin/records/bidspage/opentender',
        element: <TenderPage />,

    },


]

export const getRouteLists = (): { [key: string]: string } => {
    return admin.reduce((acc, route) => {
        if (route.path) {
            const label = route.path.replace(/^\//, '').replace(/\//g, ' ') || 'home';
            acc[label] = route.path;
        }
        return acc;
    }, {} as { [key: string]: string });
};


// export const getRouteNames = (): string[] => {
//     return admin.map(route => route.path || '');
// };