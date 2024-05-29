import { render, screen } from '@testing-library/react';
import StatisticCard from './StatisticCard';

describe('StatisticCard', () => {


    test('renders with custom labelSpan', () => {
        render(
            <StatisticCard
                label="Label"
                value="123"
                labelSpan={<span>Custom Span</span>}
            />
        );

        // Assert label, value, and custom span are rendered
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByText('123')).toBeInTheDocument();
        expect(screen.getByText('Custom Span')).toBeInTheDocument();
    });

    test('renders with primary style', () => {
        render(
            <StatisticCard
                label="Label"
                value="123"
                primary={true}
            />
        );

        // Assert primary style is applied
        expect(screen.getByText('Label').parentElement).toHaveClass('bg-green-700');
        expect(screen.getByText('123').parentElement).toHaveClass('bg-green-500');
    });

    test('renders with secondary style', () => {
        render(
            <StatisticCard
                label="Label"
                value="123"
                primary={false}
            />
        );

        // Assert secondary style is applied
        expect(screen.getByText('Label').parentElement).toHaveClass('bg-gray-100');
        expect(screen.getByText('123').parentElement).toHaveClass('bg-white-500');
    });
});