import { render, screen } from '@testing-library/react';
import CostAnalysis from './CostAnalysis';

describe('CostAnalysis Component', () => {
    test('renders the main container and document section', () => {
        render(<CostAnalysis />);

        const documentSection = screen.getByText(/documents/i);
        expect(documentSection).toBeInTheDocument();
    });

    test('renders upload and create buttons', () => {
        render(<CostAnalysis />);

        const uploadButton = screen.getByText(/upload capex/i);
        expect(uploadButton).toBeInTheDocument();

        const createButton = screen.getByText(/create capex/i);
        expect(createButton).toBeInTheDocument();
    });

    test('renders a DocumentCard with the correct content', () => {
        render(<CostAnalysis />);

        // Check for the document card with the expected content
        const documentTitle = screen.getByText(/dangote cement/i);
        expect(documentTitle).toBeInTheDocument();

        const documentSubtitle = screen.getByText(/site survey report/i);
        expect(documentSubtitle).toBeInTheDocument();

        const documentLinkText = screen.getByText(/last updated/i);
        expect(documentLinkText).toBeInTheDocument();

        const documentLinkText2 = screen.getByText(/12\/13\/2023/i);
        expect(documentLinkText2).toBeInTheDocument();
    });
});