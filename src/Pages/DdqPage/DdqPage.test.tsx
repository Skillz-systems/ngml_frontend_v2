import { fireEvent, render, screen } from '@testing-library/react';
import DdqPage from './DdqPage';

describe('DdqPage component', () => {
    it('renders without crashing', () => {
        render(<DdqPage />);
    });

    it('displays correct page number', () => {
        render(<DdqPage />);
        const pageNumberElement = screen.getByText('Page 1 of 5 showing');
        expect(pageNumberElement).toBeInTheDocument();
    });

    it('navigates to the next page when next button is clicked', () => {
        render(<DdqPage />);
        const nextButton = screen.getByAltText('icon2');
        fireEvent.click(nextButton);
        const updatedPageNumberElement = screen.getByText('Page 2 of 5 showing');
        expect(updatedPageNumberElement).toBeInTheDocument();
    });

    // Add more test cases as needed
});