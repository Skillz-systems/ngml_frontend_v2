/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../NavigationMenu/NavigationBar';
import { Navigationlinks } from '../NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

interface InternalLayoutProps {
  Component: ComponentType<any>;
  title: string;
}

/**
 * AdminLayout is a React Functional Component that renders the main layout for administrative interfaces.
 * It includes a navigation bar on the left side, which can be toggled on or off, and a main content area
 * where the passed Component is rendered. The layout is designed to be flexible and reusable across different
 * parts of the admin interface.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ComponentType<any>} props.Component - The React component to be rendered in the main content area.
 * This component will receive all `otherProps` as its props.
 * @param {string} props.title - The title of the page, used for accessibility or SEO purposes, not currently displayed.
 * @returns {React.ReactElement} - A React element representing the admin layout.
 *
 */

const AdminLayout: React.FC<InternalLayoutProps> = ({ Component, ...otherProps }) => {
  
    // State to manage the visibility of the navigation bar
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  /**
   * Toggles the visibility of the navigation bar.
   */
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

export default AdminLayout;
