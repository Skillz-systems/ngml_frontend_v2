/* eslint-disable @typescript-eslint/no-unused-vars */
// Notification.tsx
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BallotRounded } from '@mui/icons-material';

interface NotificationProps {
    count: number;
    onClick: () => void;
}

const Notification: React.FC<NotificationProps> = ({ count, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div className="notification-container" ref={notificationRef}>
            <div className="notification-icon" onClick={onClick}>
                <span className="notification-count">{count}</span>
                <BallotRounded />
            </div>
            {isOpen && (
                <div className="notification-dropdown">
                    <p>Finish your task</p>
                    <p>Call your father</p>
                    <p>Send your mother money</p>
                </div>
            )}
        </div>
    );
};

Notification.propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Notification;
