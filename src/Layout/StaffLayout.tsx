
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Components/NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

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
    <div className='flex w-full h-screen gradient'>
      <div className={`w-[260px] ${isNavigationBarVisible ? '' : 'hidden'}`} >
        <NavigationBar
          Navigationlinks={Navigationlinks}
          isNavigationBarVisible={isNavigationBarVisible}
          toggleNavigationBar={toggleNavigationBar}
        />
      </div>

      <div className='flex-1 flex '>
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

export default StaffLayout;
