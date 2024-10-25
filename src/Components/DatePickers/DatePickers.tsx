import React from 'react';
import type { Value } from 'react-multi-date-picker';
import DatePicker, { DateObject } from 'react-multi-date-picker';

// Custom CSS for the date picker
const datePickerStyles = {
  input: `
    w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
    bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600
  `,
  calendar: `
    !font-sans !bg-white dark:!bg-gray-800 !border-gray-200 dark:!border-gray-700 !shadow-lg !rounded-lg
  `,
  button: `
    !bg-blue-500 !text-white hover:!bg-blue-600 !transition-colors !duration-200
  `
};

interface CustomDatePickerProps {
  value?: Value;
  onChange?: (date: Value) => void;
  placeholder?: string;
  format?: string;
  className?: string;
  disabled?: boolean;
}

interface CustomDateRangePickerProps extends Omit<CustomDatePickerProps, 'value' | 'onChange'> {
  value?: [DateObject | null, DateObject | null];
  onChange?: (dateRange: [DateObject | null, DateObject | null]) => void;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select date',
  format = 'MM/DD/YYYY',
  className = '',
  disabled = false,
}) => {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      format={format}
      placeholder={placeholder}
      disabled={disabled}
      className={`${datePickerStyles.input} ${className}`}
      containerClassName="w-full"
      calendarClassName={datePickerStyles.calendar}
      inputClass="w-full"
      buttons={true}
      buttonClassName={datePickerStyles.button}
    />
  );
};

export const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select date range',
  format = 'MM/DD/YYYY',
  className = '',
  disabled = false,
}) => {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      range
      rangeHover
      format={format}
      placeholder={placeholder}
      disabled={disabled}
      className={`${datePickerStyles.input} ${className}`}
      containerClassName="w-full"
      calendarClassName={datePickerStyles.calendar}
      inputClass="w-full"
      buttons={true}
      buttonClassName={datePickerStyles.button}
      numberOfMonths={2}
    />
  );
};