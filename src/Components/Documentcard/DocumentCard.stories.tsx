import { Meta, StoryObj } from '@storybook/react';
import DocumentCard from './DocumentCard';
import copy from './assets/images/png-icons/Copy.png'
import report from './assets/images/png-icons/Report.png'
import customer from './assets/images/png-icons/Customer.png'

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
    icon: <img src={copy} alt='icon' />,
    title: 'Document Title',
    subtitle: 'Document Subtitle',
  },
};

export const WithLink: Story = {
  args: {

    type: 'withLink',
    icon: <img src={report} alt='icon' />,
    title: 'Document Title',
    linkText: 'Link Text',
    linkText2: 'Link Text 2',
  },
};

export const WithReport: Story = {
  args: {
    type: 'withReport',
    icon: <img src={customer} alt='icon' />,
    title: 'Document Title',
  },
};