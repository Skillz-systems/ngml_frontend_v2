/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, type ComponentType } from 'react';
import NavigationBar from '../NavigationMenu/NavigationBar';
import { Navigationlinks } from '../NavigationMenu/Navigationlinks';
import { DensityMedium } from '@mui/icons-material';

interface SupplierLayoutProps {
  Component: ComponentType<any>;
  title: string;
}

const SupplierLayout: React.FC<SupplierLayoutProps> = ({ Component, title, ...otherProps }) => {
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const toggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  return (
    <>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh', background: 'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)' }}>
          {isNavigationBarVisible ? (
            <>
              <NavigationBar
                Navigationlinks={Navigationlinks}
                isNavigationBarVisible={isNavigationBarVisible}
                toggleNavigationBar={toggleNavigationBar}
              />
              <main
                style={{
                  width: '100%',
                  overflowY: 'auto',
                  marginLeft: '260px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  padding: '32px',
                  marginTop: '20px',
                  borderRadius: '8px',
                  border: '2px solid black',
                }}
              >
                <Component {...otherProps} style={{ overflowY: 'auto' }} />
              </main>
            </>
          ) : (
            <div
              style={{
                border: '2px solid #e8eaed',
                height: '24px',
                width: '24px',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                cursor: 'pointer',
              }}
              onClick={toggleNavigationBar}
            >
              <DensityMedium
                style={{ color: '#CCD0DC', height: '18px', width: '18px' }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SupplierLayout;
