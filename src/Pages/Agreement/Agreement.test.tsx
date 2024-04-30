import { render, screen } from '@testing-library/react';
import Agreement from './Agreement';

// Unit test for DocumentCardTwo
describe('DocumentCardTwo Component', () => {
    it('renders with the correct title and subtitle', () => {
        const cardData = {
            title: "Dangote Cement",
            subtitle: "Site Survey Report",
            linkText: "Last Updated",
            linkText2: "12/13/2023",
            icon: <img src="/path/to/icon" alt="Copy Icon" />,
            height: "100%",
        };

        render(<DocumentCardTwo {...cardData} />);
        expect(screen.getByText('Dangote Cement')).toBeInTheDocument();
        expect(screen.getByText('Site Survey Report')).toBeInTheDocument();
        expect(screen.getByAltText('Copy Icon')).toBeInTheDocument();
    });
});

// Integration test for Agreement Component
describe('Agreement Component', () => {
    it('renders the correct number of DocumentCardTwo and DocumentCard components', () => {
        render(<Agreement />);

        // Check the number of cards rendered
        expect(screen.getAllByText('Use template').length).toBe(5);
        expect(screen.getAllByText('Dangote Cement').length).toBe(1);
        // Check for the specific titles and subtitles
        expect(screen.getByText('AGREEMENT TEMPLATES')).toBeInTheDocument();
        expect(screen.getByText('Agreement Documents')).toBeInTheDocument();
    });

    it('displays correct icons and text in the cards', () => {
        render(<Agreement />);

        // Check that icons are rendered correctly
        expect(screen.getAllByAltText('icon').length).toBe(5);
        expect(screen.getByAltText('Copy Icon')).toBeInTheDocument();
    });
});