import { Meta, StoryObj } from '@storybook/react';
import CustomerPageLayout from './CustomerPageLayout';

const meta: Meta = {
    title: 'Pages/CustomerPageLayout',
    component: CustomerPageLayout,
    parameters: {
    }, tags: ['autodocs'],
    argTypes: {},

} satisfies Meta<typeof CustomerPageLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
