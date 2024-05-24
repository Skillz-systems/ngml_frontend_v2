import { render, screen } from '@testing-library/react';
import RequestPage from './RequestPage';

describe('RequestPage', () => {
    test('renders the heading', () => {
        render(<RequestPage />);
        const headingElement = screen.getByText(/EOI REQUESTS/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders statistic rectangle cards', () => {
        render(<RequestPage />);

        const totalRequestsCard = screen.getByText(/Total Requests/i);
        const newRequestsCard = screen.getByText(/New Requests/i);
        const pendingRequestsCard = screen.getByText(/Pending Requests/i);

        expect(totalRequestsCard).toBeInTheDocument();
        expect(newRequestsCard).toBeInTheDocument();
        expect(pendingRequestsCard).toBeInTheDocument();
    });
});