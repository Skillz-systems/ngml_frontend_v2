import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DailyVolumnTable from './DailyVolumnTable';


describe('DailyVolumnTable', () => {

  it('renders correctly', () => {
    render(<DailyVolumnTable />);
    const gridElement = screen.getByRole('grid');
    expect(gridElement).toBeInTheDocument();
  });

});
