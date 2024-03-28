
import { DensityMedium } from '@mui/icons-material';
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
    <>
      <TopNavigationBar />
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
            className='p-2'
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
    </>
  );
};

export default ClientLayout;
