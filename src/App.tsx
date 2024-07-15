import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateAdminRoute, routes } from './Routes/Index';
import Unauthorized from './Unauthorized';
import NotFound from './NotFound';


function App(): JSX.Element {

  const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const AdminRoutes = routes.AdminRoutes.map(
    ({ path, component: Component }) => (
      <Route
        key={path}
        path={path}
        element={
          <PrivateAdminRoute key={path}>
            <Component />
          </PrivateAdminRoute>
        }
      />
    )
  );

  const ClientRoutes = routes.ClientRoutes.map(
    ({ path, component: Component }) => (
      <Route
        key={path}
        path={path}
        element={
          <PrivateAdminRoute key={path}>
            <Component />
          </PrivateAdminRoute>
        }
      />
    )
  );

  const StaffRoutes = routes.StaffRoutes.map(
    ({ path, component: Component }) => (
      <Route
        key={path}
        path={path}
        element={
          <PrivateAdminRoute key={path}>
            <Component />
          </PrivateAdminRoute>
        }
      />
    )
  );

  const SupplierRoutes = routes.SupplierRoutes.map(
    ({ path, component: Component }) => (
      <Route
        key={path}
        path={path}
        element={
          <PrivateAdminRoute key={path}>
            <Component />
          </PrivateAdminRoute>
        }
      />
    )
  );

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {authRoutes}
          {AdminRoutes}
          {ClientRoutes}
          {StaffRoutes}
          {SupplierRoutes}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
