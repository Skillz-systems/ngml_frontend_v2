import React from 'react';
import styled from 'styled-components';

/**
 * Styled container for responsive design.
 * 
 * @styled
 */

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
`;

/**
 * Styled container for the logo, with centered text and margin.
 * 
 * @styled
 */

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 20px; /* Add margin to separate the logo from the children */
`;

/**
 * Styled image for the logo with rounded corners.
 * 
 * @styled
 */

const LogoImage = styled.img`
  width: 60px; /* Adjust the size according to your needs */
  height: 60px; /* Ensure a square aspect ratio for a round image */
  border-radius: 50%; /* Make the image round */
`;

/**
 * `AuthContainer` is a styled container component designed for authentication-related content.
 * It includes responsive design styles and a round logo image.
 *
 * @component
 * @example
 * // Example usage of AuthContainer
 * const MyComponent = () => (
 *   <AuthContainer>
 *     <p>Content goes here</p>
 *   </AuthContainer>
 * );
 *
 * @param {object} props - React props for the AuthContainer component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @returns {React.FC} Returns the AuthContainer component.
 */

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <Container data-testid="auth-container">
      <LogoContainer data-testid="logo-container">
        <LogoImage src="assets/nnpclogo.png" alt="NGML Logo" data-testid="logo-image" />
      </LogoContainer>
      {children}
    </Container>
  );
};

export default AuthContainer;