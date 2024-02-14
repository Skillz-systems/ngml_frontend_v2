import { Meta, StoryObj } from '@storybook/react';
import StatisticRectangleCard from './StatisticRectangleCard';

const meta: Meta = {
  title: 'Components/StatisticRectangleCard',
  component: StatisticRectangleCard,
  parameters: {
    layout: 'centered'
  }, tags: ['autodocs'],
  argTypes: {
    icon: { control: 'object' },
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
  value: '42',
  backgroundColor: 'bg-gray-300',
  valueColor: 'text-white',
  color: 'text-blue-600',
  size: 'w-96',
  iconSize: '10px'
},
};