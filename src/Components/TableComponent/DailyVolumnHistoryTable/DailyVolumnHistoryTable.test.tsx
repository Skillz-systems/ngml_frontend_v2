import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DailyVolumnHistoryTable from './DailyVolumnHistoryTable';

vi.mock('@/Data', () => ({
  DailyVolumnHistoryData: [
    { id: 1, sn: '001', seriesname: 'Series A', datesent: '01/2023', rate: '50', value: '100', amount: '5000' },
  ]
}));

describe('DailyVolumnHistoryTable', () => {
  it('renders without crashing', () => {
    render(<DailyVolumnHistoryTable />);
    expect(screen.getByText('SERIES NAME')).toBeInTheDocument();
  });

  it('displays the correct number of entries', () => {
    render(<DailyVolumnHistoryTable />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(2);
  });

  it('allows month and year selection', () => {
    render(<DailyVolumnHistoryTable />);
    expect(screen.getByText('Month')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
  });
});
