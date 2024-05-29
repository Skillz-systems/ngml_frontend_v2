import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EoiRequestTable from './EoiRequestTable';

describe('EoiRequestTable Component', () => {
  it('renders without crashing', () => {
    render(<EoiRequestTable />);
    expect(screen.getByText('COMPANY NAME')).toBeInTheDocument();
    expect(screen.getByLabelText('Search this list')).toBeInTheDocument();
  });

 
});
