import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import useDemoConfig from '../../Utils/useDemoConfig';
import ChartContent from './ChartContent';

interface ComponentChartProps {
  series: number; 
  dataType: 'time' | 'ordinal'; 
}

export default function ChartComponent({ series, dataType }: ComponentChartProps) {
  const { data } = useDemoConfig({
    series: series,
    dataType: dataType,
  });

  const primaryAxis = React.useMemo<AxisOptions<typeof data[number]['data'][number]>>(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<typeof data[number]['data'][number]>[]>(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <ChartContent
      width={720}
      height={343}
      headerTitle="Customer Consumption Chart"
      style={{ color: 'red' }}
      quantity="12,083,343.00 Mscf"
      quantityTitle="Total Daily Consumption"
      periodTitle='LAST DAILY TOTAL'
    >
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </ChartContent>
  );
}