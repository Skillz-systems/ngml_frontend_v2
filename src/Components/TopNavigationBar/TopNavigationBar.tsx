import { GppMaybeOutlined, NotificationImportantOutlined, PowerSettingsNewOutlined } from '@mui/icons-material';
import Logo from '../../assets/images/CompanyLogo.png';
import Notification from '../NotificationComponent/Notification';
import SearchInput from '../Searchinput/SearchInput';


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

        <div className="h-[100%] w-[100%] gap-[10px] flex flex-col md:flex-row items-center bg-[#FFFFFF] justify-between p-[18px] ">
            <div className='w-[100%]'>
                <img src={Logo} alt='companylogo' className='w-[32px] h-[32px] rounded-[50%]' />
            </div>
            <div className='flex flex-col md:flex-row gap-[16px] justify-end w-[100%]'>
                <div className='w-[100%]'>
                    <SearchInput
                        onSearch={handleSearch}
                        className=" w-[100%] "
                    />
                </div>
                <div className='flex gap-[16px]'>
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