
import { createBrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';
// import ProcessFlowGenerator from './Pages/ProcessFlowGroup/ProcessFlowGenerator';
import Root from './Pages/Root';
import SSOCallback from './Pages/SSO/SSOCallback';
import SSOLogin from './Pages/SSO/SSOLogin';
import SSOUpdateUser from './Pages/SSO/SSOUpdateUser';
import StaffLoginPage from './Pages/Stafflogin/StaffLoginPage';
import { admin } from './Routes/Admin';
import { customer } from './Routes/Customer';
import Unauthorized from './Unauthorized';

const RouterConfig = () => {


    const router = createBrowserRouter([

        {
            path: '/admin',
            element: <Root />,
            children: admin
        },
        {
            path: '/',
            element: <StaffLoginPage />
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

    ]);
    return router;
};

export default RouterConfig;
