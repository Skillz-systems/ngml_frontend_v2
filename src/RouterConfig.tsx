
import { createBrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';
import Root from './Pages/Root';
import StaffLoginPage from './Pages/Stafflogin/StaffLoginPage';
import { admin } from './Routes/Admin';
import { customer } from './Routes/Customer';
import Unauthorized from './Unauthorized';
import FormBuilderDashboard from './Pages/FormBuilderDashboard';
import FormBuilder from './Pages/FormBuilder';
import { QuestionProvider } from './context/QuestionContext';

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
            path: '*',
            element: <NotFound />,
        },
        {
            path: '/formdashboard',
            element: (
                <QuestionProvider>
                    <FormBuilderDashboard />
                </QuestionProvider>
            ),
        },
        {
            path: '/create-form/:id',
            element: (
                <QuestionProvider>
                    <FormBuilder />
                </QuestionProvider>
            ),
        },
    ]);
    return router;
};

export default RouterConfig;
