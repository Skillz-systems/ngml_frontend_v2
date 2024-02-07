import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import NotificationContents from './NotificationContents';

interface NotificationProps {
    count: number;
    headerTitle?: string;
    notifications: {
        title: string;
        date: string;
        content: string;
    }[];
    onClick?: () => void;
    renderIcon?: () => JSX.Element;
}

const Notification: React.FC<NotificationProps> = ({
    count,
    headerTitle,
    notifications = [],
    onClick,
    renderIcon,
}) => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node) &&
                event.target !== notificationRef.current.querySelector('.notification-icon') &&
                !notificationRef.current.contains(event.target as Node)
            ) {
                setIsNotificationOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleIconClick = () => {
        setIsNotificationOpen((prevIsOpen) => !prevIsOpen);
        if (onClick) {
            onClick(); 
        }
    };

    return (
        <div ref={notificationRef} data-testid='notification-icon'>
            <div
                className='notification-icon'
                style={{
                    position: 'relative', 
                    border:  isNotificationOpen ? '1px solid #005828' : '1px solid #CCD0DC',
                    height: '32px',
                    width: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100%',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                    backgroundColor: isNotificationOpen ? '#D2F69E' : 'transparent',
                }}
                onClick={handleIconClick}
            >
                {renderIcon && (
                    <div style={{
                        color: isNotificationOpen ?  '#005828' : '#828DA9',
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
            {isNotificationOpen && (
                <div>
                    <NotificationContents
                        headerTitle={headerTitle}
                        notifications={notifications}
                    />
                </div>
            )}
        </div>
    );
};

Notification.propTypes = {
    count: PropTypes.number.isRequired,
    headerTitle: PropTypes.string,
    onClick: PropTypes.func, 
    renderIcon: PropTypes.func, 
};

export default Notification;
