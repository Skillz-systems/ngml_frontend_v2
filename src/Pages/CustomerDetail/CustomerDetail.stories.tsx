import { Meta, StoryObj } from '@storybook/react';
import CustomerDetail from './CustomerDetail';

const meta: Meta = {
    title: 'Pages/CustomerDetail',
    component: CustomerDetail,
    parameters: {
        layout: 'centered'
    }, tags: ['autodocs'],
    argTypes: {},

} satisfies Meta<typeof CustomerDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
