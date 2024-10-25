import { cn } from '@/Utils/cn';
import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/layouts/mobile.css';

interface CustomDatePickerProps {
  range?: boolean;
  onChange: (date: DateObject | DateObject[] | null) => void;
  placeholder?: string;
  className?: string;
  value?: DateObject | DateObject[] | null;
  format?: string;
  disabled?: boolean;
}

const CustomDatePicker = ({
  range = false,
  onChange,
  placeholder = 'Select date',
  className = '',
  value = null,
  format = 'MM/DD/YYYY',
  disabled = false,
}: CustomDatePickerProps) => {
  const [, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <DatePicker
        value={value}
        onChange={onChange}
        range={range}
        format={format}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(`
          w-full px-4 py-2
          border border-gray-300 rounded-lg
          focus:ring-2 focus:ring-green-500 focus:border-green-500
          disabled:bg-gray-100 disabled:cursor-not-allowed`, className)
        }
        containerClassName="w-full"
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        calendarPosition="bottom-left"
      />
    </div>
  );
};

export default CustomDatePicker;

