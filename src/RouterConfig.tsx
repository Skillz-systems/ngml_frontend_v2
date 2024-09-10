
import { createBrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';
import Root from './Pages/Root';
import StaffLoginPage from './Pages/Stafflogin/StaffLoginPage';
import { admin } from './Routes/Admin';
import { customer } from './Routes/Customer';
import Unauthorized from './Unauthorized';
import FormBuilderDashboard from './Pages/FormBuilder/FormBuilderDashboard';
import FormBuilder from './Pages/FormBuilder/FormBuilder';

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

            path: '/unauthorized',
            element: <Unauthorized />
        },
        {
            path: '/customer',
            children: customer

        },
        {
            path:'/formbuilder',
            element:<FormBuilderDashboard />
        },
        {
            path:'formbuilder/create-form/:id',
            element:<FormBuilder />

        },
        {
            path:'/',
            element:<FormBuilderDashboard />
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);
    return router;
};

export default RouterConfig;
