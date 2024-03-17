import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeedbackTable from './FeedbackTable'; 

vi.mock('../../../Data', () => ({
  FeedbackData: [
    { id: 1, status: 'Feedback Pending', companyname: 'Company A' },
    { id: 2, status: 'Sent', companyname: 'Company B' },
  ],
}));

describe('FeedbackTable Component', () => {
  beforeEach(() => {
    render(<FeedbackTable />);
  });

  it('renders correctly', () => {
    const tableElement = screen.getByRole('grid');
    expect(tableElement).toBeInTheDocument();
  });
});
