import { Meta, StoryObj } from '@storybook/react';
import AdminCustomerList from './AdminCustomerList';

const meta: Meta = {
    title: 'Pages/AdminCustomerList',
    component: AdminCustomerList,
    parameters: {
    }, tags: ['autodocs'],
    argTypes: {},

} satisfies Meta<typeof AdminCustomerList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        email: 'example@example.com',
    },
};
export const WithCustomers: Story = {
    args: {
        email: 'example@example.com',
    },
};
export const WithModalOpen: Story = {
    args: {
        email: 'example@example.com',
    },
};
