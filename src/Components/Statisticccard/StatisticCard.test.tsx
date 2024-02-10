import { render } from '@testing-library/react';
import StatisticCard from './StatisticCard';

describe('StatisticCard component', () => {
    test('renders with label and value', () => {
        const { getByText } = render(
            <StatisticCard label="Total Users" value={1000} />
        );

        expect(getByText('Total Users')).toBeInTheDocument();
        expect(getByText('1000')).toBeInTheDocument();
    });

    test('renders with custom label span', () => {
        const { getByText } = render(
            <StatisticCard
                label="Total Sales"
                value={5000}
                labelSpan={<span>Monthly</span>}
            />
        );

        expect(getByText('Total Sales')).toBeInTheDocument();
        expect(getByText('Monthly')).toBeInTheDocument();
    });

    test('renders primary card by default', () => {
        const { getByText } = render(
            <StatisticCard label="Total Sales" value={5000} />
        );

        const label = getByText('Total Sales');
        const value = getByText('5000');

        expect(label).toHaveClass('text-lg font-bold');
        expect(value).toHaveClass('text-2xl font-bold');
    });

    test('renders secondary card when primary is false', () => {
        const { getByText } = render(
            <StatisticCard label="Total Sales" value={5000} primary={false} />
        );

        const label = getByText('Total Sales');
        const value = getByText('5000');

        expect(label).toHaveClass('text-lg font-bold');
        expect(value).toHaveClass('text-2xl font-bold');
    });
});