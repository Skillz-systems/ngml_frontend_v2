import { render, screen } from '@testing-library/react';
import ContentContainer from './ContentContainer'; // Adjust the import path as needed

describe('ContentContainer Component', () => {
  it('renders with default props', () => {
    render(<ContentContainer>Hello, World!</ContentContainer>);

    // Assert that the component renders with default props
    expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();

    // Assert default styles
    const container = screen.getByRole('div');
    expect(container).toHaveStyle({
      width: '100%',
      height: '100%',
      borderRadius: '0px',
      backgroundColor: 'solid',
      border: '1px solid',
      borderColor: 'transparent',
      padding: '20px',
    });
  });

  it('renders with custom props', () => {
    render(
      <ContentContainer
        type="translucent"
        width="50%"
        height="200px"
        borderRadius={10}
      >
        Custom Content
      </ContentContainer>
    );

    // Assert that the component renders with custom props
    expect(screen.getByText(/Custom Content/i)).toBeInTheDocument();

    // Assert custom styles
    const container = screen.getByRole('div');
    expect(container).toHaveStyle({
      width: '50%',
      height: '200px',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      border: '1px solid',
      borderColor: 'transparent',
      padding: '20px',
    });
  });
});