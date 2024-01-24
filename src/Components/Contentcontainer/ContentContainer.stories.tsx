import type { Meta, StoryObj } from '@storybook/react';
import ContentContainer from './ContentContainer';

const meta = {
  title: 'ContentContainer',
  component: ContentContainer,

  argTypes: {
    type: { control: 'select', options: ['translucent', 'white', 'dashes', 'solid'] },
    borderRadius: { control: 'number' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta<typeof ContentContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Translucent: Story = {
  args: {
    type: 'translucent',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    children: <p>Content goes here</p>,
  },
};

export const White: Story = {
  args: {
    type: 'white',
    borderRadius: 5,
    width: '80%',
    height: '150px',
    children: <p>Content goes here</p>,
  },
};

export const Dashes: Story = {
  args: {
    type: 'dashes',
    borderRadius: 8,
    width: '200px',
    height: '100%',
    children: <p>Content goes here</p>,
  },
};

export const Solid: Story = {
  args: {
    type: 'solid',
    borderRadius: 0,
    width: '100%',
    height: '100%',
    children: <p>Content goes here</p>,
  },
};