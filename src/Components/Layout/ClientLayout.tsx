/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../NavigationMenu/NavigationBar';
import { Navigationlinks } from '../NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

interface ClientLayoutProps {
  Component: ComponentType<any>;
  title: string;
}

/**
 * Provides a layout for client-facing pages, including a toggleable navigation bar and a main content area.
 * The navigation bar's visibility can be toggled by the user. The main content area renders the passed Component.
 *
 * @component
 * @param {Object} props
 * @param {ComponentType<any>} props.Component - Component to be rendered in the main content area.
 * @param {string} props.title - Title of the page (not currently displayed).
 */

const ClientLayout: React.FC<ClientLayoutProps> = ({ Component, ...otherProps }) => {
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

export default ClientLayout;
