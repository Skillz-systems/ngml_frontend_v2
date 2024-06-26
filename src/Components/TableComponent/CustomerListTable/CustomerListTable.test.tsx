import { CustomerListtData } from '@/Data'; // Make sure this path is correct
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CustomerListTable from './CustomerListTable';

describe('CustomerListTable', () => {
  it('renders the component and displays the search input and data grid', () => {
    render(<CustomerListTable />);
    expect(screen.getByLabelText(/Search this list/i)).toBeInTheDocument();
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('filters rows based on search input', async () => {
    render(<CustomerListTable />);

    fireEvent.change(screen.getByLabelText(/Search this list/i), { target: { value: 'test' } });


    const matchingRows = CustomerListtData.filter(row => row.companyname.includes('test') || row.companyType.includes('test'));
    expect(screen.getAllByRole('row')).toHaveLength(matchingRows.length + 1);
  });

});
