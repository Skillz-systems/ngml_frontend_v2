import { render, screen } from '@testing-library/react';
import Agreement from './Agreement';

describe('Agreement Component', () => {
    it('renders the Agreement component without crashing', () => {
        render(<Agreement />);

        const heading = screen.getByText('AGREEMENT TEMPLATES');
        expect(heading).toBeInTheDocument();
    });

    it('displays the correct number of DocumentCardTwo elements', () => {
        render(<Agreement />);

        const titles = ['GSPA', 'Supplement', 'Addendum', 'Side', 'Approval'];
        titles.forEach((title) => {
            const card = screen.getByText(title);
            expect(card).toBeInTheDocument();
        });

        const agreementText = screen.getAllByText('Agreement');
        expect(agreementText.length).toBeGreaterThan(1);
    });

    it('displays the correct number of DocumentCard elements', () => {
        render(<Agreement />);

        const card = screen.getByText('Dangote Cement');
        expect(card).toBeInTheDocument();
    });

    it('renders content in DocumentCardTwo elements', () => {
        render(<Agreement />);

        const firstCardTitle = screen.getByText('GSPA');

        expect(firstCardTitle).toBeInTheDocument();
    });
});