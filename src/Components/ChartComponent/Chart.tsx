import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Pie,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { Heading } from '../index';

type ChartType = 'bar' | 'line' | 'area' | 'pie';

interface ComposedChartProps<T extends Record<string, unknown>> {
    data: T[];
    chartType: ChartType;
    xAxisDataKey: keyof T;
    yAxisLabel?: string;
    colors: string[];
    title: string;
}

const Chart = <T extends Record<string, unknown>>({
    data,
    chartType,
    xAxisDataKey,
    yAxisLabel,
    colors,
    title
}: ComposedChartProps<T>) => {
    const renderChartComponent = (dataKey: string, color: string, index: number) => {
        switch (chartType) {
            case 'bar':
                return <Bar key={index} dataKey={dataKey} fill={color} />;
            case 'line':
                return <Line key={index} type="monotone" dataKey={dataKey} stroke={color} />;
            case 'area':
                return <Area key={index} type="monotone" dataKey={dataKey} stackId="1" stroke={color} fill={color} />;
            case 'pie':
                return <Pie key={index} dataKey={dataKey} data={data} outerRadius={80} fill={color} />;
            default:
                return null;
        }
    };

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const currentYear = new Date().getFullYear();
    const yearsRange = Array.from({ length: 10 }, (_, i) => currentYear - i);

    return (
        <div className="bg-white rounded-lg border border-gray-100 mt-4" data-testid="chart">
            <div className='flex justify-between items-center space-x-3 p-4 bg-medium-100 border-b border-gray-200/20'>

                <Heading as="p" size="h6" className='capitalize font-normal'>
                    {title}
                </Heading>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Day</span>
                    <span className="text-sm text-gray-500">Month</span>
                    <span className="text-sm text-gray-500">Year</span>
                    <select
                        className="rounded-full border border-gray-300 py-1 px-3 text-sm font-medium text-gray-200 focus:outline-none outline-none ring-0 cursor-pointer"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        className="rounded-full border border-gray-300 py-1 px-3 text-sm font-medium text-gray-200 focus:outline-none outline-none ring-0 cursor-pointer"
                    >
                        {yearsRange.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <div className='p-4'>
                {data.length > 0 ? (
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart data={data} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={xAxisDataKey as string} />
                            {yAxisLabel && <YAxis label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} />}
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            {Object.keys(data[0]).map((dataKey, index) => {
                                if (dataKey !== xAxisDataKey) {
                                    return renderChartComponent(dataKey, colors[index % colors.length], index);
                                }
                                return null;
                            })}
                        </ComposedChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="bg-white h-24 w-full flex justify-center items-center" data-testid="no-chart-content ">
                        <Heading as="p" size="h3" className="font-normal">
                            No data available for chart.
                        </Heading>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Chart;