
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CustomerListTable from './CustomerListTable';
import { useGetCustomersQuery } from '@/Redux/Features/Customer/Customer';


vi.mock('@/Redux/Features/Customer/Customer', () => ({
    useGetCustomersQuery: vi.fn(),
}));

const mockCustomers = [
    {
        id: 1,
        task_id: 101,
        company_name: 'Company A',
        email: 'emailA@example.com',
        phone_number: '123456789',
        created_by_user_id: 1,
        status: true,
        created_at: '2024-08-23',
        updated_at: '2024-08-23',
        sites: [],
    },
    {
        id: 2,
        task_id: 102,
        company_name: 'Company B',
        email: 'emailB@example.com',
        phone_number: '987654321',
        created_by_user_id: 2,
        status: false,
        created_at: '2024-08-22',
        updated_at: '2024-08-22',
        sites: [],
    },
];

describe('CustomerListTable Component', () => {
    it('renders loading state initially', () => {
        (useGetCustomersQuery as vi.Mock).mockReturnValue({
            data: [],
            isLoading: true,
            error: null,
        });

        render(<CustomerListTable />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error state when there is an error', () => {
        (useGetCustomersQuery as vi.Mock).mockReturnValue({
            data: [],
            isLoading: false,
            error: true,
        });

        render(<CustomerListTable />);

        expect(screen.getByText('Error loading customer data.')).toBeInTheDocument();
    });

    it('renders customer data and filters correctly', () => {
        (useGetCustomersQuery as vi.Mock).mockReturnValue({
            data: mockCustomers,
            isLoading: false,
            error: null,
        });

        render(<CustomerListTable />);

        expect(screen.getByText('Showing 2 of 2 customers')).toBeInTheDocument();
        expect(screen.getByText('Company A')).toBeInTheDocument();
        expect(screen.getByText('Company B')).toBeInTheDocument();

        const searchInput = screen.getByLabelText('Search this list');
        fireEvent.change(searchInput, { target: { value: 'Company A' } });

        expect(screen.queryByText('Company B')).not.toBeInTheDocument();
    });

    it('filters by status correctly', () => {
        (useGetCustomersQuery as vi.Mock).mockReturnValue({
            data: mockCustomers,
            isLoading: false,
            error: null,
        });

        render(<CustomerListTable />);

        fireEvent.click(screen.getByText('All Customer'));

        fireEvent.click(screen.getByText('Active'));

        expect(screen.getByText('Company A')).toBeInTheDocument();
        expect(screen.queryByText('Company B')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('All Customer'));
        fireEvent.click(screen.getByText('In-Active'));

        expect(screen.getByText('Company B')).toBeInTheDocument();
        expect(screen.queryByText('Company A')).not.toBeInTheDocument();
    });
});





