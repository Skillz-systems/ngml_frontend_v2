import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from 'recharts';
import data from './Data';
import ChartTop from './ChartTop';

const BarchartContent = () => {
  const [granularity, setGranularity] = useState('day');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [previousDayTotal, setPreviousDayTotal] = useState('Calculating...');

  useEffect(() => {
    const total = calculatePreviousDayTotal();
    setPreviousDayTotal(total);
  }, []);

  const calculatePreviousDayTotal = () => {
    const today = new Date();
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - 1);

    const previousDay = previousDate.getDate();
    const previousMonth = previousDate.getMonth() + 1;
    const previousYear = previousDate.getFullYear();

    const previousMonthData = data.month
      .find((monthData) => monthData.year === previousYear)
      ?.months.find(
        (month) =>
          new Date(`${month.month} 1, 
    ${previousYear}`).getMonth() +
            1 ===
          previousMonth
      );

    const previousDayData = previousMonthData?.daily_data.find(
      (dayData) => parseInt(dayData.date.split('-')[2], 10) === previousDay
    );

    return previousDayData ? previousDayData.amount_sold : 'N/A';
  };

  const incrementMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
    if (selectedMonth === 12) {
      setSelectedYear((prevYear) => prevYear + 1);
    }
  };

  const decrementMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
    if (selectedMonth === 1) {
      setSelectedYear((prevYear) => prevYear - 1);
    }
  };

  const incrementYear = () => {
    setSelectedYear((prevYear) => prevYear + 1);
  };

  const decrementYear = () => {
    setSelectedYear((prevYear) => prevYear - 1);
  };

  const processData = () => {
    let processedData = [];
    if (granularity === 'day') {
      processedData = data.month
        .filter(({ year }) => year === selectedYear)
        .flatMap(({ months }) => months)
        .filter((_, index) => index + 1 === selectedMonth)
        .flatMap(({ daily_data }) => daily_data)
        .map(({ date, amount_sold }) => ({ date: date.slice(8), amount_sold }));
    } else if (granularity === 'month') {
      processedData = data.month
        .filter(({ year }) => year === selectedYear)
        .flatMap(({ months }) =>
          months.map(({ month, monthly_totals }) => ({
            month,
            amount_sold: monthly_totals.amount_sold
          }))
        );
    } else if (granularity === 'year') {
      processedData = data.month.map(({ year, months }) => ({
        year,
        amount_sold: months.reduce(
          (acc, { monthly_totals }) => acc + monthly_totals.amount_sold,
          0
        )
      }));
    }
    return processedData;
  };

  const flattenedData = processData();

  const CustomizedAxisTick = ({ x, y, payload, orientation }) => {
    const isVertical = orientation === 'left';
    const transform = isVertical
      ? `translate(${x},${y})`
      : `translate(${x},${y})`;

    return (
      <g transform={transform}>
        <text
          x={0}
          y={0}
          dy={isVertical ? '0.35em' : '0.93em'}
          dx={isVertical ? '-1em' : '7'}
          fill="#828DA9"
          fontSize="10px"
          fontWeight="400"
          textAnchor={isVertical ? 'end' : 'end'}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <ChartTop
        headerTitle="Customer Consumption Chart"
        quantity={`${previousDayTotal} Mscf`}
        quantityTitle="Total Daily Consumption"
        periodTitle="LAST DAILY TOTAL"
        setGranularity={setGranularity}
        selectedMonth={selectedMonth}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        incrementYear={incrementYear}
        decrementYear={decrementYear}
        selectedYear={selectedYear}
      />
      <BarChart width={1112} height={400} data={flattenedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={
            granularity === 'day'
              ? 'date'
              : granularity === 'month'
              ? 'month'
              : 'year'
          }
          tick={<CustomizedAxisTick orientation="bottom" />}
          height={60}
        />
        <YAxis tick={<CustomizedAxisTick orientation="left" />} />
        <Legend />
        <Tooltip />
        <Bar dataKey="amount_sold" fill="#00AF50" />
      </BarChart>
    </div>
  );
};

export default BarchartContent;
