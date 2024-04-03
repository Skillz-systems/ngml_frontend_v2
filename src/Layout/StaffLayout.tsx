
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Components/NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';
import TopNavigationBar from '@/Components/TopNavigationBar/TopNavigationBar';

interface StaffLayoutProps {
  Component: ComponentType<unknown>;
}


/**
 * `StaffLayout` is a component that renders a layout for staff-related sections of the application. 
 * It includes a toggleable navigation bar and a main content area. The navigation bar can be shown or 
 * hidden, and the main content area is designed to render any passed React component.
 *
 * @param {Object} props - Props for `StaffLayout`.
 * @param {ComponentType<unknown>} props.Component - The component to be rendered in the main content area.
 * @param {string} props.title - The title for the page. Note: Not currently displayed.
 */

const StaffLayout: React.FC<StaffLayoutProps> = ({ Component, ...otherProps }) => {
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
              <div className='mt-[10px] cursor-pointer hover:bg-[#429051] flex items-center justify-center h-[40px] w-[40px] rounded-[50%] border-2 border-500-[red]'>
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

export default StaffLayout;
