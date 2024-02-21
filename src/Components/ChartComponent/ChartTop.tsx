import React from 'react';

interface ChartTopProps {
  headerTitle: string;
  quantity: string;
  quantityTitle: string;
  periodTitle: string;
  setGranularity: (granularity: string) => void;
  setSelectedMonth: (month: number) => void;
  setSelectedYear: (year: number) => void;
  selectedMonth: number;
  selectedYear: number;
}

const ChartTop: React.FC<ChartTopProps> = ({
  headerTitle,
  quantity,
  quantityTitle,
  periodTitle,
  setGranularity,
  setSelectedMonth,
  setSelectedYear,
  selectedMonth,
  selectedYear,
}) => {
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

  const handleGranularityChange = (newGranularity: string) => {
    setGranularity(newGranularity);
  };

  return (
    <div>
      <div style={{ height: '84px', width: '1107px', border: '1px solid #CCD0DC', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}>
        <div style={{ height: '55px', backgroundColor: '#F6FDEC', display: 'flex', alignItems: 'center', padding: '0px 16px', justifyContent: 'space-between' }}>
          <div style={{ color: '#49526A', fontSize: '16px', lineHeight: '20.08px', fontWeight: '600' }}>{headerTitle}</div>
          <div style={{ display: 'flex', columnGap: '8px', alignItems: 'center' }}>
            <div style={{ display: 'flex', columnGap: '8px', fontSize: '12px', fontWeight: '400', lineHeight: '15.06px', color: '#828DA9', cursor: 'pointer' }}>
              <span onClick={() => handleGranularityChange('day')}>Day</span>
              <span onClick={() => handleGranularityChange('month')}>Month</span>
              <span onClick={() => handleGranularityChange('year')}>Year</span>
            </div>
            <select 
              value={selectedMonth.toString()}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
              style={{ backgroundColor: '#F6FDEC', border: '1px solid #CCD0DC', height: '32px', width: '106px', borderRadius: '32px', padding: '4px', fontSize: '12px', fontWeight: '500', color: '#49526A', cursor: 'pointer' }}
            >
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select 
              value={selectedYear.toString()}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              style={{ backgroundColor: '#F6FDEC', border: '1px solid #CCD0DC', height: '32px', width: '77px', borderRadius: '32px', padding: '4px', fontSize: '12px', fontWeight: '500', color: '#49526A' }}
            >
              {yearsRange.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ backgroundColor: '#F6F8FA', height: '28px', display: 'flex', alignItems: 'center', padding: '0px 16px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: '12px', fontWeight: '500', lineHeight: '15.06px', columnGap: '8px' }}>
            <div style={{ color: '#828DA9' }}>{periodTitle}</div>
            <div style={{ color: '#49526A' }}>{quantity}</div>
          </div>
          <div style={{ display: 'flex', columnGap: '4px' }}>
            <div style={{ height: '12px', width: '12px', backgroundColor: '#00AF50' }}></div>
            <div style={{ fontSize: '10px', fontWeight: '500', lineHeight: '10px', color: '#828DA9' }}>{quantityTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTop;
