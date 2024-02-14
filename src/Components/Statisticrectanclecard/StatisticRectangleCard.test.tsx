import { fireEvent, render } from '@testing-library/react';
import StatisticRectangleCard from './StatisticRectangleCard';

describe('StatisticRectangleCard', () => {
    test('renders with default props', () => {
        const { getByText } = render(<StatisticRectangleCard />);
        expect(getByText('32')).toBeInTheDocument();
    });

    test('renders with custom props', () => {
        const { getByText, getByTestId } = render(
            <StatisticRectangleCard
                title="Test Title"
                value="100"
                backgroundColor="bg-blue-500"
                color="text-white"
                size="w-72"
            />
        );
        expect(getByText('Test Title')).toBeInTheDocument();
        expect(getByText('100')).toBeInTheDocument();
        expect(getByText('Test Title')).toHaveClass('text-lg', 'font-semibold', 'text-white');
        expect(getByText('100')).toHaveClass('text-lg', 'font-bold', 'text-gray-700', 'bg-blue-500');
        expect(getByText('100').parentElement).toHaveClass('w-72');
    });

    test('handles icon hover', () => {
        const { getByTestId } = render(
            <StatisticRectangleCard
                icon={<div data-testid="test-icon" />}
                title="Test Title"
            />
        );
        const icon = getByTestId('test-icon');
        fireEvent.mouseEnter(icon);
        expect(icon.parentElement).toHaveStyle('background-color: #dddddd');
        fireEvent.mouseLeave(icon);
        expect(icon.parentElement).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });
});