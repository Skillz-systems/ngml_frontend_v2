
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

export default ClientLayout;
