/* eslint-disable @typescript-eslint/no-explicit-any */
import SupplierLayout from '../Layout/SupplierLayout'

/**
 * this is an HOC that renders the Supplier Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  Component - dashboard component.
 * @return {HTMLElement}
 */

const SupplierInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <SupplierLayout {...passThroughProps} Component={Component} />
  </>
)

export default SupplierInternalLayout
