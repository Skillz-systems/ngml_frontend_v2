import { Meta, StoryObj } from '@storybook/react';
import CustomerLayout from './CustomerLayout';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta = {
    title: 'Pages/CustomerLayout',
    component: CustomerLayout,
    parameters: {
    }, tags: ['autodocs'],
    argTypes: {},

} satisfies Meta<typeof CustomerLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <MemoryRouter>
            <CustomerLayout />
        </MemoryRouter>
    ), 
};
