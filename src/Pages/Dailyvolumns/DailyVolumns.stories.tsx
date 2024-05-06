
// import { Meta, StoryObj } from '@storybook/react';
// import Dailyvolumns from './Dailyvolumns';

// const meta: Meta = {
//     title: 'Pages/Dailyvolumns', 
//     component: Dailyvolumns,
//     parameters: {
//     },
//     argTypes: {
//     },
// } satisfies Meta<typeof Dailyvolumns>;

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//     render: () => <Dailyvolumns />, 
// };




import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Dailyvolumns from './Dailyvolumns';


const meta: Meta<typeof Dailyvolumns> = {
    title: 'Pages/Dailyvolumns',
    component: Dailyvolumns
    ,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultView: Story = {
    render: () => (
        <MemoryRouter>
            <Dailyvolumns />
        </MemoryRouter>
    ),
};