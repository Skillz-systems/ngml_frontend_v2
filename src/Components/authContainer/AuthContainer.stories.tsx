import { Meta, Story } from '@storybook/react';
import AuthContainer, { AuthContainerProps } from './AuthContainer'; // Adjust the path based on your project structure

const meta: Meta<AuthContainerProps> = {
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
type Story = Story<AuthContainerProps>;

const Template: Story = (args) => <AuthContainer {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  children: 'Content goes here',
};

export const WithCustomContent: Story = Template.bind({});
WithCustomContent.args = {
  children: (
    <>
      <h2>Welcome back!</h2>
      <p>Please enter your credentials.</p>
    </>
  ),
};