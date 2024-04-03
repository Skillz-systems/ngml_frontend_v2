
import { AdminLinks } from '@/Links/AdminLinks';
import { DensityMedium } from '@mui/icons-material';
import React, { useState, type ComponentType } from 'react';
import { NavigationBar, TopNavigationBar } from '../Components/index';

interface AdminLayoutProps {
  Component: ComponentType<unknown>;
}

/**
 * AdminLayout is a React Functional Component that renders the main layout for administrative interfaces.
 * It includes a navigation bar on the left side, which can be toggled on or off, and a main content area
 * where the passed Component is rendered. The layout is designed to be flexible and reusable across different
 * parts of the admin interface.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ComponentType<unknown>} props.Component - The React component to be rendered in the main content area.
 * This component will receive all `otherProps` as its props.
 * @param {string} props.title - The title of the page, used for accessibility or SEO purposes, not currently displayed.
 * @returns {React.ReactElement} - A React element representing the admin layout.
 *
 */
const AdminLayout: React.FC<AdminLayoutProps> = ({ Component, ...otherProps }) => {
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const toggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  return (
    <div className='w-[100%] '>
      <TopNavigationBar />
      <div className='flex w-[100%] h-[100%] bg-[#EAEEF2] pt-[70px]'>
        <div className={`w-[17%] ${isNavigationBarVisible ? 'md:block hidden' : 'hidden'}`}>
          <NavigationBar
            Navigationlinks={AdminLinks}
            isNavigationBarVisible={isNavigationBarVisible}
            toggleNavigationBar={toggleNavigationBar}
          />
          {/* {isNavigationBarVisible && (
            <div
              className='p-2 '
              onClick={toggleNavigationBar}
              style={{ minWidth: '40px', visibility: 'hidden' }}
            >
              <div className='mt-[10px] cursor-pointer hover:bg-[#429051] flex items-center justify-center h-[40px] w-[40px] rounded-[50%] '>
                <DensityMedium className='text-[#EAF4CD]' style={{ fontSize: 'medium' }} />
              </div>
            </div>
          )} */}
        </div>

        <div className='flex-1 flex'>
          {!isNavigationBarVisible && (
            <div
              className='p-2 '
              onClick={toggleNavigationBar}
              style={{ minWidth: '40px', visibility: 'visible' }}
            >
              <div className='mt-[10px] cursor-pointer hover:bg-[#429051] flex items-center justify-center h-[40px] w-[40px] rounded-[50%] '>
                <DensityMedium className='text-[#EAF4CD]' style={{ fontSize: 'medium' }} />
              </div>
            </div>
          )}
          <main className='w-[100%] h-[100%] bg-[#F5F7F9] p-[32px] mt-[20px] rounded-[8px] mr-[10px] flex-1 '
          >
            <Component {...otherProps} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
