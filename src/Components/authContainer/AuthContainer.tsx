import React from 'react';
import styled from 'styled-components';

/**
 * Styled container for responsive design.
 * This container sets the maximum width, margin, padding, and background styles.
 * The logo is positioned at the center-top of the container, wrapped by the top border line.
 * 
 * @styledq
 */

const Container = styled.div`
max-width: 400px;
margin: 10% auto;
padding: 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
background-color: rgba(255, 255, 0, 0.2);
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`;

/**
 * Styled container for the logo, with centered text and margin.
 * 
 * @styled
 */

const LogoContainer = styled.div`
width: 100%;
text-align: center;
margin-bottom: 30px;
`;

/**
 * Styled image for the logo with rounded corners.
 * 
 * @styled
 */

const LogoImage = styled.img`
position: absolute;
top: -30px;
left: 50%;
transform: translateX(-50%);
width: 60px;
height: 60px;
border-radius: 50%;
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