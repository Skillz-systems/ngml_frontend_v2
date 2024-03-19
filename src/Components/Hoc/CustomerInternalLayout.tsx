/* eslint-disable @typescript-eslint/no-explicit-any */
import ClientLayout from '../Layout/ClientLayout'

/**
 * this is an HOC that renders the Internal Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  component - dashboard component.
 * @return {HTMLElement}
 */

const CustomerInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <ClientLayout {...passThroughProps} Component={Component} />
  </>
)

export default CustomerInternalLayout
