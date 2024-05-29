import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DailyVolumnTable from './DailyVolumnTable';


describe('DailyVolumnTable', () => {

  it('renders correctly', () => {
    render(<DailyVolumnTable />);
    const gridElement = screen.getByRole('grid');
    expect(gridElement).toBeInTheDocument();
  });

});
