import { render } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer Component', () => {
  test('renders ContentContainer component with default values', () => {
    const { getByText } = render(<ContentContainer>Test Content</ContentContainer>);
    const contentElement = getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('renders ContentContainer component with translucent type', () => {
    const { container } = render(<ContentContainer type="translucent">Test Content</ContentContainer>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('background-color: rgba(255, 255, 255, 0.5);');
  });

  test('renders ContentContainer component with white type', () => {
    const { container } = render(<ContentContainer type="white">Test Content</ContentContainer>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('background-color: #ffffff;');
  });

  test('renders ContentContainer component with dashed type', () => {
    const { container } = render(<ContentContainer type="dashes">Test Content</ContentContainer>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('border-style:.*dashed.*');
  });

  test('renders ContentContainer component with custom width and height', () => {
    const { container } = render(<ContentContainer width="200px" height="300px">Test Content</ContentContainer>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('width: 200px;');
    expect(cardElement).toHaveStyle('height: 300px;');
  });

  test('renders ContentContainer component with custom border-radius', () => {
    const { container } = render(<ContentContainer borderRadius={10}>Test Content</ContentContainer>);
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('border-radius: 10px;');
  });

  test('renders ContentContainer component with different content types', () => {
    const { getByText } = render(
      <ContentContainer>
        <div>Test Div</div>
        <button>Test Button</button>
      </ContentContainer>
    );
    expect(getByText(/Test Div/i)).toBeInTheDocument();
    expect(getByText(/Test Button/i)).toBeInTheDocument();
  });

  // Add more tests for interactions if needed
});