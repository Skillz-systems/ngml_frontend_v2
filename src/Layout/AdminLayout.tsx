
import { AdminLinks } from '@/Links/AdminLinks';
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
    <div className='w-full h-full'>
      <TopNavigationBar />
      <div className='flex bg-[#EAEEF2] pt-[70px] w-[100%]'>
        <div className='hidden sm:block'>
          <NavigationBar
            Navigationlinks={AdminLinks}
            isNavigationBarVisible={isNavigationBarVisible}
            toggleNavigationBar={toggleNavigationBar}
          />
        </div>
        <main className='2xl:bg-[red] bg-[#F5F7F9] p-[32px] mt-[20px] rounded-[8px] mr-[10px] w-[100%]'>
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
