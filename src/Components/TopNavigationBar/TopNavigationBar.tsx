import { GppMaybeOutlined, NotificationImportantOutlined, PowerSettingsNewOutlined } from '@mui/icons-material';
import Logo from '../../assets/images/CompanyLogo.png';
import Notification from '../NotificationComponent/Notification';
import SearchInput from '../Searchinput/SearchInput';

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

    const reminderNotifications = [
        { title: 'Meeting Reminder', date: '2024-03-31', content: 'Reminder content 1' },
        { title: 'Meeting Reminder', date: '2024-03-31', content: 'Reminder content 1' },
        { title: 'Meeting Reminder', date: '2024-03-31', content: 'Reminder content 1' },

    ];

    const handleSearch = (query: unknown) => {
        console.log('User searched for:', query);
    };


    return (

        <div className="h-[56px] w-[100%] flex items-center bg-[#FFFFFF] justify-between p-[18px]">
            <div>
                <img src={Logo} alt='companylogo' className='w-[32px] h-[32px] rounded-[50%]' />
            </div>
            <div className='flex gap-[16px]'>
                <div>
                    <SearchInput
                        onSearch={handleSearch}
                        className="ml-4 w-[450px]"
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
                        count={reminderNotifications.length}
                        headerTitle="Reminders"
                        notifications={reminderNotifications}
                        renderIcon={() => <div><PowerSettingsNewOutlined style={{ fontSize: 'medium' }} /></div>}
                    />
                </div>
            </div>
        </div>
    )

}
export default TopNavigationBar