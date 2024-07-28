import CustomerInternalLayout from "@/Hoc/CustomerInternalLayout";
import CustomerBusinessManagerPageLayout from "@/Pages/Customer/CustomerBusinessManagerPageLayout/CustomerBusinessManagerPageLayout";
import CustomerHomePage from "@/Pages/Customer/CustomerHomePage/CustomerHomePage";


export const CustomerRoutes = [
   {
      title: 'customer home page',
      path: '/customer',
      component: CustomerInternalLayout(CustomerHomePage),
      exact: true
   },
   {
      title: 'customer business manager page',
      path: '/customer/businessmanager',
      component: CustomerInternalLayout(CustomerBusinessManagerPageLayout),
      exact: true
   },
]