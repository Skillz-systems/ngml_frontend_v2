import { render, screen } from '@testing-library/react';
import { DateObject } from 'react-multi-date-picker';
import { describe, expect, it } from 'vitest';
import CustomDatePicker from './CustomDatePicker';

describe('CustomDatePicker', () => {
    // Helper function to create a mock date object
    const createMockDate = (dateString: string) => {
        return new DateObject(dateString);
    };

    it('renders single date picker with placeholder', () => {
        render(
            <CustomDatePicker
                onChange={() => { }}
                placeholder="Select test date"
            />
        );

        expect(screen.getByPlaceholderText('Select test date')).toBeInTheDocument();
    });

    it('renders range date picker', () => {
        render(
            <CustomDatePicker
                range
                onChange={() => { }}
                placeholder="Select date range"
            />
        );

        expect(screen.getByPlaceholderText('Select date range')).toBeInTheDocument();
    });

    // it('calls onChange when a date is selected in single mode', async () => {
    //     const mockOnChange = vi.fn();
    //     const user = userEvent.setup();

    //     render(
    //         <CustomDatePicker
    //             onChange={mockOnChange}
    //             placeholder="Select date"
    //         />
    //     );

    //     const input = screen.getByPlaceholderText('Select date');
    //     await user.click(input);

    //     // Find and click a date in the calendar
    //     const dateButton = screen.getByRole('button', { name: '15' });
    //     await user.click(dateButton);

    //     expect(mockOnChange).toHaveBeenCalled();
    // });

    // it('calls onChange when dates are selected in range mode', async () => {
    //     const mockOnChange = vi.fn();
    //     const user = userEvent.setup();

    //     render(
    //         <CustomDatePicker
    //             range
    //             onChange={mockOnChange}
    //             placeholder="Select date range"
    //         />
    //     );

    //     const input = screen.getByPlaceholderText('Select date range');
    //     await user.click(input);

    //     // Select start date
    //     const startDate = screen.getByRole('button', { name: '15' });
    //     await user.click(startDate);

    //     // Select end date
    //     const endDate = screen.getByRole('button', { name: '20' });
    //     await user.click(endDate);

    //     expect(mockOnChange).toHaveBeenCalled();
    // });

    it('displays the selected date in single mode', () => {
        const mockDate = createMockDate('2024-01-15');

        render(
            <CustomDatePicker
                onChange={() => { }}
                value={mockDate}
                format="MM/DD/YYYY"
            />
        );

        expect(screen.getByDisplayValue('01/15/2024')).toBeInTheDocument();
    });

    it('disables the date picker when disabled prop is true', () => {
        render(
            <CustomDatePicker
                onChange={() => { }}
                disabled
                placeholder="Select date"
            />
        );

        expect(screen.getByPlaceholderText('Select date')).toBeDisabled();
    });

});

// Mock the calendar position calculation
// vi.mock('react-multi-date-picker', () => {
//     const actual = vi.importActual('react-multi-date-picker');
//     return {
//         ...actual,
//         Calendar: vi.fn().mockImplementation((props) => {
//             return actual.Calendar({
//                 ...props,
//                 calendarPosition: 'bottom-left',
//             });
//         }),
//     };
// });