import { Meta, StoryObj } from '@storybook/react';
import StatisticRectangleCard from './StatisticRectangleCard';

const meta: Meta = {
  title: 'Components/StatisticRectangleCard',
  component: StatisticRectangleCard,
  parameters: {
    layout: 'centered'
  }, tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    title: { control: 'text' },
    value: { control: 'text' },
    valueColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: { control: 'text' },
    iconBgColor: { control: 'color' },
    iconSize: { control: 'text' },
  },

} satisfies Meta<typeof StatisticRectangleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story={
args: {
    
},
};

export const Custom: Story={
args: {
    
    title: 'Custom Title',
    value: '50',
    backgroundColor: 'bg-blue-500',
    valueColor: 'text-white',
},
};

export const WithIcon: Story ={
args: {
  icon: <div>Icon</div>,
  iconBgColor: 'bg-red-500',
},
};