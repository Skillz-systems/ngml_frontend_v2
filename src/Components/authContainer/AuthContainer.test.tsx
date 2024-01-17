import { act, render, screen } from '@testing-library/react';
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