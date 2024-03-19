/* eslint-disable @typescript-eslint/no-explicit-any */
import InternalLayout from '@/Components/Layout/AdminLayout'

/**
 * this is an HOC that renders the Internal Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  component - dashboard component.
 * @return {HTMLElement}
 */

const ComposeInternalLayouts = (Component: any) => (passThroughProps: any) => (
  <>
    <InternalLayout {...passThroughProps} Component={Component} />
  </>
)

export default ComposeInternalLayouts
