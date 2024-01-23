import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  const defaultProps = {
    children: <div>Test Content</div>,
  };

  it('renders with default props', () => {
    const { getByText } = render(<ContentContainer {...defaultProps} />);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct styles for translucent type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="translucent" />);
    expect(container.firstChild).toHaveClass('rounded-0 bg-opacity-50 border');
  });

  it('applies correct styles for white type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="white" />);
    expect(container.firstChild).toHaveClass('rounded-0 bg-white border');
  });

  it('applies correct styles for dashes type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="dashes" />);
    expect(container.firstChild).toHaveClass('rounded-0 border-dashed border');
  });

  it('applies correct styles for solid type', () => {
    const { container } = render(<ContentContainer {...defaultProps} type="solid" />);
    expect(container.firstChild).toHaveClass('rounded-0 bg-gray-200');
  });

  it('applies custom radius, width, and height', () => {
    const { container } = render(
      <ContentContainer {...defaultProps} radius={10} width="50%" height="200px" />
    );
    expect(container.firstChild).toHaveClass('rounded-10');
    expect(container.firstChild).toHaveStyle('width: 50%');
    expect(container.firstChild).toHaveStyle('height: 200px');
    expect(container.firstChild).toHaveStyle('padding: 4px');
  });

  it('renders with different content', () => {
    const customContent = <span>Custom Content</span>;
    const { getByText } = render(<ContentContainer {...defaultProps} children={customContent} />);
    expect(getByText('Custom Content')).toBeInTheDocument();
  });
});