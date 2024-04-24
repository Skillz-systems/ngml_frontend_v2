import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import TabCustomer, { TabListInterface } from './TabCustomer';

const tablist: TabListInterface[] = [
    {
        name: 'Overview',
        ref: 'overview',
    },
    {
        name: 'Details',
        ref: 'details',
    },
    {
        name: 'Settings',
        ref: 'settings',
    },
];

const tabContent: { [key: string]: React.ReactNode } = {
    overview: <div>Overview Content</div>,
    details: <div>Details Content</div>,
    settings: <div>Settings Content</div>,
};

test('TabCustomer renders and allows tab switching', () => {
    const mockSetActiveTab = vi.fn();

    const props = {
        activeTab: 'overview',
        setActiveTab: mockSetActiveTab,
        tablist,
        tabContent,
    };

    render(<TabCustomer {...props} />);

    const dropdown = screen.getByRole('combobox');
    const detailsTab = screen.getByText('Details', { selector: 'h4' });
    const overviewContent = screen.getByText('Overview Content');

    expect(overviewContent).toBeInTheDocument();

    fireEvent.click(detailsTab);
    expect(mockSetActiveTab).toHaveBeenCalledWith('details');

    fireEvent.change(dropdown, { target: { value: 'settings' } });
    expect(mockSetActiveTab).toHaveBeenCalledWith('settings');
});