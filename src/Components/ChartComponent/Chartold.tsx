import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// interface ChartData {
//     name: string;
//     value: number;
// }

// interface ChartProps {
//     data: Array;
//     chartType: 'bar' | 'line';
//     xAxisLabel: string;
//     yAxisLabel: string;
// }

const Chart: React.FC = ({ data, chartType, xAxisLabel, colors }) => {
    const renderChart = (): React.ReactElement => {
        switch (chartType) {
            case 'bar':
                return (
                    <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" tickLine={false} label={{ value: xAxisLabel, position: 'insideBottom' }} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                );
            case 'line':
                return (
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        {/* <XAxis dataKey="name" tickLine={false} label={{ value: xAxisLabel, position: 'insideBottom' }} /> */}
                        <YAxis />
                        <Tooltip />

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {data.map((entry, index) => (
                            <Line key={index} type="monotone" dataKey={entry.dataKey} stroke={colors[index]} />
                        ))}
                        {/* <Line type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" /> */}
                    </LineChart>
                );
            default:
                return <div></div>;
        }
    };

    return <div>{renderChart()}</div>;
};

export default Chart;
