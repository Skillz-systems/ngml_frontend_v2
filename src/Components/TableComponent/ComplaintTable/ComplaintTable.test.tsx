import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ComplaintTable from './ComplaintTable'; 

describe('ComplaintTable', () => {

    it('renders correctly', () => {
        render(<ComplaintTable />);
        const companyElement = screen.getByText('Dangote Cement');
        expect(companyElement).toBeInTheDocument();
      });
});
