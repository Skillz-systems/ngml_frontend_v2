import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DdqPage from './DdqPage';

describe('DdqPage component', () => {
    const renderWithRouter = (ui: React.ReactElement) => {
        return render(<MemoryRouter>{ui}</MemoryRouter>);
    };

    it('renders without crashing', () => {
        renderWithRouter(<DdqPage />);
    });

    it('displays correct page number', () => {
        renderWithRouter(<DdqPage />);
        const pageNumberElement = screen.getByText('Page 1 of 5 showing');
        expect(pageNumberElement).toBeInTheDocument();
    });

    it('navigates to the next page when next button is clicked', () => {
        renderWithRouter(<DdqPage />);
        const nextButton = screen.getByAltText('icon2');
        fireEvent.click(nextButton);
        const updatedPageNumberElement = screen.getByText('Page 2 of 5 showing');
        expect(updatedPageNumberElement).toBeInTheDocument();
    });
});