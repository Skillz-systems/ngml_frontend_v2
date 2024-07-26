/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomerLayout from '@/Layout/CustomerLayout';
import ProtectedRoute from './ProtectedRoute';

/**
 * this is an HOC that renders the Client Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  Component - dashboard component.
 * @return {HTMLElement}
 */

const CustomerInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <ProtectedRoute
      component={() => (
        <CustomerLayout {...passThroughProps} Component={Component} />
      )}
    />
  </>
)

export default CustomerInternalLayout
