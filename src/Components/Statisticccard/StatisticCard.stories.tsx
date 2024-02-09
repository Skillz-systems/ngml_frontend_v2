import { StoryObj, Meta } from '@storybook/react';
import StatisticCard from './StatisticCard';

const meta: Meta = {
    title: 'Components/StatisticCard',
    component: StatisticCard,
    argTypes: {
      label: { control: 'text' },
        value: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
        primary: { control: 'select', options: ['true', 'false'] },
        labelSpan: { control: 'none' },
},

} satisfies Meta<typeof StatisticCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story={
args: {
  label: 'Label',
  value: 'Value',
},
};

export const Custom: Story={
args: {
  label: 'Custom Label',
  value: 42,
  width: 'w-64',
  height: 'h-48',
  primary: false,
  labelSpan: <span>Custom Span</span>,
},
};