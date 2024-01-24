import { Meta, StoryObj } from '@storybook/react';
import AuthContainer from './AuthContainer';

const meta: Meta = {
  title: 'Components/AuthContainer',
  component: AuthContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AuthContainer>;

export const Default: Story = {
args: {
  children: 'Content goes here',
},
};
export const WithCustomContent: Story = {
args: {
  children: (
    <>
      <h2>Welcome back!</h2>
      <p>Please enter your credentials.</p>
    </>
  ),
}
}