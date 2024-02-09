import { render } from '@testing-library/react';
import StatisticCard from './StatisticCard';

describe('StatisticCard', () => {
  test('renders with default props', () => {
    const { getByText } = render(<StatisticCard label="Label" value="Value" />);
    
    expect(getByText('Label')).toBeInTheDocument();
    expect(getByText('Value')).toBeInTheDocument();
  });

  test('renders with custom props', () => {
    const { getByText } = render(
      <StatisticCard
        label="Custom Label"
        value={42}
        width="w-64"
        height="h-48"
        primary={false}
        labelSpan={<span>Custom Span</span>}
      />
    );

    expect(getByText('Custom Label')).toBeInTheDocument();
    expect(getByText('42')).toBeInTheDocument();
    expect(getByText('Custom Span')).toBeInTheDocument();
  });
});