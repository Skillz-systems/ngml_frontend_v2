import { Meta, StoryObj } from '@storybook/react';
import DocumentCard from './DocumentCard';

const meta: Meta = {
  title: 'Components/DocumentCard',
  component: DocumentCard,
  parameters: {
    layout: 'centered'
  }, tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['withoutLink', 'withLink', 'withReport'],
      },
    },
    icon: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    linkText: { control: 'text' },
    linkText2: { control: 'text' },
  },

} satisfies Meta<typeof DocumentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutLink: Story = {
  args: {
    type: 'withoutLink',
    icon: "/assets/png-icons/Reports.png",
    title: 'Document Title',
    subtitle: 'Document Subtitle',
  },
};

export const WithLink: Story = {
  args: {

    type: 'withLink',
    icon: "/assets/png-icons/Reports.png",
    title: 'Document Title',
    linkText: 'Link Text',
    linkText2: 'Link Text 2',
  },
};

export const WithReport: Story = {
  args: {
    type: 'withReport',
    icon: "/assets/png-icons/Customers.png",
    title: 'Document Title',
  },
};