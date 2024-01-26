import { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';

const meta: Meta = {
    title: 'Components/CustomInput',
    component: CustomInput,
    argTypes: {
  
    },
  }satisfies Meta<typeof CustomInput>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {},
  };

export const TextInput: Story = {
args: {
  type: 'text',
  label: 'Text Input',
},
};

export const Checkbox: Story = {
args: {
  type: 'checkbox',
  label: 'Checkbox',
},
};

export const Radio: Story ={
args: {
  type: 'radio',
  label: 'Radio',
},
};

export const Select: Story ={
args: {
  type: 'select',
  label: 'Select',
},
};