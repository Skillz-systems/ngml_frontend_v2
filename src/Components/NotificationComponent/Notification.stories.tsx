import type { Meta, StoryObj } from '@storybook/react';
import Notification from './Notification';
import { NotificationImportantOutlined } from '@mui/icons-material';

const meta = {

    title: 'Components/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        count: { control: 'number' },
        onClick: { action: 'clicked' },
        isOpen: { control: 'boolean' },
        renderIcon: { control: null },
      },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>; 


export const Sample: Story = {
    args: {
        count: 3,
        isOpen: false,
        renderIcon: () => <div><NotificationImportantOutlined /></div>,

    },
}





