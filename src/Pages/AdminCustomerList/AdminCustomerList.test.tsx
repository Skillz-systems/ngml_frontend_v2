import { fireEvent, render, screen } from '@testing-library/react';
import AdminCustomerList from './AdminCustomerList';

describe('AdminCustomerList', () => {
    test('renders correctly', () => {
        render(<AdminCustomerList />);

        // Check if the "Add Customer" button is rendered
        const addCustomerButton = screen.getByText('Add Customer');
        expect(addCustomerButton).toBeInTheDocument();
    });

    test('opens modal when "Add Customer" button is clicked', () => {
        render(<AdminCustomerList />);

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
        render(<AdminCustomerList />);

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