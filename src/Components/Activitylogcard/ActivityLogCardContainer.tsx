import ActivityLogCard from './ActivityLogCard';

/**
 * Renders a container for displaying activity log cards.
 * @param {object} props - The props for the ActivityLogCardContainer component.
 * @param {string} props.size - The width of the container.
 * @param {string} props.heading - The heading text displayed at the top of the container.
 * @param {string} [props.icon] - The path to the icon image displayed next to the heading (optional).
 * @param {string} props.headingBgColor - The background color of the heading section.
 * @returns {JSX.Element} - The JSX element representing the ActivityLogCardContainer component.
 */

interface ActivityLogCardContainerProps {
    size: string;
    heading: string;
    icon?: string;
    headingBgColor: string;
}

const ActivityLogCardContainer: React.FC<ActivityLogCardContainerProps> = ({ size, heading, icon, headingBgColor }) => {
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
        <div style={{ width: size }}  className="flex flex-col border-2 rounded-[10px] overflow-hidden">
            <div className={`flex items-center justify-between mb-4 ${headingBgColor} p-2`}>
                <h2 className="text-xl font-[400] text-gray-400">{heading}</h2>
                {icon && <img src={icon} alt="icon" className="w-6 h-6 text-gray-600" />}
            </div>
    
            <div className="flex flex-col gap-2 px-2 pb-20">
                {activityData.map((activity, index) => (
                    <ActivityLogCard
                        key={index}
                        title={activity.title}
                        text={activity.text}
                        dateTime={activity.dateTime}
                    />
                ))}
            </div>
        </div>
    );
};

export default ActivityLogCardContainer;