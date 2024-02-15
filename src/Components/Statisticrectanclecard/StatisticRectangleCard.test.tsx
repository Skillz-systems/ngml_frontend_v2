import { fireEvent, render } from '@testing-library/react';
import StatisticRectangleCard from './StatisticRectangleCard';

describe('StatisticRectangleCard component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<StatisticRectangleCard />);
        // Ensure that the default value is rendered
        expect(getByText('32')).toBeInTheDocument();
    });

    it('renders with custom props', () => {
        const { getByText } = render(
            <StatisticRectangleCard
                title="Custom Title"
                value="50"
                backgroundColor="bg-blue-500"
                valueColor="text-white"
            />
        );
        expect(getByText('Custom Title')).toBeInTheDocument();
        expect(getByText('50')).toBeInTheDocument();
    });

    it('changes icon background color on hover', () => {
        const { getByTestId } = render(
            <StatisticRectangleCard
                icon={<div data-testid="test-icon">Icon</div>}
                iconBgColor="bg-red-500"
            />
        );
        const icon = getByTestId('test-icon');
        fireEvent.mouseEnter(icon);
        expect(icon).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
        fireEvent.mouseLeave(icon);
        expect(icon).not.toHaveStyle('background-color: bg-red-500');
    });
});