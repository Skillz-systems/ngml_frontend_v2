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
<<<<<<< HEAD
=======
};

// Story with a different logo
export const WithDifferentLogo = Template.bind({});
WithDifferentLogo.args = {
  children: <p>Content goes here</p>,
  logoSrc: 'assets/differentlogo.png',
  logoAlt: 'Different Logo',
};

// Story with loading state
export const LoadingState = Template.bind({});
LoadingState.args = {
  children: <p>for loading purpose</p>,
  isLoading: true,
};

// Story with error state
export const ErrorState = Template.bind({});
ErrorState.args = {
  children: <p>Just incase of errors</p>,
  error: 'Authentication failed',
>>>>>>> 3dbcd9b53a079db98c4e77539256f3a880edb537
};