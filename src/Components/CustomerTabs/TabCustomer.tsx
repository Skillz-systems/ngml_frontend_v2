import { FC, ReactNode, useState } from 'react';

interface TabInterface {
  name: string;
  ref: string;
}

export interface TabListInterface {
  name: string;
  ref: string;
  children?: TabInterface[];
  sublist?: TabListInterface[];
  content?: 'icon' | 'numeric';
  icon?: ReactNode;
}

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tablist: TabListInterface[];
  tabContent: { [key: string]: ReactNode };
}

const TabCustomer: FC<TabsProps> = ({ activeTab, setActiveTab, tablist, tabContent }) => {
  const [panelName, setPanelName] = useState<string>('eoirequest');

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref);
    setPanelName(tab.name);
  };

  const handleSublistItemClick = (sublistRef: string): void => {
    setActiveTab(sublistRef);
  };

  return (
    <div className="flex flex-1 mt-4">
      <div className='w-1/4 flex flex-col items-start justify-start space-y-2 mr-3 '>
        {tablist.map((tab) => (
          <div key={tab.ref} className="flex flex-col w-full space-y-2 ">
            <div className="flex justify-between items-center gap-x-2 cursor-pointer capitalize" onClick={() => { handleTabChange(tab) }}>
              <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                {tab.content === 'icon' && tab.icon}
                {tab.content === 'numeric' && <span className="mr-1">{tablist.indexOf(tab) + 1}</span>}
                <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>{tab.name}</h4>
              </div>
              {tab.ref === activeTab && (
                <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300'></span>
              )}
            </div>
            {activeTab === tab.ref && (
              <>
                {tab.children?.map((child) => (
                  <a key={child.ref} className="space-y-2  cursor-pointer no-underline hover:no-underline " href={`#${child.ref}`} >
                    <div className="flex justify-between items-center gap-x-2  ml-8">
                      <h4 className='truncate text-neutral-500 text-base capitalize hover:text-neutral-700'>{child?.name}</h4>
                      <span className='h-1.5 w-1.5 rounded-full' ></span>
                    </div>
                  </a>
                ))}
                {tab.sublist && tab.sublist.map((sub) => (
                  <div key={sub.ref} className="flex flex-col w-full space-y-2 ml-2" onClick={() => handleSublistItemClick(sub.ref)}>
                    <div className="flex justify-between items-center gap-x-2 cursor-pointer capitalize">
                      <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                        <h4 className='truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1'>{sub.name}</h4>
                      </div>
                      {sub.ref === activeTab && (
                        <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300'></span>
                      )}
                    </div>
                    {activeTab === sub.ref && (
                      <TabCustomer activeTab={activeTab} setActiveTab={setActiveTab} tablist={sub.sublist || []} tabContent={tabContent} />
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
      <div style={{ border: '1px', width: '100%' }} className=''>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default TabCustomer;