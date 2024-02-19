import React from 'react';
import {
  CartesianGrid,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import data from './Data';
import ChartTop from './ChartTop';

const BarchartContent = () => {
  const flattenedData = data.month.flatMap((month) =>
    month.months.flatMap(({ month, daily_data }) =>
      daily_data.map(
        ({ date, amount_sold, }) => ({
          month,
          date,
          amount_sold,
         
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
          textAnchor="end"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div style={{marginTop: '40px'}}>
      <ChartTop 
        headerTitle='Customer Consumption Chart'
        quantity='12,083,343.00 Mscf'
        quantityTitle='Total Daily Consumption'
        periodTitle='LAST DAILY TOTAL'
      />
      
      <BarChart
        width={1112}
        height={400}
        data={flattenedData}
      >
        <svg>
          <rect x="0" y="0" width="68" height="366" fill="#E2E4EB" />
        </svg>
        <CartesianGrid/>
        <XAxis dataKey="date" tick={<CustomizedAxisTick />} />
        <YAxis tick={<CustomizedAxisTick />} />
        <Tooltip />
        <Bar dataKey="amount_sold" fill="#DFD900" />
       
      </BarChart>
    </div>
  );
};

export default BarchartContent;
