/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DensityMedium,
  KeyboardArrowDown,
  KeyboardArrowLeft
} from '@mui/icons-material';
import React, { useState } from 'react';

/**
 * Navigation bar item.
 *
 * @typedef {Object} INavigationBar
 * @property {'primary' | 'secondary'} [type] - Type of navigation bar.
 * @property {number} id - Unique identifier for the navigation bar item.
 * @property {string} [name] - Name of the navigation bar item.
 * @property {string} [to] - URL to navigate to.
 * @property {string} [icon] - Icon for the navigation bar item.
 * @property {INavigationBar[]} [subMenu] - Submenu items for the navigation bar.
 */
interface INavigationBar {
  type?: 'primary' | 'secondary';
  id: number;
  name?: string;
  to?: string;
  icon?: string;
  subMenu?: INavigationBar[];

}

export interface NavigationBarProps {
  Navigationlinks: any;
  sliceLength?: number;
}

/**
 * User information.
 *
 * @typeof {Object} IUserInfo
 * @property {string} name - User's name.
 * @property {string} designation - User's designation.
 * @property {string} avatar - URL of the user's avatar.
 */
interface IUserType {
  name: string;
  designation: string;
  avatar: string;
}

/**
 * UserType component.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {IUserInfo} props.userInfo - Information about the user.
 * @param {() => void} props.handleToggleNavigationBar - Function to handle toggling the navigation bar.
 * @returns {ReactElement} React component representing a user type.
 */

const UserType: React.FC<{
  userInfo: IUserType;
  handleToggleNavigationBar: () => void;
}> = ({ userInfo, handleToggleNavigationBar }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          height: '40px',
          width: '216px',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: '30px',
          padding: '6px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '205px'
          }}
        >
          <div
            style={{
              width: '200px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <div>
              <img
                src={userInfo.avatar}
                alt="happyavatar"
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div
                style={{
                  color: '#050505',
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '12px'
                }}
              >
                {userInfo.name}
              </div>
              <div
                style={{
                  color: '#828DA9',
                  fontSize: '10px',
                  fontWeight: '600',
                  lineHeight: '10px',
                  marginLeft: '8px'
                }}
                className="uppercase"
              >
                {userInfo.designation}
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: '#e8eaed',
                height: '24px',
                width: '24px',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={handleToggleNavigationBar}
            >
              <KeyboardArrowLeft
                style={{ color: '#CCD0DC', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * NavigationBarItem component.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {INavigationBar} props.item - Navigation bar item.
 * @param {boolean} props.isActive - Indicates whether the item is active.
 * @param {() => void} props.onClick - Function to handle item click.
 * @returns {ReactElement} React component representing a navigation bar item.
 */

const NavigationBarItem: React.FC<{
  item: INavigationBar;
  isActive: boolean;
  onClick: () => void;

}> = ({ item, isActive, onClick }) => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const [activeSubMenuItemId, setActiveSubMenuItemId] = useState<number | null>(
    null
  );

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
        padding: '9px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: backgroundColor
      }}
      className="flex flex-col "
    >
      <div
        className="flex gap-[10px]"
        style={{ alignItems: 'center', justifyContent: 'start' }}
      >
        <div
          style={{
            height: '24px',
            width: '24px',
            backgroundColor: isActive ? '#D2F69E' : 'transparent',
            borderRadius: isActive ? '4px' : '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span>
            <img
              style={{ height: '16px', width: '16px' }}
              src={item.icon}
              alt={item.name}
            />
          </span>
        </div>
        <div
          className="flex gap-[70px]"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div>
            <span
              style={{
                color: isActive ? '#050505' : '#49526A',
                fontSize: '14px',
                lineHeight: '12px'
              }}
            >
              {item.name}
            </span>
          </div>

          {item.subMenu && (
            <div onClick={handleSubMenuToggle} style={{ cursor: 'pointer' }}>
              {isSubMenuVisible ? (
                <KeyboardArrowLeft style={{ color: '#CCD0DC' }} />
              ) : (
                <KeyboardArrowDown style={{ color: '#CCD0DC' }} />
              )}
            </div>
          )}
        </div>
      </div>

      {isSubMenuVisible &&
        item.subMenu &&
        item.subMenu?.map((subItem) => (
          <div
            key={subItem.id}
            onClick={() => setActiveSubMenuItemId(subItem.id)}
            style={{
              background:
                activeSubMenuItemId === subItem.id ? '#F6FDEC' : 'white',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '9px',
              borderRadius: activeSubMenuItemId === subItem.id ? '10px' : '0px'
            }}
            className="gap-[10px]"
          >
            <span
              style={{
                height: '24px',
                width: '24px',
                backgroundColor:
                  activeSubMenuItemId === subItem.id
                    ? '#D2F69E'
                    : 'transparent',
                borderRadius: activeSubMenuItemId === subItem.id ? '4px' : '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                style={{ height: '16px', width: '16px' }}
                src={subItem.icon}
                alt={subItem.name}
              />
            </span>
            <span
              style={{
                color:
                  activeSubMenuItemId === subItem.id ? '#050505' : '#49526A',
                fontSize: '14px',
                lineHeight: '12px'
              }}
            >
              {subItem.name}
            </span>
          </div>
        ))}
    </div>
  );
};

/**
 * NavigationBar component.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {INavigationBar[]} props.Navigationlinks - Array of navigation bar items.
 * @returns {ReactElement} React component representing a navigation bar.
 */
const NavigationBar: React.FC<NavigationBarProps> = ({
  Navigationlinks,
  sliceLength = 0
}) => {
  console.log(Navigationlinks, 'kkkkkkkk');

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(true);

  const handleToggleNavigationBar = () => {
    setIsNavigationBarVisible(!isNavigationBarVisible);
  };

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo] = useState({
    name: 'John Okor',
    designation: 'D. Manager',
    avatar: '../../../public/assets/avatar.png'
  });

  const effectiveSliceLength =
    sliceLength > 0 ? sliceLength : Navigationlinks.length;

  return (
    <>
      {isNavigationBarVisible ? (
        <div
          className="fixed "
          style={{
            width: '20%',
            padding: '18px',
            overflowY: 'auto',

          }}
        >
          <div>
            <UserType
              userInfo={userInfo}
              handleToggleNavigationBar={handleToggleNavigationBar}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '14px',
              background: 'white',
              width: '216px',
              marginTop: '16px',
              padding: '8px'
            }}
          >
            {Navigationlinks.slice(0, effectiveSliceLength).map((item: INavigationBar) => (
              <NavigationBarItem
                key={item.id}
                item={item}
                isActive={activeItemId === item.id}
                onClick={() => handleItemClick(item.id)}
              />
            ))}
          </div>

          {sliceLength > 0 && sliceLength < Navigationlinks.length && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '14px',
                background: 'white',
                width: '216px',
                marginTop: '16px',
                padding: '8px'
              }}
            >
              {Navigationlinks.slice(
                effectiveSliceLength,
                Navigationlinks.length
              ).map((item: INavigationBar) => (
                <NavigationBarItem
                  key={item.id}
                  item={item}
                  isActive={activeItemId === item.id}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </div>
          )}
        </div>
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
            padding: '20px'
          }}
          onClick={handleToggleNavigationBar}
        >
          <DensityMedium
            style={{ color: '#CCD0DC', height: '18px', width: '18px' }}
          />
        </div>
      )}
    </>
  );
};

export default NavigationBar;
