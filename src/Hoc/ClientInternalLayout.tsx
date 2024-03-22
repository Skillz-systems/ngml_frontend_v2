/* eslint-disable @typescript-eslint/no-explicit-any */
import ClientLayout from '../Layout/ClientLayout'

/**
 * this is an HOC that renders the Client Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  Component - dashboard component.
 * @return {HTMLElement}
 */

const ClientInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <ClientLayout {...passThroughProps} Component={Component} />
  </>
)

export default ClientInternalLayout
