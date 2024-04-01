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

type ChartType = 'bar' | 'line' | 'area' | 'pie';

interface ComposedChartProps<T extends Record<string, any>> {
    data: T[];
    chartType: ChartType;
    xAxisDataKey: keyof T;
    yAxisLabel?: string;
    colors: string[];
}

const Chart = <T extends Record<string, any>>({
    data,
    chartType,
    xAxisDataKey,
    yAxisLabel,
    colors,
}: ComposedChartProps<T>) => {
    const renderChartComponent = (dataKey: string, color: string, index: number) => {
        switch (chartType) {
            case 'bar':
                return <Bar key={index} dataKey={dataKey} fill={color} />;
            case 'line':
                return <Line key={index} type="monotone" dataKey={dataKey} stroke={color} />;
            case 'area':
                return <Area key={index} type="monotone" dataKey={dataKey} stroke={color} fill={color} />;
            case 'pie':
                return <Pie key={index} dataKey={dataKey} data={data} outerRadius={80} fill={color} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white p-4">
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data}>
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
        </div>
    );
};

export default Chart;