
import { createBrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';
import ProcessFlowGenerator from './Pages/ProcessFlowGroup/ProcessFlowGenerator';
import Root from './Pages/Root';
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
            path: '/processflowgenerator',
            element: <ProcessFlowGenerator />
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
