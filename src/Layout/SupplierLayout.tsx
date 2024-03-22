import { DensityMedium } from '@mui/icons-material';
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Components/NavigationMenu/Navigationlinks';

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
    <div className='flex w-full h-screen gradient'>
      <div className={`w-[260px] ${isNavigationBarVisible ? '' : 'hidden'}`} >
        <NavigationBar
          Navigationlinks={Navigationlinks}
          isNavigationBarVisible={isNavigationBarVisible}
          toggleNavigationBar={toggleNavigationBar}
        />
      </div>

      <div className='flex-1 flex'>
        <div
          className='p-2 cursor-pointer h-[50px] rounded-[50%] border-2 border-500 mt-[20px] '
          onClick={toggleNavigationBar}
          style={{ minWidth: '50px', visibility: isNavigationBarVisible ? 'hidden' : 'visible' }}

        >
          <DensityMedium className='text-[#EAF4CD] h-[18px] w-[18px]' />
        </div>

        <main className='bg-[#EAF4CD] p-[32px] mt-[20px] rounded-[8px] flex-1 mr-[10px]'>
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default SupplierLayout;
