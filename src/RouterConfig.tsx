
import { createBrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';
// import ProcessFlowGenerator from './Pages/ProcessFlowGroup/ProcessFlowGenerator';
import Root from './Pages/Root';
import SSOCallback from './Pages/SSO/SSOCallback';
import SSOLogin from './Pages/SSO/SSOLogin';
import SSOUpdateUser from './Pages/SSO/SSOUpdateUser';
// import StaffLoginPage from './Pages/Stafflogin/StaffLoginPage';
import FormBuilderPage from './Pages/FormBuilderCroup/FormBuilderPage';
import GenerateToken from './Pages/GenerateToken/GenerateToken';
import SuccessToken from './Pages/SuccessToken/SuccessToken';
import { admin } from './Routes/Admin';
import { customer } from './Routes/Customer';
import Unauthorized from './Unauthorized';
// import SuccessToken from './Pages/SuccessToken/SuccessToken';

const RouterConfig = () => {


    const router = createBrowserRouter([

        {
            path: '/admin',
            element: <Root />,
            children: admin
        },
        {
            path: '/',
            element: <SSOLogin />
        },
        {
            path: '/sso',
            element: <SSOLogin />
        },
        {
            path: '/callback',
            element: <SSOCallback />
        },
        {
            path: '/sso/redirect',
            element: <SSOUpdateUser />
        },

        {

            path: '/unauthorized',
            element: <Unauthorized />
        },
        {
            path: '/customer',
            children: customer

        },
        {
            path: '*',
            element: <NotFound />,
        },
        {
            path: '/forms',
            element: <FormBuilderPage />
        },
        {
            path: '/generateToken',
            element: <GenerateToken />
        },
        {
            path: '/generateToken/success',
            element: <SuccessToken />
        },

    ]);
    return router;
};

export default RouterConfig;
