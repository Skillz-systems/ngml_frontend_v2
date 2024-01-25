
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import React, { useState } from 'react';

interface INavigationBar {
  type?: 'primary' | 'secondary' ;
  id: number;
  name?: string;
  to?: string;
  icon?: string;
  subMenu?: INavigationBar[];
}

export interface NavigationBarProps {
  Navigationlinks: INavigationBar[];
}

const NavigationBarItem: React.FC<{ item: INavigationBar; isActive: boolean; onClick: () => void }> = ({
  item,
  isActive,
  onClick,
}) => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const [activeSubMenuItemId, setActiveSubMenuItemId] = useState<number | null>(null);

  const backgroundColor = isActive
    ? item.type === 'primary'
      ? '#F6FDEC'
      : item.type === 'secondary'
        ? '#F9FAFB'
        : '#F9FAFB'
    : 'white';




  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        columnGap: '16px',
        padding: '8px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: backgroundColor
      }}
      className="flex flex-col "
    >
      <div className="flex gap-[10px]" style={{ alignItems: 'center', justifyContent: 'start' }}>
        <div
          style={{
            height: '24px',
            width: '24px',
            backgroundColor: isActive ? '#D2F69E' : 'transparent',
            borderRadius: isActive ? '4px' : '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <span >
            <img style={{ height: '16px', width: '16px', color: 'red' }} src={item.icon} alt={item.name} />
          </span>
        </div>
        <div className="flex gap-[70px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <span
              style={{
                color: isActive ? '#050505' : '#49526A',
                fontSize: '14px',
                lineHeight: '12px'
              }}>{item.name}</span>
          </div>

          {item.subMenu && (
            <div onClick={handleSubMenuToggle} style={{ cursor: 'pointer' }}>
              {isSubMenuVisible ? <KeyboardArrowUp style={{ color: '#CCD0DC' }} />
                : <KeyboardArrowDown style={{ color: '#CCD0DC' }} />}
            </div>
          )}
        </div>
      </div>

      {isSubMenuVisible && item.subMenu && item.subMenu?.map(subItem =>
        <div key={subItem.id} onClick={() => setActiveSubMenuItemId(subItem.id)}
          style={{
            background: activeSubMenuItemId === subItem.id ? '#F6FDEC' : 'white',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: activeSubMenuItemId === subItem.id ? '10px' : '0px',
          }}
          className='gap-[10px]'
        >
          <span
            style={{
              height: '24px',
              width: '24px',
              backgroundColor: activeSubMenuItemId === subItem.id ? '#D2F69E' : 'transparent',
              borderRadius: activeSubMenuItemId === subItem.id ? '4px' : '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <img style={{ height: '16px', width: '16px' }} src={subItem.icon} alt={subItem.name} />
          </span>
          <span
            style={{
              color: activeSubMenuItemId === subItem.id ? '#050505' : '#49526A',
              fontSize: '14px',
              lineHeight: '12px'
            }}>{subItem.name}</span>
        </div>)}
    </div>
  );
};

const NavigationBar: React.FC<NavigationBarProps> = ({ Navigationlinks }) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div
      className="fixed top-10 h-screen"
      style={{
        width: '100%',
        padding: '18px',
        overflowY: 'auto',
        marginTop: '32px',
        marginLeft: '16px',
        backgroundColor: '#F9FAFB',
      }}
    >
      --------var-------
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '14px',
          background: 'white',
          width: '216px',
          marginTop: '30px',
          padding: '8px',
        }}
      >
        {Navigationlinks.map((item) => (
          <NavigationBarItem
            key={item.id}
            item={item}
            isActive={activeItemId === item.id}

            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
