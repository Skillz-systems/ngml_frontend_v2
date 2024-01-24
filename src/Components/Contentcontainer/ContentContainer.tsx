import React, { ReactNode } from 'react';

interface ContentContainerProps {
  type?: 'translucent' | 'white' | 'dashes' | 'solid';
  width?: string;
  height?: string;
  borderRadius?: number;
  children: ReactNode;
}

/**
 * @component ContentContainer
 * @description
 * A dynamic container component that can be of type translucent, white, dashes, or solid.
 * It allows customization of width, height, and border-radius, providing different styles based on the specified type.
 *
 * @props
 * @property {string} [type='solid'] - Type of the container. Accepts 'translucent', 'white', 'dashes', or 'solid'.
 * @property {string} [width='100%'] - The width of the container.
 * @property {string} [height='100%'] - The height of the container.
 * @property {number} [borderRadius=0] - The border radius of the container, useful for nested cards.
 * @property {ReactNode} children - The content to be displayed inside the container.
 */
const ContentContainer: React.FC<ContentContainerProps> = ({
  type = 'solid',
  width = '100%',
  height = '100%',
  borderRadius = 0,
  children
}) => {
  // Define styles based on the type of container
  const getContainerStyles = () =>{
  return {
    width,
    height,
    borderRadius,
    backgroundColor: type === 'translucent' ? 'rgba(255, 255, 255, 0.7)' :
                      type === 'white' ? 'white' :
                      type === 'dashes' ? 'transparent' : 'solid',
    border: type === 'dashes' ? '1px dashed' : '1px solid',
    borderColor: type === 'dashes' ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
    padding: '20px',
    // Add more styles based on your needs
  };
};

const containerStyles = getContainerStyles()

  return (
    <div className="my-4 mx-auto" style={containerStyles}>
      {children}
    </div>
  );
};

export default ContentContainer;