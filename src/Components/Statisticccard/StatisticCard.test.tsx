import { render, screen } from '@testing-library/react';
import StatisticCard from './StatisticCard';

describe('StatisticCard', () => {
    test('renders with default props', () => {
        render(<StatisticCard label="Label" value="123" />);

        // Assert label and value are rendered
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByText('123')).toBeInTheDocument();
    });

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
        expect(screen.getByText('Label').parentElement).toHaveClass('bg-gray-200');
        expect(screen.getByText('123').parentElement).toHaveClass('bg-white-500');
    });

    test('renders with different size', () => {
        render(
            <StatisticCard
                label="Label"
                value="123"
                size="sm"
            />
        );

        // Assert small size is applied
        expect(screen.getByText('Label').parentElement).toHaveClass(' p-3 w-full rounded-t-[20px] bg-green-700 text-white h-2/5 flex flex-col justify-center items-center');
        expect(screen.getByText('Label').parentElement).toHaveClass(' p-3 w-full rounded-t-[20px] bg-green-700 text-white h-2/5 flex flex-col justify-center items-center');
    });
});