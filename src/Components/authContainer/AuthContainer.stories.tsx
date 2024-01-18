import { Meta, Story } from '@storybook/react';
import AuthContainer, { AuthContainerProps } from '../Authcontainer/AuthContainer';

export default {
  title: 'AuthContainer',
  component: AuthContainer,
} as Meta;

const Template: Story<AuthContainerProps> = (args) => <AuthContainer {...args} />;

// Default story
export const Default: Story =({});
Default.args = {
  children: <p>Content goes here</p>,
};

// Story with custom authentication content
export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <>
      <h2>Welcome back!</h2>
      <p>Please enter your credentials.</p>
    </>
  ),
};

