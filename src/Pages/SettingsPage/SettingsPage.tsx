import { StatisticRectangleCard } from "@/Components";

const SettingsPage = () => {
    const cardData = [
        {
            title: 'Form Builder',
            link: '/admin/settings/formbuilder',
        },
        {
            title: 'Process Flow Builder',
            link: '/admin/settings/processflow',
        },
        {
            title: 'Route Builder',
            link: '/admin/settings/routebuilder',
        },
    ];

    return (
        <div>
            <div className='text-[30px] text-[#49526A] font-[700]'>Builders:</div>
            <div className="flex flex-col mt-6 gap-4 w-[100%] md:w-[50%]" >
                {cardData.map((card, index) => (
                    <StatisticRectangleCard
                        key={index}
                        title={card.title}
                        to={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default SettingsPage;
