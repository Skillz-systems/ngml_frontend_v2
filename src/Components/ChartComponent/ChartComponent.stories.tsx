import { Meta, StoryObj } from '@storybook/react';
import ChartComponent from './ChartComponent'; // Adjust the import path as necessary

const meta: Meta<typeof ChartComponent> = {
  title: 'Components/ChartComponent',
  component: ChartComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    series: {
      control: 'number',
      description: 'Number of data series in the chart',
    },
    dataType: {
      control: 'select',
      options: ['time', 'ordinal'],
      description: 'Type of data represented in the chart',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TimeSeries: Story = {
  args: {
    series: 3, 
    dataType: 'time', 
  },
};

export const OrdinalSeries: Story = {
  args: {
    series: 1,
    dataType: 'ordinal',
  },
};



