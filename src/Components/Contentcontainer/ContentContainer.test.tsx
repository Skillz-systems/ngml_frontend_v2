import { render } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<ContentContainer>Test Content</ContentContainer>);
    const container = getByTestId('content-container');

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('bg-gray-300 border');
    expect(container).toHaveStyle('width: 100%');
    expect(container).toHaveStyle('height: 100%');
  });

  it('renders with custom props', () => {
    const { getByTestId } = render(
      <ContentContainer type="white" radius={5} width="50%" height="200px">
        Custom Content
      </ContentContainer>
    );
    const container = getByTestId('content-container');

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('bg-white border');
    expect(container).toHaveClass('rounded-md');
    expect(container).toHaveClass('shadow-md');
    expect(container).toHaveClass('rounded-none');
    expect(container).toHaveStyle('width: 50%');
    expect(container).toHaveStyle('height: 200px');
  });

  it('handles zero radius correctly', () => {
    const { getByTestId } = render(
      <ContentContainer type="dashes" radius={0} width="75%" height="150px">
        Zero Radius Content
      </ContentContainer>
    );
    const container = getByTestId('content-container');

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('border-dashed');
    expect(container).toHaveClass('rounded-none');
    expect(container).toHaveStyle('width: 75%');
    expect(container).toHaveStyle('height: 150px');
  });

  it('handles different types correctly', () => {
    const { getByTestId } = render(
      <ContentContainer type="translucent" radius={8} width="60%" height="250px">
        Translucent Content
      </ContentContainer>
    );
    const container = getByTestId('content-container');

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('bg-yellow-100 border-yellow-500 border-dashed');
    expect(container).toHaveClass('rounded-md');
    expect(container).toHaveStyle('width: 60%');
    expect(container).toHaveStyle('height: 250px');
  });
});