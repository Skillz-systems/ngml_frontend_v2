import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * ContentContainer is a flexible container component that can have different visual styles based on the type.
 * It supports various configurations such as type, radius, width, and height.
 *
 * @component
 * @example
 * const MyComponent = () => (
 *   <ContentContainer type="translucent" radius={10} width="100%" height="100%">
 *     <p>Content goes here</p>
 *   </ContentContainer>
 * );
 *
 * @param {object} props - React props for the ContentContainer component.
 * @param {string} [props.type='solid'] - The type of the content container (translucent, white, dashes, solid).
 * @param {number} [props.radius=0] - The border-radius of the container.
 * @param {string} [props.width='100%'] - The width of the container.
 * @param {string} [props.height='100%'] - The height of the container.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @returns {React.FC} Returns the ContentContainer component.
 */

interface CardProps {
  type?: 'translucent' | 'white' | 'dashes' | 'solid';
  radius?: number;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

// Define default values for props
const defaultProps: CardProps = {
  type: 'solid',
  radius: 0,
  width: '100%',
  height: '100%',
  children: ''
};

const ContentContainer: React.FC<CardProps> = (props) => {
  const { children, type, radius, width, height } = { ...defaultProps, ...props };

   /**
   * getCardStyles - Function to determine card styles based on the type.
   *
   * @private
   * @returns {string} - The CSS classes for the specified type.
   */
  
  const getCardStyles = () => {
    switch (type) {
      case 'translucent':
        return 'bg-yellow-100 border-yellow-500 border-dashed';
      case 'white':
        return 'bg-white border';
      case 'dashes':
        return 'border-dashed border-4';
      case 'solid':
      default:
        return 'bg-gray-300 border';
    }
  };

  return (
    <div
      className={clsx(
        'p-4',
        'rounded-md',
        'shadow-md',
        getCardStyles(),
        { 'rounded-none': radius === 0 } // Handle special case for zero radius
      )}
      style={{ width, height }}
      data-testid="content-container"
    >
      {children}
    </div>
  );
};

ContentContainer.propTypes = {
  type: PropTypes.oneOf(['translucent', 'white', 'dashes', 'solid']),
  radius: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ContentContainer;