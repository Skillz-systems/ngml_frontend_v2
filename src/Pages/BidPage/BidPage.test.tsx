import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BidPage from './BidPage';

describe('BidPage Component', () => {

    it('should render StatisticRectangleCard components', () => {
        render(<BidPage />);
        const openTendersCard = screen.getByText('Open Tenders');
        const submittedBidsCard = screen.getByText('Submitted Bids');
        expect(openTendersCard).toBeInTheDocument();
        expect(submittedBidsCard).toBeInTheDocument();
    });

});