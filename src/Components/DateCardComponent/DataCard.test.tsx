import { render, fireEvent } from '@testing-library/react';
import DateCard, { DateCardProps } from './DateCard';

describe('DateCard component', () => {
  const mockProps: DateCardProps = {
    cardType: 'primary',
    day: 1,
    week: 'Week 1',
    month: 'January',
    isActive: false,
    onToggleActive: vitest.fn(),
    icon: <span>Icon</span>,
  };

  
  it('calls onToggleActive when clicked', () => {
    const { container } = render(<DateCard {...mockProps} />);

    fireEvent.click(container.firstChild as Element);

    expect(mockProps.onToggleActive).toHaveBeenCalled();
  });

  it('applies active styles when isActive is true', () => {
    const { container } = render(<DateCard {...mockProps} isActive={true} />);

    expect(container.firstChild).toHaveClass('active');
  });

  it('applies correct styles based on cardType', () => {
    const { container } = render(<DateCard {...mockProps} cardType="secondary" />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#F6F8FA',
      width: '266px',
      height: '290px',
    });
  });
});
