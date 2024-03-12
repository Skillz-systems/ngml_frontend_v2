// import { render, screen } from '@testing-library/react';
// import AgreementTable from './AgreementTable'; 

// describe('AgreementTable', () => {
//  test('renders the table with the correct number of rows', () => {
//     render(<AgreementTable />);
//     const rows = screen.getAllByRole('row');
//     expect(rows.length).toBeGreaterThan(0); 
//  });


// });




import { render, screen, fireEvent } from '@testing-library/react';
import AgreementTable from './AgreementTable';
import { AgreementData } from '@/Data'; 
describe('AgreementTable', () => {
  test('renders the table with the correct initial number of rows', () => {
    render(<AgreementTable />);
    const rows = screen.getAllByRole('row'); 
    expect(rows.length).toBe(14); 
  });

  test('filters rows based on search input', () => {
    render(<AgreementTable />);
    const searchInput = screen.getByLabelText('Search this list');
    fireEvent.change(searchInput, { target: { value: 'Some Company Name' } });
    const filteredRows = screen.getAllByRole('row');
    expect(filteredRows.length).toBeLessThan(AgreementData.length + 1); 
  });

//   test('displays modal with detailed information when a row action button is clicked', async () => {
//     render(<AgreementTable />);
//     const viewButtons = screen.getAllByText('View'); // Adjust if your action button has a different text or label
//     fireEvent.click(viewButtons[0]); // Click the first 'View' button

//     const modal = screen.findByRole('dialog');
//     expect(modal).toBeTruthy();

//     const modalTitle = await screen.findByText(/details/i); // Adjust based on your modal content
//     expect(modalTitle).toBeInTheDocument();
//   });

//   test('correctly applies filters when selected from the dropdown', () => {
//     render(<AgreementTable />);
//     const filterButton = screen.getByRole('button', { name: /filter/i });
//     fireEvent.click(filterButton);

//     // Simulate selecting a filter option, adjust based on your actual filter names
//     const filterOption = screen.getByText('Some Filter Option');
//     fireEvent.click(filterOption);

//     const filteredRows = screen.getAllByRole('row');
//     // Expect the number of rows to change based on the filter applied, adjust this expectation based on your data
//     expect(filteredRows.length).toBeLessThan(AgreementData.length + 1); // Includes header row, so data rows + 1
//   });
});
