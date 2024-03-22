/* eslint-disable @typescript-eslint/no-explicit-any */
import StaffLayout from '../Layout/StaffLayout'

/**
 * this is an HOC that renders the Staff Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  Component - dashboard component.
 * @return {HTMLElement}
 */

const StaffInternalLayout = (Component: any) => (passThroughProps: any) => (
  <>
    <StaffLayout {...passThroughProps} Component={Component} />
  </>
)

export default StaffInternalLayout
