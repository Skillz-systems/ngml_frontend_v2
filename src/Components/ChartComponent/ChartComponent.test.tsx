import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChartContent from './ChartContent';

describe('ChartContent', () => {
  const defaultProps = {
    headerTitle: 'Test Header',
    quantity: '100',
    quantityTitle: 'Test Quantity Title',
    periodTitle: 'Test Period Title',
  };

  beforeEach(() => {
    render(<ChartContent {...defaultProps} />);
  });

  it('renders with default props', () => {
    expect(screen.getByText(defaultProps.headerTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.quantity)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.quantityTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.periodTitle)).toBeInTheDocument();
  });

});
