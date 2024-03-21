/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../NavigationMenu/NavigationBar';
import { Navigationlinks } from '../NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

interface SupplierLayoutProps {
  Component: ComponentType<any>;
  title: string;
}

/**
 * Renders a layout specific for supplier-related interfaces within the application. This layout includes
 * a navigation bar that can be toggled on or off, providing flexibility in how the interface is presented.
 * The main content area is reserved for rendering any passed React component, making this layout versatile
 * for various supplier-related pages or components.
 *
 * @param {Object} props - The props for `SupplierLayout`.
 * @param {ComponentType<any>} props.Component - The component to be displayed in the main content area.
 * @param {string} props.title - The title of the page, intended for use in SEO or accessibility, not displayed in the UI.
 */
const SupplierLayout: React.FC<SupplierLayoutProps> = ({ Component, ...otherProps }) => {
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

export default SupplierLayout;
