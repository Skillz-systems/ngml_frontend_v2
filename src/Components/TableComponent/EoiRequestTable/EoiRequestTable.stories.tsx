import type { Meta, StoryObj } from '@storybook/react';
import EoiRequestTable from './EoiRequestTable';

const meta: Meta<typeof EoiRequestTable> = {
    title: 'Components/EoiRequestTable',
    component: EoiRequestTable,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultView: Story = {};
