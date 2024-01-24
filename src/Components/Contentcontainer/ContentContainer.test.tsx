import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer Component', () => {
  it('renders with default props', () => {
    render(<ContentContainer>Hello, World!</ContentContainer>);

    expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();

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

    expect(screen.getByText(/Custom Content/i)).toBeInTheDocument();

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