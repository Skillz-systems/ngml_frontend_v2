import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import data from './Data';
import ChartTop from './ChartTop';
import BarchartContent from './BarChartContent';

const LinechartContent = () => {
  const flattenedData = data.month.flatMap((month) =>
    month.months.flatMap(({ month, daily_data }) =>
      daily_data.map(
        ({ date, amount_sold, amount_delivered, amount_ordered }) => ({
          month,
          date,
          amount_sold,
          amount_delivered,
          amount_ordered
        })
      )
    )
  );

  const CustomizedAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={14}
          dx={-40}
          fill="#828DA9"
          fontSize="10px"
          fontWeight="400"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div style={{marginLeft: '20px'}}>
      <ChartTop 
      headerTitle='Customer Consumption Chart'
      quantity='12,083,343.00 Mscf'
      quantityTitle='Total Daily Consumption'
      periodTitle='LAST DAILY TOTAL'
      />
      <LineChart
        width={1112}
        height={400}
        data={flattenedData}
      >
        <svg>
          <rect x="0" y="0" width="68" height="366" fill="#E2E4EB" />
        </svg>
        <CartesianGrid />
        <XAxis dataKey="date" tick={<CustomizedAxisTick />} />
        <YAxis tick={CustomizedAxisTick} />
        <Tooltip />
        <Line type="monotone" dataKey="amount_sold" stroke="#DFD900" />
        <Line type="monotone" dataKey="amount_delivered" stroke="#005828" />
        <Line type="monotone" dataKey="amount_ordered" stroke="#919191" />
      </LineChart>
      <BarchartContent/>

    </div>
  );
};

export default LinechartContent;








