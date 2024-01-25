import type { Meta, StoryObj } from '@storybook/react';
import NavigationBar from './NavigationBar';
import HomeIcons from '../../../public/assets/HomeIcons.png'



const meta = {

    title: 'NavigationBar Component',
    component: NavigationBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
     argTypes: {
        type: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        upLabel: { control: 'text' },
        downLabel: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
        fontSize: { control: 'text' },
        radius: { control: 'text' },
        fontWeight: { control: 'text' },
        rightIcon: { control: 'text' },
        leftIcon: { control: 'text' },
        iconHeight: { control: 'text' },
        iconWidth: { control: 'text' },
        iconColor: { control: 'color' },
        padding: { control: 'text' },
        marginBottom: { control: 'text' },
        reference: { control: 'text' },
        onClick: { control: 'action' }, 
        iconBackgroundColor: { control: 'color' },
        subMenu: { control: 'array' },
    },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'primary',
        upLabel: 'Fort Oil Ltd.',
        downLabel: 'John',
        width: '200px',
        height: '40px',
        fontSize: '12px',
        radius: '20px',
        fontWeight: 'bold',
        padding: '8px',
        leftIcon: <img src={HomeIcons} alt="Cancel Icon" />,
        rightIcon: <img src={HomeIcons} alt="Cancel Icon" />,
        iconHeight: '20px', 
        iconWidth: '20px', 
        reference: '/home',
        onClick: () => console.log('Home clicked'),
    },
};


export const Secondary: Story = {
    args: {
        type: 'secondary',
        upLabel: 'Home',
        width: '200px',
        height: '40px',
        fontSize: '12px',
        radius: '12px',
        fontWeight: 'bold',
        padding: '8px',
        leftIcon: <img src={HomeIcons} alt="Cancel Icon" />,
        iconHeight: '20px', 
        iconWidth: '20px', 
        reference: '/secondary',
        onClick: () => console.log('Home clicked'),
    },
};

export const Tertiary: Story = {
    args: {
        type: 'tertiary',
        upLabel: 'Report',
        width: '200px',
        height: '40px',
        fontSize: '12px',
        radius: '12px',
        fontWeight: 'bold',
        padding: '8px',
        leftIcon: <img src={HomeIcons} alt="Cancel Icon" />,
        iconHeight: '20px', 
        iconWidth: '20px', 
        subMenu: [
            { label: 'Submenu Item 1', reference: '/Home' },
            { label: 'Submenu Item 2', reference: '/about' },
            { label: 'Submenu Item 3', reference: '/yoo' },
        ],
        reference: '/tertiary',
        onClick: () => console.log('Home clicked'),
    },
};
