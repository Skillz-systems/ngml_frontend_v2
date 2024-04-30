import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import DocumentCardTwo from './DocumentCardTwo';

// Describe a test suite for the DocumentCardTwo component
describe('DocumentCardTwo Component', () => {
    // Test if the component renders without crashing
    it('should render without crashing', () => {
        const { getByText } = render(
            <DocumentCardTwo
                icon={<span>Icon</span>}
                title="Test Title"
                subtitle="Test Subtitle"
                buttonText="Click Me"
            />
        );

        // Check if the title and subtitle are rendered
        expect(getByText('Test Title')).toBeInTheDocument();
        expect(getByText('Test Subtitle')).toBeInTheDocument();
    });

    // Test hover behavior to ensure the button is visible on hover
    it('should display the button text when hovered', () => {
        const { getByText, queryByText } = render(
            <DocumentCardTwo
                icon={<span>Icon</span>}
                title="Test Title"
                subtitle="Test Subtitle"
                buttonText="Click Me"
            />
        );

        // The button text should not be visible initially
        expect(queryByText('Click Me')).toBeNull();

        // Simulate hover over the component
        fireEvent.mouseEnter(getByText('Test Title'));

        // The button text should be visible now
        expect(getByText('Click Me')).toBeVisible();

        // Simulate mouse leave to check if the button text disappears
        fireEvent.mouseLeave(getByText('Test Title'));

        // The button text should not be visible again
        expect(queryByText('Click Me')).toBeNull();
    });
});