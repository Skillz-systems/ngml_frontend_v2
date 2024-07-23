import NotFound from '@/NotFound';
import CustomerRegistrationPage from '@/Pages/CustomerRegistrationPage/CustomerRegistrationPage';
import StaffLoginPage from '@/Pages/Stafflogin/StaffLoginPage';
import Unauthorized from '@/Unauthorized';

export const AuthRoutes = [
    // {
    //     title: 'stafflogin',
    //     path: '/',
    //     component: StaffLoginPage
    // },
    {
        title: 'stafflogin',
        path: '/',
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
]