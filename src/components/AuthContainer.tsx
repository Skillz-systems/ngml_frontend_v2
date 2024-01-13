import React from 'react';
import styled from 'styled-components';

// Styled components for responsive design
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

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 20px; /* Add margin to separate the logo from the children */
`;

const LogoImage = styled.img`
  width: 60px; /* Adjust the size according to your needs */
  height: 60px; /* Ensure a square aspect ratio for a round image */
  border-radius: 50%; /* Make the image round */
`;

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className='mt-6'>
    <Container>
      <LogoContainer>
        <LogoImage src="assets/nnpclogo.png" alt="NGML Logo" />
      </LogoContainer>
      {children}
    </Container>
    </div>
  );
};

export default AuthContainer;