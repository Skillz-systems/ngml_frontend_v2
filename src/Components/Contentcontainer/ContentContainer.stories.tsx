import type { Meta, StoryObj } from '@storybook/react';
import ContentContainer from './ContentContainer';

const meta: Meta = {
  title: 'Components/ContentContainer',
  component: ContentContainer,

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['translucent', 'white', 'dashes', 'solid'],
      },
    },
    radius: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    type: 'solid',
    radius: '0',
    width: '100%',
    height: '100%',
  },
};

export const Translucent: Story = {
  args: {
    type: 'translucent',
    radius: '10',
    width: '100%',
    height: '100%',
  },
};

export const White: Story = {
  args: {
    type: 'white',
    radius: '20',
    width: '100%',
    height: '100%',
  },
};

export const Dashes: Story = {
  args: {
    type: 'dashes',
    radius: '30',
    width: '100%',
    height: '100%',
  },
};