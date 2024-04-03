import { DensityMedium } from '@mui/icons-material';
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Components/NavigationMenu/Navigationlinks';
import TopNavigationBar from '@/Components/TopNavigationBar/TopNavigationBar';

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
    <div className='w-[100%] '>
      <TopNavigationBar />
      <div className='flex w-[100%] h-[100%] bg-[#EAEEF2] pt-[70px]'>
        <div className={`w-[100%] ${isNavigationBarVisible ? 'md:block hidden' : 'hidden'}`}>
          <NavigationBar
            Navigationlinks={Navigationlinks}
            isNavigationBarVisible={isNavigationBarVisible}
            toggleNavigationBar={toggleNavigationBar}
          />
          {isNavigationBarVisible && (
            <div
              className='p-2 '
              onClick={toggleNavigationBar}
              style={{ minWidth: '40px', visibility: 'hidden' }}
            >
              <div className='mt-[10px] cursor-pointer hover:bg-[#429051] flex items-center justify-center h-[40px] w-[40px] rounded-[50%] '>
                <DensityMedium className='text-[#EAF4CD]' style={{ fontSize: 'medium' }} />
              </div>
            </div>
          )}
        </div>

        <div className='flex-1 flex w-[100%]'>
          {!isNavigationBarVisible && (
            <div
              className='p-2 '
              onClick={toggleNavigationBar}
              style={{ minWidth: '40px', visibility: 'visible' }}
            >
              <div className='mt-[10px] cursor-pointer hover:bg-[#429051] flex items-center justify-center h-[40px] w-[40px] rounded-[50%]'>
                <DensityMedium className='text-[#EAF4CD]' style={{ fontSize: 'medium' }} />
              </div>
            </div>
          )}
          <main className='w-[100%] 2xl:bg-[red] h-[100%] bg-[#F5F7F9] p-[32px] mt-[20px] rounded-[8px] mr-[10px] flex-1 '
          >
            <Component {...otherProps} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SupplierLayout;
