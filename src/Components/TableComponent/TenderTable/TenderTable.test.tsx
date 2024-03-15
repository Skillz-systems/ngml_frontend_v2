import { render, screen, fireEvent } from '@testing-library/react';
import TenderTable from './TenderTable'; // Adjust the import path as necessary
import { TenderTypeData } from '@/Data'; // Adjust the import path as necessary

// Mock any external dependencies here, if necessary

describe('TenderTable Component', () => {
  test('renders the data grid with initial data', () => {
    render(<TenderTable />);
    
    // Check if the component properly rendered the rows from TenderTypeData
    TenderTypeData.forEach((data) => {
      expect(screen.getByText(data.companyname)).toBeInTheDocument();
    });
  });

  test('filters rows based on search input', () => {
    render(<TenderTable />);
    const searchInput = screen.getByLabelText(/search this list/i);

    fireEvent.change(searchInput, { target: { value: 'Some search text' } });

  });

});
