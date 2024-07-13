
import AdminLayout from '@/Layout/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

/**
 * this is an HOC that renders the Admin Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  Component - dashboard component.
 * @return {HTMLElement}
 */

const AdminInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <ProtectedRoute
      component={() => (
        <AdminLayout {...passThroughProps} Component={Component} />
      )}
    />
  </>
);

export default AdminInternalLayout;
