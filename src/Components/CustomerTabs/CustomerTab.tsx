import { useState, type FC } from 'react'
import TabListCustomer, { type TabListInterface } from './CustomerTabList'
import TabPanelCustomer from './CustomerTabPanel'
// import ButtonComponent from '../ButtonComponent'

/**
 * This code defines a Tabs component that displays a tabbed interface.
 * It manages the active tab and panel name using the useState hook.
 * The tablist is an array of objects representing each tab.
 * The handleTabChange function is called when a tab is clicked to update the active tab and panel name.
 * The component renders the TabList and TabPanel components, passing the necessary props.
 */

interface TabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsCustomer: FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const [panelName, setPanelName] = useState<string>('eoirequest')

  const tablist: TabListInterface[] = [
    {
      name: 'overview',
      ref: 'overview'
    },
    {
      name: 'customers',
      ref: 'customers'
    },
    {
      name: 'customer details',
      ref: 'customerdetails'
    },
    {
      name: 'Eoi request',
      ref: 'eoirequest'
    },
    {
      name: 'DDQ',
      ref: 'ddq'
    },
    {
      name: 'site visit',
      ref: 'sitevisit'
    },
    {
      name: 'cost analysis',
      ref: 'costanalysis'
    },
    {
      name: 'agreement',
      ref: 'agreement'
    },
    {
      name: 'connect project',
      ref: 'connectproject'
    },
    {
      name: 'customer manager',
      ref: 'customermanager'
    }

  ]

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref)
    setPanelName(tab.name)
  }
  return (
    <>
      <div style={{ border: '1px solid gray p-5' }} className="flex flex-1 mt-4">
        <TabListCustomer tablist={tablist} onTabChange={handleTabChange} activeTab={activeTab} />

        <TabPanelCustomer activeTab={activeTab} panelName={panelName} />
      </div>
    </>
  )
}

export default TabsCustomer
