import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


/**
 * Notification component displays a notification icon with a count and additional details when clicked.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {number} props.count - The count to be displayed on the notification icon.
 * @param {Function} props.onClick - Callback function to be executed when the notification icon is clicked.
 * @param {boolean} props.isOpen - Flag indicating whether the notification details are currently open.
 * @param {Function} props.renderIcon - Function returning the React node to be rendered as the notification icon.
 *
 * @returns {JSX.Element} The rendered Notification component.
 */

interface NotificationProps {
    count: number;
    onClick: () => void;
    isOpen: boolean;
    renderIcon: () => React.ReactNode;

}

const Notification: React.FC<NotificationProps> = ({ count, onClick, isOpen, renderIcon }) => {
    const notificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node) &&
                event.target !== notificationRef.current.querySelector('.notification-icon') &&
                !notificationRef.current.contains(event.target as Node)
            ) {
                onClick();
            }
        };
    
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [onClick]);

    const handleIconClick = () => {
        onClick();
    };

    return (
        <div ref={notificationRef}  data-testid='notification-icon' >
            <div className='notification-icon'
                style={{
                    border: '1px solid #CCD0DC',
                    height: '32px',
                    width: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100%',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                    backgroundColor: isOpen ? '#E0E5EC' : 'transparent',
                }}
                onClick={handleIconClick}
            >
                {renderIcon && (
                    <div style={{
                        color: '#828DA9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {renderIcon()}
                    </div>
                )}
                <div>
                    <span className='notification-count'>{count}</span>
                </div>
            </div>
            {isOpen && (
                <div
                    style={{
                        fontSize: '12px',
                        color: '#828DA9',
                        border: '2px solid red',
                        width: '120px',
                        height: '90px',
                        marginTop: '20px'
                    }}>
                    <p>General Meeting</p>
                    <p>MD meeting</p>
                    <p>Board meeting</p>
                </div>
            )}
        </div>
    );
};

/**
 * PropTypes for the Notification component.
 *
 * @type {Object}
 * @property {number} count - The count to be displayed on the notification icon.
 * @property {Function} onClick - Callback function to be executed when the notification icon is clicked.
 * @property {boolean} isOpen - Flag indicating whether the notification details are currently open.
 * @property {Function} renderIcon - Function returning the React node to be rendered as the notification icon.
 */

Notification.propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    renderIcon: PropTypes.func.isRequired,

};

export default Notification;
