import React, { useState } from 'react';
import Notification from './Notification';
import { ReactNode } from 'react';


/**
 * NotificationAction component represents an action with a notification icon.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.notificationIcon - The React node representing the notification icon.
 *
 * @returns {JSX.Element} The rendered NotificationAction component.
 */

interface NotificationActionProps {
    notificationIcon: ReactNode;
}

const NotificationAction: React.FC<NotificationActionProps> = ({ notificationIcon }) => {
    const [notificationCount] = useState(3);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    /**
    * Handles the click event on the notification icon.
    * Toggles the notification visibility.
    *
    * @function
    * @private
    */
    const handleNotificationClick = () => {
        setIsNotificationOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <div>
            <Notification
                count={notificationCount}
                onClick={handleNotificationClick}
                isOpen={isNotificationOpen}
                renderIcon={() => notificationIcon}
            />
        </div>
    );
};

export default NotificationAction;
