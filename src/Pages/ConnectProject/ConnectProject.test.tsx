import { fireEvent, render, screen } from '@testing-library/react';
import ConnectProject from './ConnectProject';

describe('ConnectProject Component', () => {
    test('renders without crashing', () => {
        render(<ConnectProject />);
        const projectDatesText = screen.getByText(/PROJECT DATES/i);
        expect(projectDatesText).toBeInTheDocument();
    });

    test('should update project start date', () => {
        render(<ConnectProject />);
        const startDateInput = screen.getByText(/Proposed project start date/i);

        fireEvent.change(startDateInput);

    });

    test('should update project end date', () => {
        render(<ConnectProject />);
        const endDateInput = screen.getByText(/Proposed project end date/i);

        fireEvent.change(endDateInput);

    });

    test('renders confirm selection button when dates are selected', () => {
        render(<ConnectProject />);
        const startDateInput = screen.getByText(/Proposed project start date/i);
        const endDateInput = screen.getByText(/Proposed project end date/i);

        fireEvent.change(startDateInput);
        fireEvent.change(endDateInput);
    });
});