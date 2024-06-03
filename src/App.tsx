import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './AuthContext';
import { routes } from './Routes/Index';
import WithRole from './Hoc/withRole';
import { UserRole } from './file';

function App(): JSX.Element {
  const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const AdminRoutes = routes.AdminRoutes.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={path}
      element={
        WithRole({ roles: [UserRole.Admin], children: <Component /> })
      }
    />
  ));

  const ClientRoutes = routes.ClientRoutes.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={path}
      element={
        WithRole({ roles: [UserRole.Customer], children: <Component /> })
      }
    />
  ));

  const StaffRoutes = routes.StaffRoutes.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={path}
      element={
        WithRole({ roles: [UserRole.Staff], children: <Component /> })
      }
    />
  ));

  const SupplierRoutes = routes.SupplierRoutes.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={path}
      element={
        WithRole({ roles: [UserRole.Supplier], children: <Component /> })
      }
    />
  ));

  return (
    <AuthProvider>
      <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            {authRoutes}
            {AdminRoutes}
            {ClientRoutes}
            {StaffRoutes}
            {SupplierRoutes}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
