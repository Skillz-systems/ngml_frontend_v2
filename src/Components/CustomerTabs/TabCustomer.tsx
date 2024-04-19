import { FC, ReactNode, useEffect, useState } from 'react';

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
  const [panelName, setPanelName] = useState<string>('overview');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    setActiveTab(panelName);
  }, []);

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref);
    setPanelName(tab.name);
    setShowDropdown(false);
  };

  const handleSublistItemClick = (sublistRef: string): void => {
    setActiveTab(sublistRef);
    setShowDropdown(false);
  };

  const toggleDropdown = (): void => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-col mt-[-30px] md:mt-[20px]">
      <div className="flex items-center justify-end lg:hidden mb-3">
        <button
          onClick={toggleDropdown}
          className="p-2 rounded-md focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-500 transition-transform transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {showDropdown && (
        <div className="lg:hidden mb-3">
          <div className="flex flex-col space-y-2">
            {tablist.map((tab) => (
              <button
                key={tab.ref}
                className={`p-2 rounded-md focus:outline-none ${activeTab === tab.ref ? 'bg-gray-200' : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                  {tab.content === 'icon' && tab.icon}
                  {tab.content === 'numeric' && <span className="mr-1">{tablist.indexOf(tab) + 1}</span>}
                  <h4 className="truncate text-neutral-600 font-[500] text-[12px] capitalize leading-relaxed ml-1">{tab.name}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-1">
        <div className="lg:w-1/4 flex flex-col items-start justify-start space-y-2 mr-3 ">
          <div className="hidden lg:flex flex-col w-full space-y-4">
            {tablist.map((tab) => (
              <div key={tab.ref} className="flex justify-between items-center gap-x-2 cursor-pointer capitalize" onClick={() => { handleTabChange(tab) }}>
                <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                  {tab.content === 'icon' && tab.icon}
                  {tab.content === 'numeric' && <span className="mr-1">{tablist.indexOf(tab) + 1}</span>}
                  <h4 className="truncate text-neutral-600 font-[500] text-[12px] capitalize leading-relaxed ml-1">{tab.name}</h4>
                </div>
                {tab.ref === activeTab && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300"></span>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:block ml-4">
            {tablist.map((tab) => (
              <div key={tab.ref} className={`${activeTab === tab.ref ? '' : 'hidden'} lg:block lg:mt-2`}>
                {tab.sublist?.map((sub) => (
                  <div key={sub.ref} className="flex justify-between items-center gap-x-2 cursor-pointer capitalize" onClick={() => handleSublistItemClick(sub.ref)}>
                    <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                      <h4 className="truncate text-neutral-600 font-medium text-base capitalize leading-relaxed ml-1">{sub.name}</h4>
                    </div>
                    {sub.ref === activeTab && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300"></span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: '1px', width: '100%' }} className="">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default TabCustomer;