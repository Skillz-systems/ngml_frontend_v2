
import TopNavigationBar from '@/Components/TopNavigationBar/TopNavigationBar';
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { CustomerLinks } from '@/Links/CustomerLinks';

interface CustomerLayoutProps {
  Component: ComponentType<unknown>;
}

/**
 * Provides a layout for customer-facing pages, including a toggleable navigation bar and a main content area.
 * The navigation bar's visibility can be toggled by the user. The main content area renders the passed Component.
 *
 * @component
 * @param {Object} props
 * @param {ComponentType<unknown>} props.Component - Component to be rendered in the main content area.
 * @param {string} props.title - Title of the page (not currently displayed).
 */

const CustomerLayout: React.FC<CustomerLayoutProps> = ({ Component, ...otherProps }) => {
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const toggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  return (
    <div className='w-full h-full fixed'>
      <TopNavigationBar />
      <div className='flex bg-[#CFE9A1] pt-[70px] w-[100%] h-[100vh]'>
        <div className='hidden sm:block'>
          <NavigationBar
            Navigationlinks={CustomerLinks}
            isNavigationBarVisible={isNavigationBarVisible}
            toggleNavigationBar={toggleNavigationBar}
            sliceLength={2}
          />
        </div>
        <main className='bg-[#ECF5CC] p-[32px] mt-[20px] rounded-[8px] mr-[10px] w-[100%] h-[100%] overflow-y-auto'>
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default CustomerLayout;
