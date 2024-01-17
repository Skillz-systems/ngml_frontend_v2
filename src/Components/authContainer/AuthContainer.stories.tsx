import { Meta, Story } from '@storybook/react';
import AuthContainer, { AuthContainerProps } from './AuthContainer';

export default {
  title: 'Components/AuthContainer',
  component: AuthContainer,
} as Meta;

const Template: Story<AuthContainerProps> = (args) => <AuthContainer {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  children: <p>Content goes here</p>,
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <>
      <h2>Welcome to the Authentication Page</h2>
      <p>Please log in to access your account.</p>
    </>
  ),
};

export const WithDifferentLogo = Template.bind({});
WithDifferentLogo.args = {
  children: <p>Content with a different logo</p>,
  logoSrc: "assets/customLogo.png", // Add a new prop if needed or customize as per your component
};

export const WithEmptyContent = Template.bind({});
WithEmptyContent.args = {
  children: null,
};

export const ResponsiveDesign = Template.bind({});
ResponsiveDesign.args = {
  children: <p>Responsive Content</p>,
};

// Add responsive design stories for different viewports
ResponsiveDesign.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
    viewports: {
      mobile1: {
        name: 'Mobile 1',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
    },
  },
};