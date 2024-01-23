import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import React, { useState } from 'react';

/**
 * Represents a sub-menu item in the navigation bar.
 */
interface SubMenuItem {
    label?: string;
    icon?: string;
    reference?: string;
}

/**
 * Represents the properties for the NavigationBar component.
 */
export interface NavigationBarProps {
    type?: 'primary' | 'secondary' | 'tertiary'
    upLabel?: string
    downLabel?: string
    width?: string
    height?: string
    fontSize?: string
    fontWeight?: string
    radius?: string
    padding?: string
    marginBottom?: string
    reference?: string
    onClick?: () => void
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    iconHeight?: string
    iconWidth?: string
    iconColor?: string
    iconBackgroundColor?: string
    subMenu?: SubMenuItem[]
}

/**
 * Functional component representing a navigation bar.
 * @param {NavigationBarProps} props - The properties for the NavigationBar component.
 */
const NavigationBar: React.FC<NavigationBarProps> = ({
    type,
    upLabel,
    downLabel,
    width,
    height,
    padding,
    fontSize,
    fontWeight,
    radius,
    leftIcon,
    rightIcon,
    onClick,
    iconHeight,
    iconWidth,
    iconColor,
    iconBackgroundColor,
    subMenu,
}: NavigationBarProps) => {
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    /**
     * Handles mouse enter event.
     */
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    /**
     * Handles mouse leave event.
     */
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    /**
     * Handles click event.
     */
    const handleClick = () => {
        setIsActive(!isActive);
    };

    /**
     * Handles sub-menu toggle event.
     */
    const handleSubMenuToggle = () => {
        setSubMenuVisible(!isSubMenuVisible);
    };

    /**
     * Renders the sub-menu items.
     * @returns {React.ReactNode} - The rendered sub-menu items.
     */
    const renderSubMenu = (): React.ReactNode => {
        if (!subMenu || subMenu.length === 0) {
            return null;
        }

        return (
            <div style={{ paddingLeft: '20px' }}>
                {subMenu.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => console.log(`SubMenu clicked: ${item.label}`)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        );
    };

    /**
     * Gets the styles for the navigation bar based on its type.
     * @returns {React.CSSProperties} - The styles for the navigation bar.
     */
    const getNavigationBarStyles = (): React.CSSProperties => {
        const primaryStyles = {
            backgroundColor: isActive ? 'lemonchiffon' : isHovered ? '#F6FDEC' : '#F9FAFB',
            color: isActive ? '#F6FDEC' : isHovered ? '0E0E0D' : '#0E0E0D',
            cursor: 'auto',
        };

        const secondaryStyles = {
            backgroundColor: isActive ? 'lemonchiffon' : isHovered ? '#F6FDEC' : '#F9FAFB',
            color: isActive ? '#F6FDEC' : isHovered ? '0E0E0D' : '#0E0E0D',
            cursor: 'pointer',
        };

        const tertiaryStyles = {
            backgroundColor: isActive ? 'lemonchiffon' : isHovered ? '#F6FDEC' : '#F9FAFB',
            color: isActive ? '#F6FDEC' : isHovered ? '0E0E0D' : '#0E0E0D',
            cursor: 'pointer',
        };

        switch (type) {
            case 'primary':
                return { ...primaryStyles, width, height, fontSize, fontWeight, padding, borderRadius: radius };
            case 'secondary':
                return { ...secondaryStyles, width, height, fontSize, fontWeight, borderRadius: radius, padding, };
            case 'tertiary':
                return { ...tertiaryStyles, width, height, fontSize, fontWeight, borderRadius: radius, padding, };

            default:
                return { backgroundColor: 'gray', color: 'white' };
        }
    };

    return (
        <div style={{ marginLeft: '10px' }}>
            <div
                onClick={() => {
                    onClick && onClick();
                    handleClick();
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    ...getNavigationBarStyles(),
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {leftIcon && (
                        <div
                            style={{
                                marginRight: '8px',
                                height: iconHeight,
                                width: iconWidth,
                                color: iconColor,
                                backgroundColor: iconBackgroundColor,
                            }}
                        >
                            {leftIcon}
                        </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div> {upLabel}</div>
                        <div>{downLabel}</div>
                    </div>
                </div>

                {rightIcon && (
                    <div
                        style={{
                            marginLeft: '8px',
                            height: iconHeight,
                            width: iconWidth,
                            color: iconColor,
                            backgroundColor: iconBackgroundColor,
                        }}
                    >
                        {rightIcon}
                    </div>
                )}

                {subMenu && (
                    <div
                        onClick={handleSubMenuToggle}
                        style={{ cursor: 'pointer' }}
                    >
                        {isSubMenuVisible ? <div><KeyboardArrowUp /></div> : <div><KeyboardArrowDown /></div>}
                    </div>
                )}
            </div>
            {isSubMenuVisible && renderSubMenu()}
        </div>
    );
};

export default NavigationBar;
