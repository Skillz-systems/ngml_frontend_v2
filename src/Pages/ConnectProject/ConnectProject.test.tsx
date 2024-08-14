import { fireEvent, render, screen } from '@testing-library/react';
import ConnectProject from './ConnectProject';

describe('ConnectProject Component', () => {    

    test('should update project start date', () => {
        render(<ConnectProject />);
        const startDateInput = screen.getByText(/Project Start Date/i);

        fireEvent.change(startDateInput);

    });

    test('should update project end date', () => {
        render(<ConnectProject />);
        const endDateInput = screen.getByText(/Project End Date/i);

        fireEvent.change(endDateInput);

    });

    test('renders confirm selection button when dates are selected', () => {
        render(<ConnectProject />);
        const startDateInput = screen.getByText(/Project Start Date/i);
        const endDateInput = screen.getByText(/Project End Date/i);

        fireEvent.change(startDateInput);
        fireEvent.change(endDateInput);
    });

});