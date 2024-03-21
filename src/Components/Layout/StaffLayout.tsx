/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../NavigationMenu/NavigationBar';
import { Navigationlinks } from '../NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

interface StaffLayoutProps {
  Component: ComponentType<any>;
  title: string;
}


/**
 * `StaffLayout` is a component that renders a layout for staff-related sections of the application. 
 * It includes a toggleable navigation bar and a main content area. The navigation bar can be shown or 
 * hidden, and the main content area is designed to render any passed React component.
 *
 * @param {Object} props - Props for `StaffLayout`.
 * @param {ComponentType<any>} props.Component - The component to be rendered in the main content area.
 * @param {string} props.title - The title for the page. Note: Not currently displayed.
 */
const StaffLayout: React.FC<StaffLayoutProps> = ({ Component, ...otherProps }) => {
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const toggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  return (
    <>
      <div>
        <div className='gradient flex w-[100%] h-[100vh] flex-row'>
          {isNavigationBarVisible ? (
            <>
              <NavigationBar
                Navigationlinks={Navigationlinks}
                isNavigationBarVisible={isNavigationBarVisible}
                toggleNavigationBar={toggleNavigationBar}
              />
              <main className='w-[100%] ml-[260px] bg-[#EAF4CD] p-[32px] mt-[20px] rounded-[8px] overflow-y-auto ' >
                <Component {...otherProps} style={{ overflowY: 'auto' }} />
              </main>
            </>
          ) : (
            <div
              className='layout-icon-body'
              onClick={toggleNavigationBar}
            >
              <DensityMedium className='text-[#CCD0DC] h-[18px] w-[18px]' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StaffLayout;
