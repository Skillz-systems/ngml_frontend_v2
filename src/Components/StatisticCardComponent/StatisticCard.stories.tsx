import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StatisticCard from './StatisticCard'; 
import { BuildOutlined } from '@mui/icons-material';

const YourIconComponent: React.FC = () => <span><BuildOutlined/></span>;

const statisticCardMeta: Meta<typeof StatisticCard> = {
    title: 'Components/StatisticCard',
    component: StatisticCard,
};

export default statisticCardMeta;

const Template: StoryObj<typeof StatisticCard> = {
    render: (args) => <StatisticCard {...args} />,
};

export const Primary: StoryObj<typeof StatisticCard> = {
    ...Template,
    args: {
        type: 'primary',
        title: 'Total Revenue',
        content: '12,129,243,990.00',
        icon: <YourIconComponent />,
        onSortChange: () => { },
        yearOptions: [2020, 2021, 2022],
        valueOptions: [
            { label: 'Revenue', value: 'revenue' },
            { label: 'Profit', value: 'profit' },
        ],
    },
};

export const Secondary: StoryObj<typeof StatisticCard> = {
    ...Template,
    args: {
        ...Primary.args,
        type: 'secondary',
        title: 'Total Consumption Volume ',
        content: '42,200,546,820.00',
    },
};
