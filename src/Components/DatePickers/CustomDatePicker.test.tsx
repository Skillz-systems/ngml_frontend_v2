// CustomDatePicker.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateObject } from 'react-multi-date-picker';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import CustomDatePicker from './CustomDatePicker';

describe('CustomDatePicker', () => {
    const createMockDate = (dateString: string) => {
        return new DateObject(dateString);
    };
    const mockSingleDate = createMockDate('2024-01-15');

    beforeEach(() => {
        vi.clearAllMocks();
    });


    describe('Value handling', () => {
        it('displays the selected date in single mode with correct format', () => {
            render(
                <CustomDatePicker
                    onChange={() => { }}
                    value={mockSingleDate}
                    format="MM/DD/YYYY"
                />
            );
            expect(screen.getByDisplayValue('01/15/2024')).toBeInTheDocument();
        });

        it('handles custom date format correctly', () => {
            render(
                <CustomDatePicker
                    onChange={() => { }}
                    value={mockSingleDate}
                    format="YYYY-MM-DD"
                />
            );
            expect(screen.getByDisplayValue('2024-01-15')).toBeInTheDocument();
        });
    });
    describe('Edge cases', () => {
        it('handles null value correctly', () => {
            render(
                <CustomDatePicker
                    onChange={() => { }}
                    value={null}
                />
            );
            expect(screen.getByRole('textbox')).toHaveValue('');
        });
    });

    describe('Accessibility', () => {
        it('maintains focus state correctly', async () => {
            const user = userEvent.setup();
            render(<CustomDatePicker onChange={() => { }} />);

            const input = screen.getByRole('textbox');
            await user.tab();

            expect(input).toHaveFocus();
        });
    });
});

// import { render, screen } from '@testing-library/react';
// import { DateObject } from 'react-multi-date-picker';
// import { describe, expect, it } from 'vitest';
// import CustomDatePicker from './CustomDatePicker';

// describe('CustomDatePicker', () => {
//     // Helper function to create a mock date object
//     const createMockDate = (dateString: string) => {
//         return new DateObject(dateString);
//     };

//     it('renders single date picker with placeholder', () => {
//         render(
//             <CustomDatePicker
//                 onChange={() => { }}
//                 placeholder="Select test date"
//             />
//         );

//         expect(screen.getByPlaceholderText('Select test date')).toBeInTheDocument();
//     });

//     it('renders range date picker', () => {
//         render(
//             <CustomDatePicker
//                 range
//                 onChange={() => { }}
//                 placeholder="Select date range"
//             />
//         );

//         expect(screen.getByPlaceholderText('Select date range')).toBeInTheDocument();
//     });

//     it('displays the selected date in single mode', () => {
//         const mockDate = createMockDate('2024-01-15');

//         render(
//             <CustomDatePicker
//                 onChange={() => { }}
//                 value={mockDate}
//                 format="MM/DD/YYYY"
//             />
//         );

//         expect(screen.getByDisplayValue('01/15/2024')).toBeInTheDocument();
//     });

//     it('disables the date picker when disabled prop is true', () => {
//         render(
//             <CustomDatePicker
//                 onChange={() => { }}
//                 disabled
//                 placeholder="Select date"
//             />
//         );

//         expect(screen.getByPlaceholderText('Select date')).toBeDisabled();
//     });

// });

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