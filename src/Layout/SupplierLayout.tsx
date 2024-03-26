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

      <div className='flex-1 flex bg-[]'>
        <div
          className='p-2 '
          onClick={toggleNavigationBar}
          style={{ minWidth: '40px', visibility: isNavigationBarVisible ? 'hidden' : 'visible' }}

        >
          <div className='mt-[10px] cursor-pointer hover:bg-[#429051] flex items-center justify-center h-[40px] w-[40px] rounded-[50%] border-2 border-500-[red]'>
            <DensityMedium className='text-[#EAF4CD]' style={{ fontSize: 'medium' }} />
          </div>
        </div>

        <main className='bg-[#EAF4CD] p-[32px] mt-[20px] rounded-[8px] mr-[10px] flex-1 '>
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default SupplierLayout;
