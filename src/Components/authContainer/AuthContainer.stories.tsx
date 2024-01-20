import { Meta, Story } from '@storybook/react/types-6-0';
import AuthContainer, { AuthContainerProps } from './AuthContainer'; // Adjust the path based on your project structure

export default {
  title: 'AuthContainer',
  component: AuthContainer,
} as Meta;

const Template: Story<AuthContainerProps> = (args) => <AuthContainer {...args} />;

// Default story
export const Default = Template.bind({});
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
};