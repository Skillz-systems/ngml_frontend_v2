/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ComponentType } from 'react'
import NavigationBar from '../NavigationMenu/NavigationBar'
import { Navigationlinks } from '../NavigationMenu/Navigationlinks'



interface InternalLayoutProps {
  Component: ComponentType<any>
  title: string

}

const ClientLayout: React.FC<InternalLayoutProps> = ({ Component, title, ...otherProps }) => (
  <>
    <div >
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh', background: 'linear-gradient(108deg, #AAE4C5 -6.77%, #EFEC80 45.65%, #D2F69E 108.92%)' }}>
        <NavigationBar Navigationlinks={Navigationlinks} />
        <main
          style={{
            width: '100%',
            overflowY: 'auto',
            marginLeft: '260px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: '32px',
            marginTop: '20px',
            borderRadius: '8px'

          }}
        >
          <Component {...otherProps} style={{ overflowY: 'auto' }} />
        </main>
      </div>
    </div>
  </>
);


export default ClientLayout
