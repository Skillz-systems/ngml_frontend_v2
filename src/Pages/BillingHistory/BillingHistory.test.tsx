import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BillingHistory from './BillingHistory';

const renderWithRouter = (component: any) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('BillingHistory Component', () => {
    test('renders Billing History component', () => {
        renderWithRouter(<BillingHistory />);

        const heading = screen.getByText(/Billing History/i);
        expect(heading).toBeInTheDocument();

    });

    test('opens and closes the modal', () => {
        renderWithRouter(<BillingHistory />);

        const newInvoiceButton = screen.getByText(/New Invoice Advice/i);
        fireEvent.click(newInvoiceButton);

        const modal = screen.getByText(/Generate New Invoice Advice/i);
        expect(modal).toBeInTheDocument();

        const cancelButton = screen.getByText(/Cancel/i);
        fireEvent.click(cancelButton);

        expect(modal).not.toBeInTheDocument();
    });

    test('handles year dropdown change', () => {
        render(
            <MemoryRouter>
                <BillingHistory />
            </MemoryRouter>
        );

        const yearDropdown = screen.getByRole('combobox') as HTMLSelectElement;

        // Change the value with the correct event structure
        fireEvent.change(yearDropdown, { target: { value: '2022' } });

        // Validate the change
        expect(yearDropdown.value).toBe('2022');
    });
});