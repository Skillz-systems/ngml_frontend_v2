import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC, ReactNode, useEffect, useState } from 'react';

/**
 * Interface for individual tab information.
 * @typedef {Object} TabInterface
 * @property {string} name - The name of the tab.
 * @property {string} ref - The unique identifier for the tab.
 */

/**
 * Interface for the list of tabs, which can contain nested tab lists.
 * @typedef {Object} TabListInterface
 * @property {string} name - The name of the tab.
 * @property {string} ref - The unique identifier for the tab.
 * @property {TabInterface[]} [children] - A list of child tabs, if any.
 * @property {TabListInterface[]} [sublist] - A list of sub-tabs, if any.
 * @property {'icon' | 'numeric'} [content] - Type of content (icon or numeric).
 * @property {ReactNode} [icon] - An optional icon to be displayed on the tab.
 */

/**
 * Props for the `TabCustomer` component.
 * @typedef {Object} TabsProps
 * @property {string} activeTab - The current active tab identifier.
 * @property {(tab: string) => void} setActiveTab - Function to set the active tab.
 * @property {TabListInterface[]} tablist - The list of tabs to be displayed.
 * @property {{ [key: string]: ReactNode }} tabContent - The content associated with each tab.
 */

/**
* A component that displays a list of tabs with optional dropdown for smaller screens.
* 
* @param {TabsProps} props - The props for the component.
* @returns {JSX.Element} - The rendered JSX element.
*/


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

  useEffect(() => {
    setActiveTab(panelName);
  }, []);

  /**
  * Handle tab change by setting the active tab and panel name.
  * 
  * @param {TabListInterface} tab - The tab to set as active.
  * @returns {void}
  */

  const handleTabChange = (tab: TabListInterface): void => {
    setActiveTab(tab.ref);
    setPanelName(tab.name);
  };

  /**
  * Handle dropdown change for mobile or smaller screen views.
  * 
  * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event from the dropdown.
  * @returns {void}
  */

  const handleDropdownChange = (event: SelectChangeEvent<string>): void => {
    const selectedRef = event.target.value;
    const selectedTab = tablist
      .flatMap((tab) => [tab, ...(tab.sublist || [])])
      .find((tab) => tab.ref === selectedRef);

    if (selectedTab) {
      handleTabChange(selectedTab);
    }
  };

  return (
    <div className="flex flex-col mt-3">
      <div className="mb-3 lg:hidden ml-2">
        <Select
          value={activeTab}
          onChange={handleDropdownChange}
          displayEmpty
          fullWidth
          variant="outlined"
          style={{ textTransform: 'uppercase', borderRadius: '10px', outline: 'none' }}
          MenuProps={{
            PaperProps: {
              style: {
                marginTop: 90,
              },
            },
          }}
        >
          {tablist.map((tab) => [
            <MenuItem key={tab.ref} value={tab.ref} style={{ textTransform: 'uppercase' }}>
              {tab.name}
            </MenuItem>,
            ...(tab.sublist || []).map((sub) => (
              <MenuItem key={sub.ref} value={sub.ref} style={{ marginLeft: '20px' }}>
                - -{sub.name}
              </MenuItem>
            )),
          ])}
        </Select>
      </div>

      <div className="flex flex-1">
        <div className="lg:w-1/4 flex flex-col items-start justify-start space-y-2 mr-3 ">
          <div className="hidden lg:flex flex-col w-full space-y-4">
            {tablist.map((tab) => (
              <div key={tab.ref}>
                <div
                  className={`flex justify-between items-center cursor-pointer capitalize ${tab.ref === activeTab ? 'text-primary' : 'text-neutral-600'
                    }`}
                  onClick={() => handleTabChange(tab)}
                >
                  <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                    {tab.content === 'icon' && tab.icon}
                    {tab.content === 'numeric' && <span className="mr-1 text-[12px]">{tablist.indexOf(tab) + 1}</span>}
                    <h4 className="truncate text-neutral-600 font-[500] text-[12px] capitalize leading-relaxed ml-1">
                      {tab.name}
                    </h4>
                  </div>
                  {tab.ref === activeTab && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300"></span>
                  )}
                </div>

                {tab.ref === activeTab && tab.sublist && (
                  <div className="lg:ml-4 space-y-2">
                    {tab.sublist.map((sub) => (
                      <div
                        key={sub.ref}
                        className="flex justify-between items-center gap-[30px] cursor-pointer capitalize"
                        onClick={() => handleTabChange(sub)}
                      >
                        <div className="flex truncate text-neutral-600 font-medium text-base capitalize justify-start">
                          <h4 className="truncate text-neutral-600 font-[500] text-[12px] capitalize leading-relaxed ml-1">
                            {sub.name}
                          </h4>
                        </div>
                        {sub.ref === activeTab && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300"></span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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