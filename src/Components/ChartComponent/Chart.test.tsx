
import { render, screen } from '@testing-library/react';
import Chart from './Chart';

interface DataItem {
    month: string;
    'Amount Sold': number;
    Delivered: number;
    Requests: number;
    Revenue: number;
}

const data: DataItem[] = [
    { month: 'Jan', 'Amount Sold': 100, Delivered: 80, Requests: 120, Revenue: 5000 },
    { month: 'Feb', 'Amount Sold': 200, Delivered: 150, Requests: 180, Revenue: 8000 },
    { month: 'Mar', 'Amount Sold': 150, Delivered: 120, Requests: 200, Revenue: 6000 },
];

const chartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

describe('Chart', () => {
    it('renders bar chart correctly', () => {
        render(
            <Chart
                data={data}
                chartType="bar"
                xAxisDataKey="month"
                yAxisLabel="Values"
                colors={chartColors}
            />
        );

        const chartElement = screen.getByRole('figure');
        expect(chartElement).toBeInTheDocument();
    });

    it('renders line chart correctly', () => {
        render(
            <Chart data={data} chartType="line" xAxisDataKey="month" colors={chartColors} />
        );

        const chartElement = screen.getByRole('figure');
        expect(chartElement).toBeInTheDocument();
    });
});