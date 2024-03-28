import CustomerDetail from '@/Pages/CustomerDetail/CustomerDetail'
import PortalEnrollment from '@/Pages/Portalenrollment/PortalEnrollment'
import { type FC } from 'react'

interface TabPanelProps {
  activeTab: string
  panelName: string
}

const TabPanelCustomer: FC<TabPanelProps> = ({ activeTab, panelName }) => {
  return (
    <div style={{ border: '1px', width: '100%' }} className=''>
      {activeTab === 'overview' && (
        <div className='flex-1 w-full'>
          <p>hey</p>
        </div>
      )}
      {activeTab === 'customers' && (
        <div className='flex-1 w-full'>
          <p>hey</p>
        </div>
      )}
      {activeTab === 'customerdetails' && (
        <div className="flex-1 w-full">
          {/* <StaffDocumentUpload /> */}
          <CustomerDetail />
        </div>)}
      {activeTab === 'eoirequest' && (
        <div className="flex-1 w-full">
          <p>hey</p>
        </div>)}
      {activeTab === 'ddq' && (
        <div className="flex-1 w-full">
          <p>hey</p>
        </div>)
      }
      {activeTab === 'sitevisit' && (
        <div className="flex-1 w-full">
          <p>hey</p>
        </div>)
      }
      {activeTab === 'costanalysis' && (
        <div className="flex-1 w-full">
          <p>hey</p>
        </div>)
      }
      {activeTab === 'agreement' && (
        <div className="flex-1 w-full">
          <PortalEnrollment />
        </div>)
      }
      {activeTab === 'connectproject' && (
        <div className="flex-1 w-full">
          <p>hey</p>
        </div>)
      }
      {activeTab === 'customermanager' && (
        <div className="flex-1 w-full">
          <p>hey</p>
        </div>)
      }
    </div>
  )
}

export default TabPanelCustomer
