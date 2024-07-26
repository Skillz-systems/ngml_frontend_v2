import CustomerInternalLayout from "@/Hoc/CustomerInternalLayout";
import CustomerHomePage from "@/Pages/Customer/CustomerHomePage/CustomerHomePage";


export const CustomerRoutes = [
   {
    title: 'customer home page',
    path: '/customer',
    component: CustomerInternalLayout(CustomerHomePage),
    exact: true
   },
]