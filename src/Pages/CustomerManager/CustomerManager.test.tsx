import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomerManager from './CustomerManager';

describe('CustomerManager', () => {
    it('renders without crashing', () => {
        render(<CustomerManager />);
    });

    it('renders the correct number of DocumentCards', () => {
        render(<CustomerManager />);
        const documentCards = screen.getAllByText(/Last Updated/);
        expect(documentCards.length).toBe(2);
    });

    it('checks for specific card titles', () => {
        render(<CustomerManager />);

        expect(screen.getByText('Daily Volumes')).toBeInTheDocument();
        expect(screen.getByText('Billing')).toBeInTheDocument();
        expect(screen.getByText('Complaints')).toBeInTheDocument();
    });

    it('checks for specific images by alt text', () => {
        render(<CustomerManager />);

        const petrolIcon = screen.getByAltText('Report Icon');
        expect(petrolIcon).toBeInTheDocument();

        const callmadeIcons = screen.getAllByAltText('callmade Icon');
        expect(callmadeIcons.length).toBe(1);
    });
});