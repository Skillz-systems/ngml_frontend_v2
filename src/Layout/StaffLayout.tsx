
import TopNavigationBar from '@/Components/TopNavigationBar/TopNavigationBar';
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Links/Navigationlinks';

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

export default StaffLayout;
