/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminLayout from '@/Layout/AdminLayout'

/**
 * this is an HOC that renders the Admin Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  Component - dashboard component.
 * @return {HTMLElement}
 */

const AdminInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <AdminLayout {...passThroughProps} Component={Component} />
  </>
)

export default AdminInternalLayout
