import { StoryObj, Meta } from '@storybook/react';
import StatisticCard from './StatisticCard';

const meta: Meta = {
    title: 'Components/StatisticCard',
    component: StatisticCard,
    argTypes: {
    type: { control: { type: 'select', options: ['primary', 'secondary', 'tertiary'] } },
    label: { control: 'text' },
    value: { control: 'text' },
    icon: { control: 'text' },
    text: { control: 'text' },
    reportText: { control: 'text' },
    reportIcon: { control: 'text' },
    },
} satisfies Meta<typeof StatisticCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story ={
args: {
  type: 'primary',
  label: 'Connect',
  value: 100,
  text: 'Primary Text',
  reportText: 'Report Text',
  reportIcon: <div>Report Icon</div>,
},
};

export const Secondary: Story={
args: {
  type: 'secondary',
  label: 'Service',
  value: 200,
  text: 'Secondary Text',
  reportText: 'Secondary Report Text',
  reportIcon: <div>Secondary Report Icon</div>,
},
};

export const Tertiary: Story={
args: {
  type: 'tertiary',
  icon: <div>Icon</div>,
  text: 'Tertiary Text',
  reportText: 'Tertiary Report Text',
  reportIcon: <div>Tertiary Report Icon</div>,
},
};