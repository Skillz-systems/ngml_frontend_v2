import type { Meta, StoryObj } from '@storybook/react';
import DateCard from './DateCard';


const meta = {

  title: 'Components/DateCard',
  component: DateCard,
  parameters: {
    layout: 'start',
  },
  tags: ['autodocs'],

  argTypes: {
    cardType: { control: 'select', options: ['primary', 'secondary'] },
    day: { control: 'number' },
    week: { control: 'text' },
    month: { control: 'text' },
    isActive: { control: 'boolean' },
    onToggleActive: { action: 'clicked' },
    icon: { control: 'text' },
  },

} satisfies Meta<typeof DateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

    cardType: 'primary',
    day: 10,
    week: 'Fri',
    month: 'June',
    isActive: false,
    onToggleActive: () => { },
  }
};

export const Secondary: Story = {
  args: {

    cardType: 'secondary',
    day: 10,
    week: 'Fri',
    month: 'June',
    isActive: true,
    onToggleActive: () => { },
  }
};