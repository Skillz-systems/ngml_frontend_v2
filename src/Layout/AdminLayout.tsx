
import React, {useState, type ComponentType } from 'react';
import NavigationBar from '../Components/NavigationMenu/NavigationBar';
import { Navigationlinks } from '../Components/NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

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
    <div className='flex w-full h-screen gradient'>
      <div className={`w-[260px] ${isNavigationBarVisible ? '' : 'hidden'}`} >
        <NavigationBar
          Navigationlinks={Navigationlinks}
          isNavigationBarVisible={isNavigationBarVisible}
          toggleNavigationBar={toggleNavigationBar}
        />
      </div>

      <div className='flex-1 flex'>
        <div
          className='p-2 cursor-pointer h-[50px] rounded-[50%] border-2 border-500 mt-[20px] '
          onClick={toggleNavigationBar}
          style={{ minWidth: '50px', visibility: isNavigationBarVisible ? 'hidden' : 'visible' }}

        >
          <DensityMedium className='text-[#EAF4CD] h-[18px] w-[18px]' />
        </div>

        <main className='bg-[#EAF4CD] p-[32px] mt-[20px] rounded-[8px] flex-1 mr-[10px]'>
          <Component {...otherProps} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
