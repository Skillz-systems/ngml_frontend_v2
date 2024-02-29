import { render, screen } from '@testing-library/react';
import AgreementTable from './AgreementTable'; 

describe('AgreementTable', () => {
 test('renders the table with the correct number of rows', () => {
    render(<AgreementTable />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(0); 
 });


});
