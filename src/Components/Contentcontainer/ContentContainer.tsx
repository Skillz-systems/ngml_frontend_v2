import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  type?: 'translucent' | 'white' | 'dashes' | 'solid';
  width?: string;
  height?: string;
  borderRadius?: number;
  children: ReactNode;
}

const StyledCard = styled.div<CardProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border-radius: ${(props) => props.borderRadius}px;
  background-color: ${(props) => getBackgroundColor(props.type)};
  // Add other styling properties based on card type
`;

const getBackgroundColor = (type?: string): string => {
  switch (type) {
    case 'translucent':
      return 'rgba(255, 255, 255, 0.5)';
    case 'white':
      return '#ffffff';
    case 'dashes':
      return 'dashed';
    case 'solid':
    default:
      return '#f0f0f0';
  }
};

const ContentContainer: React.FC<CardProps> = ({ type = 'solid', width = '100%', height = '100%', borderRadius = 0, children }) => {
  return <StyledCard type={type} width={width} height={height} borderRadius={borderRadius}>{children}</StyledCard>;
};

export default ContentContainer;