import { Meta, StoryObj } from '@storybook/react';
import FileUploadInput from './FileUploadInput';

const meta: Meta = {
  title: 'Components/FileUploadInput',
  component: FileUploadInput,
  parameters: {
    layout: 'centered'
  }, tags: ['autodocs'],
  argTypes: {
    maxSizeMB: { control: 'number' },
    required: { control: 'boolean' },
    title: { control: 'text' },
    fileType: { control: 'array' },
  },

} satisfies Meta<typeof FileUploadInput>;

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

export const Default: Story = {
  args: {

    maxSizeMB: 5,
    title: 'Upload File',
    fileType: ['image/jpeg', 'image/png', 'application/pdf'],
  },
};
