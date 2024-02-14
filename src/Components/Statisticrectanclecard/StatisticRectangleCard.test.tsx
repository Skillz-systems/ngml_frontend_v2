import { render } from '@testing-library/react';
import StatisticRectangleCard from './StatisticRectangleCard';

describe('StatisticRectangleCard', () => {
    test('renders with default props', () => {
        const { getByText } = render(<StatisticRectangleCard />);

        expect(getByText('Pending Request')).toBeInTheDocument();
        expect(getByText('32')).toBeInTheDocument();
    });

    test('renders with custom props', () => {
        const { getByText } = render(
            <StatisticRectangleCard
                title="Custom Title"
                value="42"
                backgroundColor="bg-blue-500"
                valueColor="text-white"
            />
        );

        expect(getByText('Custom Title')).toBeInTheDocument();
        expect(getByText('42')).toBeInTheDocument();
    });
});