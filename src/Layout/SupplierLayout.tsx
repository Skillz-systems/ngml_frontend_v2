import TopNavigationBar from '@/Components/TopNavigationBar/TopNavigationBar';
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Links/Navigationlinks';

interface SupplierLayoutProps {
  Component: ComponentType<unknown>;
}

/**
 * Renders a layout specific for supplier-related interfaces within the application. This layout includes
 * a navigation bar that can be toggled on or off, providing flexibility in how the interface is presented.
 * The main content area is reserved for rendering any passed React component, making this layout versatile
 * for various supplier-related pages or components.
 *
 * @param {Object} props - The props for `SupplierLayout`.
 * @param {ComponentType<unknown>} props.Component - The component to be displayed in the main content area.
 * @param {string} props.title - The title of the page, intended for use in SEO or accessibility, not displayed in the UI.
 */

const SupplierLayout: React.FC<SupplierLayoutProps> = ({ Component, ...otherProps }) => {
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const toggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  return (
    <div className='w-full h-full fixed'>
      <TopNavigationBar />
      <div className='flex bg-[#EAEEF2] pt-[70px] w-[100%] h-[100vh]'>
        <div className='hidden sm:block'>
          <NavigationBar
            Navigationlinks={Navigationlinks}
            isNavigationBarVisible={isNavigationBarVisible}
            toggleNavigationBar={toggleNavigationBar}
          />
        </div>
        <main className='bg-[#F5F7F9] p-[32px] mt-[20px] rounded-[8px] mr-[10px] w-[100%] h-[100%] overflow-y-auto'>
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default SupplierLayout;
