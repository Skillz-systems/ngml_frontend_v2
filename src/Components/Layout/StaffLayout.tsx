


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ComponentType } from 'react'
import NavigationBar from '../NavigationMenu/NavigationBar'
import { Navigationlinks } from '../NavigationMenu/Navigationlinks'



interface StaffLayoutProps {
  Component: ComponentType<any>
  title: string

}

const StaffLayout: React.FC<StaffLayoutProps> = ({ Component, title, ...otherProps }) => (
  <>
    <div >
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh', background: '#EAEEF2' }}>
        <NavigationBar Navigationlinks={Navigationlinks} />
        <main
          style={{
            width: '100%',
            overflowY: 'auto',
            marginLeft: '260px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '32px',
            marginTop: '20px',
            borderRadius: '8px',
            border: '4px solid red'

          }}
        >
          <Component {...otherProps} style={{ overflowY: 'auto' }} />
        </main>
      </div>
    </div>
  </>
);


export default StaffLayout
