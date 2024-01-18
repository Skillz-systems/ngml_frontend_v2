import React from 'react'

/**
 * Badge Component
 * 
 * A custom dynamic badge component that supports various styles, icons, and customization options.
 * 
 * @component
 * @example
 * // Example of using the Badge component
 * <Badge 
 *   type="primary"
 *   label="Dangote sugar"
 *   width="100px"
 *   height="40px"
 *   fontSize="16px"
 *   radius="4px"
 *   fontWeight="bold"
 *   icon={<IconComponent />}
 *   iconHeight="20px"
 *   iconWidth="20px"
 *   iconColor="#333"
 *   columnGap="8px"
 *   onIconClick={() => console.log('Icon clicked')}
 * />
 *
 * @param {Object} props - The properties of the Badge component.
 * @param {string} props.type - The type of the badge. Possible values are "primary", "secondary", "transparent", "outline".
 * @param {string} [props.label] - The label or text to be displayed inside the badge.
 * @param {string} [props.width] - The width of the badge container.
 * @param {string} [props.height] - The height of the badge container.
 * @param {string} [props.fontSize] - The font size of the label text.
 * @param {string} [props.radius] - The border-radius of the badge container.
 * @param {string} [props.fontWeight] - The font weight of the label text.
 * @param {React.ReactNode} [props.icon] - The icon to be displayed alongside the label.
 * @param {string} [props.iconHeight] - The height of the icon.
 * @param {string} [props.iconWidth] - The width of the icon.
 * @param {string} [props.iconColor] - The color of the icon.
 * @param {string} [props.columnGap] - The column gap between the icon and the label.
 * @param {Function} [props.onIconClick] - The callback function to be executed when the icon is clicked.
 *
 * @returns {React.ReactNode} Returns the JSX representation of the Badge component.
 */

interface BadgeProps {
    type?: 'primary' | 'secondary' | 'transparent' | 'outline' 
    label?: string
    width?: string
    height?: string
    fontSize?: string
    fontWeight?: string
    radius?: string
    icon?: React.ReactNode
    iconHeight?: string
    iconWidth?: string
    iconColor?: string
    columnGap?: string
    onIconClick?: () => void;

}

const Badge: React.FC<BadgeProps> = ({
    type,
    label,
    width,
    height,
    fontSize,
    radius,
    fontWeight,
    icon,
    iconHeight,
    iconWidth,
    iconColor,
    columnGap,
    onIconClick
}: BadgeProps) => {

     /**
     * Get the inline styles based on the badge type.
     * 
     * @function
     * @private
     * @returns {React.CSSProperties} Returns the inline styles for the badge container.
     */

    const getBadgeStyles = (): React.CSSProperties => {
        switch (type) {
            case 'primary':
                return { backgroundColor: '#53B052', color: 'white', width, height, fontSize, borderRadius: radius, fontWeight }
            case 'secondary':
                return { backgroundColor: '#D2F69E', color: '#53B052', width, height, fontSize, borderRadius: radius, fontWeight }
            case 'transparent':
                return { backgroundColor: '#E2E4EB', color: '#49526A', width, height, fontSize, borderRadius: radius, fontWeight }
            case 'outline':
                return { border: '2px solid #DCDFE4', color: '#49526A', width, height, fontSize, borderRadius: radius, fontWeight }

            default:
                return { backgroundColor: 'green', color: 'white' }
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap, ...getBadgeStyles() }}        >
            {icon && (
                <div
                    style={{
                        marginRight: '4px',
                        height: iconHeight,
                        width: iconWidth,
                        color: iconColor,
                        cursor: onIconClick ? 'pointer' : 'auto' 
                    }}
                    onClick={onIconClick} 
                >
                    {icon}
                </div>
            )}     
            {label}
        </div>
    )
}

export default Badge;
