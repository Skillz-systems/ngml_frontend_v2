import React from 'react';

interface NotificationProps {
    headerTitle?: string;
    notifications: {
        title: string;
        date: string;
        content: string;
    }[];
}

const NotificationContents: React.FC<NotificationProps> = ({ notifications, headerTitle }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#F6FDEC', height: '64px', width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '10px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                <header style={{ color: '#49526A', fontSize: '20px', fontWeight: '700', lineHeight: '25.1px' }}>{headerTitle}</header>
            </div>
            <div style={{ height: 'screen', width: '100%', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                {notifications.map((notification, index) => (
                    <div key={index} style={{ border: '1px solid #E2E4EB', width: '100%', height: '58px', marginBottom: '10px', rowGap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ backgroundColor: '#D2F69E', color: '#49526A', fontSize: '12px', fontWeight: '700', height: '16px', width: '88px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {notification.title}</div>
                            <div style={{ color: '#828DA9', fontSize: '10px', fontWeight: '500', }}> {notification.date}</div>
                        </div>
                        <div>
                            <div style={{ color: '#49526A', fontSize: '14px', fontWeight: '600', lineHeight: '14px' }}> {notification.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationContents;
