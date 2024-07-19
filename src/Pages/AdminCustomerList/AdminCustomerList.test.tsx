import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import AdminCustomerList from './AdminCustomerList';

const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('AdminCustomerList', () => {
    test('renders correctly', () => {
        renderWithRouter(<AdminCustomerList />);

        // Check if the "Add Customer" button is rendered
        const addCustomerButton = screen.getByText('Add Customer');
        expect(addCustomerButton).toBeInTheDocument();
    });

    test('opens modal when "Add Customer" button is clicked', () => {
        renderWithRouter(<AdminCustomerList />);

        // Check if modal is initially closed
        const modal = screen.queryByText('Create New Customer');
        expect(modal).toBeNull();

        // Click on "Add Customer" button
        const addCustomerButton = screen.getByText('Add Customer');
        fireEvent.click(addCustomerButton);

        // Check if modal is opened
        const modalTitle = screen.getByText('Create New Customer');
        expect(modalTitle).toBeInTheDocument();
    });

    test('closes modal when "Cancel" button is clicked', () => {
        renderWithRouter(<AdminCustomerList />);

        // Open the modal
        const addCustomerButton = screen.getByText('Add Customer');
        fireEvent.click(addCustomerButton);

        // Check if modal is opened
        const modalTitle = screen.getByText('Create New Customer');
        expect(modalTitle).toBeInTheDocument();

        // Click on "Cancel" button
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        // Check if modal is closed
        const closedModal = screen.queryByText('Create New Customer');
        expect(closedModal).toBeNull();
    });
});