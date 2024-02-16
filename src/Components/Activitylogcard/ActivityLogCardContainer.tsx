import { format } from 'date-fns';

// Import the icon from your assets
import Warning from '/assets/png-icons/Warning.png';

// Import the ActivityLogCard component
import ActivityLogCard from './ActivityLogCard'; // Adjust the path as needed

const ActivityLogCardContainer = () => {
    const activityData = [
        {
            title: 'EOI REQUEST',
            text: 'Alberta Corporation Limited just sent in an EOI Request',
            dateTime: new Date(),

        },
        {
            title: 'EOI REQUEST',
            text: 'Ayolla Obasanjo just approved the Aberta Corporation EOI Request',
            dateTime: new Date(),
        },
        {
            title: 'SITE VISIT',
            text: 'Johnson Alaba has updated the site survey findings.',
            dateTime: new Date(),
        },
        {
            title: 'SITE VISIT',
            text: 'GET Technologies has picked a survey date.',
            dateTime: new Date(),
        },
        {
            title: 'DCQ',
            text: 'Some description for activity 2',
            dateTime: new Date(),
        },
    ];

    return (
        <div className="flex flex-col w-[550px] border-2 rounded-[10px] overflow-hidden">
            <div className="flex items-center justify-between mb-4 bg-gray-100 p-2">
                <h2 className="text-xl font-[400] text-gray-400">Recent Activity</h2>
                <img src={Warning} alt='warning' className="w-6 h-6 text-gray-600" />
            </div>
            {/* Iterate over activity data and render ActivityLogCard for each */}
            <div className="flex flex-col gap-2 px-2 pb-20">
            {activityData.map((activity, index) => (
                <ActivityLogCard
                    key={index}
                    title={activity.title}
                    text={activity.text}
                    dateTime={activity.dateTime}
                // Pass button JSX element if needed
                />
            ))}
        </div>
        </div>
    );
};

export default ActivityLogCardContainer;