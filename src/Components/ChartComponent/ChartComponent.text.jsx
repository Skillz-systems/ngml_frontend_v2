import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ChartTop from './ChartTop';

describe('ChartTop Component', () => {
  it('renders correctly with initial props', () => {
    const { getByText } = render(
      <ChartTop
        headerTitle="Customer Consumption Chart"
        quantity="100 Mscf"
        quantityTitle="Total Daily Consumption"
        periodTitle="LAST DAILY TOTAL"
        setGranularity={vi.fn()}
        setSelectedMonth={vi.fn()}
        setSelectedYear={vi.fn()}
        selectedMonth="1"
        selectedYear="2023"
      />
    );

    expect(getByText('Customer Consumption Chart')).toBeInTheDocument();
    expect(getByText('100 Mscf')).toBeInTheDocument();
    expect(getByText('Total Daily Consumption')).toBeInTheDocument();
    expect(getByText('LAST DAILY TOTAL')).toBeInTheDocument();
  });

  it('calls setGranularity with correct argument when granularity option is clicked', () => {
    const setGranularityMock = vi.fn();
    const { getByText } = render(
      <ChartTop
        headerTitle="Customer Consumption Chart"
        quantity="100 Mscf"
        quantityTitle="Total Daily Consumption"
        periodTitle="LAST DAILY TOTAL"
        setGranularity={setGranularityMock}
        setSelectedMonth={vi.fn()}
        setSelectedYear={vi.fn()}
        selectedMonth="1"
        selectedYear="2023"
      />
    );

    fireEvent.click(getByText('Day'));
    expect(setGranularityMock).toHaveBeenCalledWith('day');

    fireEvent.click(getByText('Month'));
    expect(setGranularityMock).toHaveBeenCalledWith('month');

    fireEvent.click(getByText('Year'));
    expect(setGranularityMock).toHaveBeenCalledWith('year');
  });

  it('calls setSelectedMonth with correct argument when a month is selected', () => {
    const setSelectedMonthMock = vi.fn();
    const { getByRole } = render(
      <ChartTop
        headerTitle="Customer Consumption Chart"
        quantity="100 Mscf"
        quantityTitle="Total Daily Consumption"
        periodTitle="LAST DAILY TOTAL"
        setGranularity={vi.fn()}
        setSelectedMonth={setSelectedMonthMock}
        setSelectedYear={vi.fn()}
        selectedMonth="1"
        selectedYear="2023"
      />
    );

    fireEvent.change(getByRole('combobox', { name: /month/i }), { target: { value: '2' } });
    expect(setSelectedMonthMock).toHaveBeenCalledWith('2');
  });

  it('calls setSelectedYear with correct argument when a year is selected', () => {
    const setSelectedYearMock = vi.fn();
    const { getAllByRole } = render(
      <ChartTop
        headerTitle="Customer Consumption Chart"
        quantity="100 Mscf"
        quantityTitle="Total Daily Consumption"
        periodTitle="LAST DAILY TOTAL"
        setGranularity={vi.fn()}
        setSelectedMonth={vi.fn()}
        setSelectedYear={setSelectedYearMock}
        selectedMonth="1"
        selectedYear="2023"
      />
    );

    fireEvent.change(getAllByRole('combobox')[1], { target: { value: '2022' } });
    expect(setSelectedYearMock).toHaveBeenCalledWith('2022');
  });

});
