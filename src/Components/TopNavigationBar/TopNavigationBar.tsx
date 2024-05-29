import { GppMaybeOutlined, NotificationImportantOutlined, PowerSettingsNewOutlined } from '@mui/icons-material';
import images from '../../assets/index';
import { Notification, SearchInput  } from '../../Components/index';

/**
 * Represents the top navigation bar of the application.
 * It includes the company logo, a search input, and three types of notifications:
 * messages, alerts, and reminders.
 *
 * Each notification type is displayed using the `Notification` component with specific data.
 */
const TopNavigationBar = () => {

    const messageNotifications = [
        { title: 'New Message', date: '2024-03-29', content: 'Message content 1' },
        { title: 'New Message', date: '2024-03-29', content: 'Message content 1' },
        { title: 'New Message', date: '2024-03-29', content: 'Message content 1' },
    ];

    const alertNotifications = [
        { title: 'System Alert', date: '2024-03-30', content: 'Alert content 1' },
        { title: 'System Alert', date: '2024-03-30', content: 'Alert content 1' },
        { title: 'System Alert', date: '2024-03-30', content: 'Alert content 1' },

    ];

    // const reminderNotifications = [
    //     { title: 'Meeting Reminder', date: '2024-03-31', content: 'Reminder content 1' },
    //     { title: 'Meeting Reminder', date: '2024-03-31', content: 'Reminder content 1' },
    //     { title: 'Meeting Reminder', date: '2024-03-31', content: 'Reminder content 1' },

    // ];

    /**
     * Handles the search functionality in the top navigation bar.
     * @param {unknown} query - The search query entered by the user.
     */
    const handleSearch = (query: unknown) => {
        console.log('User searched for:', query);
    };


    return (

        <div className=" w-full flex items-center bg-[#FFFFFF] justify-between px-5 py-3  fixed top-0 left-0 z-50">
            <img src={images.newLogo} alt='nnpc logo' />
            <div className='flex  gap-4 justify-end w-[100%]'>
                <SearchInput
                    onSearch={handleSearch}
                    className="w-28 sm:w-36 md:w-48 lg:w-56 xl:w-1/3"
                />
                <div className='flex gap-4'>
                    <Notification
                        count={messageNotifications.length}
                        headerTitle="Messages"
                        notifications={messageNotifications}
                        renderIcon={() => <div><GppMaybeOutlined style={{ fontSize: 'medium' }} /></div>}
                    />
                    <Notification
                        count={alertNotifications.length}
                        headerTitle="Alerts"
                        notifications={alertNotifications}
                        renderIcon={() => <div><NotificationImportantOutlined style={{ fontSize: 'medium' }} /></div>}
                    />
                    <Notification
                        // count={reminderNotifications.length}
                        // headerTitle="Reminders"
                        // notifications={reminderNotifications}
                        renderIcon={() => <div><PowerSettingsNewOutlined style={{ fontSize: 'medium' }} /></div>}
                    />
                </div>
            </div>
        </div>
    )

}
export default TopNavigationBar