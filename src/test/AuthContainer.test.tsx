import React from 'react';
import { render, screen, act } from '@testing-library/react';
import AuthContainer from '../components/AuthContainer';

describe('AuthContainer', () => {
  test('renders AuthContainer with logo', () => {
    // Arrange
    render(<AuthContainer />);

    // Act
    const authContainer = screen.getByTestId('auth-container');
    const logoContainer = screen.getByTestId('logo-container');
    const logoImage = screen.getByTestId('logo-image');

    // Assert
    expect(authContainer).toBeInTheDocument();
    expect(logoContainer).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });

  test('renders AuthContainer with provided children', () => {
    // Arrange
    const customText = 'Custom Text';
    render(<AuthContainer>{customText}</AuthContainer>);

    
    const authContainer = screen.getByTestId('auth-container');
    const children = screen.getByText(customText);

    // Assert
    expect(authContainer).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  test('renders AuthContainer with a round logo image', () => {
    // Arrange
    render(<AuthContainer />);

    // Act
    const logoImage = screen.getByTestId('logo-image');

    // Assert
    expect(logoImage).toHaveStyle('border-radius: 50%');
  });

  test('renders AuthContainer with the correct logo source and alt text', () => {
    // Arrange
    const logoSource = 'assets/nnpclogo.png';
    render(<AuthContainer />);
    
    // Act
    const logoImage = screen.getByTestId('logo-image');

    // Assert
    expect(logoImage).toHaveAttribute('src', logoSource);
    expect(logoImage).toHaveAttribute('alt', 'NGML Logo');
  });

  test('applies responsive design styles', async () => {
    // Arrange
    render(<AuthContainer />);
    
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
        <AuthContainer />
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