import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import AuthContainer from './AuthContainer';


describe('AuthContainer', () => {
  test('renders AuthContainer with logo, logo container, and round logo image', () => {
    // Arrange
    render(<AuthContainer children={undefined} />);

    // Act
    const authContainer = screen.getByTestId('auth-container');
    const logoContainer = screen.getByTestId('logo-container');
    const logoImage = screen.getByTestId('logo-image');

    // Assert
    expect(authContainer).toBeInTheDocument();
    expect(logoContainer).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveStyle('border-radius: 50%');
  });

  test('renders AuthContainer with provided children', () => {
    // Arrange
    const customText = 'Custom Text';
    render(<AuthContainer>{customText}</AuthContainer>);

    // Act
    const authContainer = screen.getByTestId('auth-container');
    const children = screen.getByText(customText);

    // Assert
    expect(authContainer).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  test('renders AuthContainer with a round logo image', () => {
    // Arrange
    render(<AuthContainer children={undefined} />);

    // Act
    const logoImage = screen.getByTestId('logo-image');

    // Assert
    expect(logoImage).toHaveStyle('border-radius: 50%');
  });

  test('renders AuthContainer with the correct logo source and alt text', () => {
    // Arrange
    const logoSource = 'assets/nnpclogo.png';
    render(<AuthContainer children={undefined} />);

    // Act
    const logoImage = screen.getByTestId('logo-image');

    // Assert
    expect(logoImage).toHaveAttribute('src', logoSource);
    expect(logoImage).toHaveAttribute('alt', 'NGML Logo');
  });

  test('applies responsive design styles', async () => {
    // Arrange
    render(<AuthContainer children={undefined} />);

    // Act
    await act(async () => {
      // Resize window to a mobile viewport
      global.innerWidth = 480;
      global.dispatchEvent(new Event('resize'));
      await new Promise(resolve => setTimeout(resolve, 500));
    });

    const container = screen.getByTestId('auth-container');

    // Assert
    expect(container).toHaveStyle('max-width: 400px');
  });

  test('is reusable with different content', () => {
    // Arrange
    render(
      <div>
        <AuthContainer children={undefined} />
        <AuthContainer>
          <p>Custom Content</p>
        </AuthContainer>
      </div>
    );

    // Act
    const containers = screen.getAllByTestId('auth-container');

    // Assert
    expect(containers).toHaveLength(2);
  });
});

//added by Collins
describe('Collins AuthContainer', () => {
  it('renders with children', () => {
    const { getByAltText, getByText } = render(
      <AuthContainer>
        <p>Content goes here</p>
      </AuthContainer>
    );

    // Check if the logo image is rendered
    const logoImage = getByAltText('NGML Logo');
    expect(logoImage).toBeInTheDocument();

    // Check if the provided children are rendered
    const contentElement = getByText('Content goes here');
    expect(contentElement).toBeInTheDocument();
  });




  it('renders with the correct logo image', () => {
    const { getByAltText } = render(
      <AuthContainer>
        <p>Content goes here</p>
      </AuthContainer>
    );

    const logoImage = getByAltText('NGML Logo');
    expect(logoImage.src).toContain('assets/nnpclogo.png');
  });

  it('applies the correct styles', () => {
    const { container } = render(
      <AuthContainer>
        <p>Content goes here</p>
      </AuthContainer>
    );

    const containerElement = container.firstChild;

    expect(containerElement).toHaveStyle('max-width: 400px');
    expect(containerElement).toHaveStyle('margin: 10% auto');
    expect(containerElement).toHaveStyle('padding: 20px');
    // Add more style checks as needed
  });

  it('renders children components', () => {
    const { getByText } = render(
      <AuthContainer>
        <div>Child Component</div>
      </AuthContainer>
    );

    const childComponent = getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});


//new test by collins


describe('Collins Auth Container', () => {
  it('renders the container with logo and content', () => {
    render(<AuthContainer>Some content</AuthContainer>);

    const container = screen.getByTestId('auth-container');
    const logoImage = screen.getByAltText('NGML Logo');
    const content = screen.getByText('Some content');

    expect(container).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });


  it('handles interactive elements within the container', async () => {
    const handleClick = vi.fn();
    render(
      <AuthContainer>
        <button onClick={handleClick}>Click me</button>
      </AuthContainer>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    userEvent.click(button);

    await waitFor(() => {

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

  });
});
