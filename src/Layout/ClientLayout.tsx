
import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Components/NavigationMenu/Navigationlinks';
import TopNavigationBar from '@/Components/TopNavigationBar/TopNavigationBar';

interface ClientLayoutProps {
  Component: ComponentType<unknown>;
}

/**
 * Provides a layout for client-facing pages, including a toggleable navigation bar and a main content area.
 * The navigation bar's visibility can be toggled by the user. The main content area renders the passed Component.
 *
 * @component
 * @param {Object} props
 * @param {ComponentType<unknown>} props.Component - Component to be rendered in the main content area.
 * @param {string} props.title - Title of the page (not currently displayed).
 */

const ClientLayout: React.FC<ClientLayoutProps> = ({ Component, ...otherProps }) => {
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const toggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  return (
    <div className='w-full h-full '>
      <TopNavigationBar />
      <div className='flex bg-[#EAEEF2] pt-[70px]'>
        <NavigationBar
          Navigationlinks={Navigationlinks}
          isNavigationBarVisible={isNavigationBarVisible}
          toggleNavigationBar={toggleNavigationBar}
        />
        <main className='2xl:bg-[red] bg-[#F5F7F9] p-[32px] mt-[20px] rounded-[8px] mr-[10px] flex-1'
        >
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
