import NotFound from '@/NotFound';
import CustomerLoginPage from '@/Pages/Customer/CustomerLoginPage/CustomerLoginPage';
import CustomerOtpPage from '@/Pages/Customer/CustomerOtpPage/CustomerOtpPage';
import CustomerRegistrationPage from '@/Pages/Customer/CustomerRegistrationPage/CustomerRegistrationPage';
import StaffLoginPage from '@/Pages/Stafflogin/StaffLoginPage';
import Unauthorized from '@/Unauthorized';

export const AuthRoutes = [
    {
        title: 'stafflogin',
        path: '/',
        component: StaffLoginPage
    },
    {
        title: 'customer registration page',
        path: '/customer/register',
        component: CustomerRegistrationPage
    },
    {
        title: 'notFound',
        path: '*',
        component: NotFound
    },
    {
        title: 'unauthorized',
        path: '/unauthorized',
        component: Unauthorized
    },
    {
        title: 'customerLoginPage',
        path: '/customer/login',
        component: CustomerLoginPage
    },

    {
        title: 'customerotpPage',
        path: '/customer/otp',
        component: CustomerOtpPage
    },
    
]