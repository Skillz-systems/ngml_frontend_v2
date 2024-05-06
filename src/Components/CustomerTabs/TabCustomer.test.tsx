import { fireEvent, render } from '@testing-library/react';
import TabCustomer, { TabListInterface } from './TabCustomer';

// Mock data for testing
const mockTabList: TabListInterface[] = [
    { name: 'Tab 1', ref: 'tab1', content: 'icon', icon: <span>Icon 1</span> },
    { name: 'Tab 2', ref: 'tab2', content: 'numeric' },
    {
        name: 'Tab 3',
        ref: 'tab3',
        content: 'icon',
        icon: <span>Icon 2</span>,
        sublist: [
            { name: 'Subtab 1', ref: 'subtab1', content: 'icon', icon: <span>Subtab Icon 1</span> },
            { name: 'Subtab 2', ref: 'subtab2', content: 'numeric' },
        ],
    },
];

const mockTabContent = {
    tab1: <div>Tab 1 Content</div>,
    tab2: <div>Tab 2 Content</div>,
    tab3: <div>Tab 3 Content</div>,
    subtab1: <div>Subtab 1 Content</div>,
    subtab2: <div>Subtab 2 Content</div>,
};

test('renders tab customer component with tabs and content', () => {
    const { getByText } = render(
        <TabCustomer activeTab="tab1" setActiveTab={() => { }} tablist={mockTabList} tabContent={mockTabContent} />
    );

    // Check if the component renders the tabs
    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');
    const tab3 = getByText('Tab 3');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();

    // Check if the component renders the content for active tab
    const tab1Content = getByText('Tab 1 Content');
    expect(tab1Content).toBeInTheDocument();
});

test('switches tab when clicked', () => {
    const setActiveTab = vi.fn();
    const { getByText } = render(
        <TabCustomer activeTab="tab1" setActiveTab={setActiveTab} tablist={mockTabList} tabContent={mockTabContent} />
    );

    const tab2 = getByText('Tab 2');
    fireEvent.click(tab2);

    expect(setActiveTab).toHaveBeenCalledWith('tab2');
});