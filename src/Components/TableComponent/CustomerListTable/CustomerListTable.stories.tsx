/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import CustomerListTable from './CustomerListTable';


const meta: Meta<typeof CustomerListTable> = {
    title: 'Tables/CustomerListTable',
    component: CustomerListTable,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultView: Story = {
};

export const WithFilteredData: Story = {
    decorators: [
        (Story) => {
            return (
                <div>
                    <Story />
                </div>
            );
        },
    ],
};

