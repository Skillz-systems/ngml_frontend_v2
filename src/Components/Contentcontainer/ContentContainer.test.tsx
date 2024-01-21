import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContentContainer, { CardProps } from './ContentContainer';

describe('ContentContainer', () => {
  const defaultProps: CardProps = {
    children: <div>Test Content</div>,
  };

  it('renders with default props', () => {
    const { getByText } = render(<ContentContainer {...defaultProps} />);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct styles for translucent type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="translucent" />);
    expect(container.firstChild).toHaveClass('rounded-0 bg-opacity-50 bg-yellow-200 w-100% h-100% p-4');
  });

  it('applies correct styles for white type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="white" />);
    expect(container.firstChild).toHaveClass('rounded-0 bg-white w-100% h-100% p-4');
  });

  it('applies correct styles for dashes type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="dashes" />);
    expect(container.firstChild).toHaveClass('rounded-0 border-dashed border-4 w-100% h-100% p-4');
  });

  it('applies correct styles for solid type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="solid" />);
    expect(container.firstChild).toHaveClass('rounded-0 bg-gray-200 w-100% h-100% p-4');
  });

  it('applies custom radius, width, and height', () => {
    const { container } = render(
      <ContentContainer {...defaultProps} radius={10} width="50%" height="200px" />
    );
    expect(container.firstChild).toHaveClass('rounded-10 bg-gray-200 w-50% h-200px p-4');
  });
});