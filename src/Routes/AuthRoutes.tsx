import NotFound from '@/NotFound';
import StaffLoginPage from '@/Pages/Stafflogin/StaffLoginPage';
import Unauthorized from '@/Unauthorized';

export const AuthRoutes = [
    {
        title: 'stafflogin',
        path: '/',
        component: StaffLoginPage
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