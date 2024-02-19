import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InfoCard from './InfoCardComponent';

describe('InfoCard Component', () => {
  it('renders the title and number correctly', () => {
    const title = 'Test Title';
    const number = '123';

    render(<InfoCard title={title} number={number} />);

    const titleElement = screen.getByText(title);
    const numberElement = screen.getByText(number);

    expect(titleElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    const title = 'Styled Title';
    const number = '456';

    render(<InfoCard title={title} number={number} />);

    const titleElement = screen.getByText(title);
    const numberElement = screen.getByText(number);

    expect(titleElement.parentElement).toHaveStyle({ backgroundColor: '#E2E4EB' });
    expect(numberElement.parentElement).toHaveStyle({ backgroundColor: '#F6F8FA' });
  });

});
