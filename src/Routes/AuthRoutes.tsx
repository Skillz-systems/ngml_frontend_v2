import PasswordResetPage from '@/Pages/Passwordreset/PasswordResetPage';
import ForgotPassword from '@/Pages/Forgotpassword/ForgotPassword';
import PortalEnrollment from '@/Pages/Portalenrollment/PortalEnrollment';
import StaffLoginPage from '@/Pages/Stafflogin/StaffLoginPage';


export const AuthRoutes = [
    {
        title: 'passwordRest',
        path: '/',
        component: PasswordResetPage
    },
    {
        title: 'forgotpassword',
        path: '/',
        component: ForgotPassword
    },
    {
        title: 'portalenrollment',
        path: '/',
        component: PortalEnrollment
    },
    {
        title: 'staffloginpage',
        path: '/',
        component: StaffLoginPage
    },
]