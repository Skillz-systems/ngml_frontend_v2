import { Meta, StoryObj } from '@storybook/react';
import PasswordResetPage from './PasswordResetPage';

const meta: Meta = {
    title: 'Pages/PasswordResetPage',
    component: PasswordResetPage,
    parameters: {
    }, tags: ['autodocs'],
    argTypes: {},

} satisfies Meta<typeof PasswordResetPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
