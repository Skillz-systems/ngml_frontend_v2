import React, { ReactNode } from 'react';

/**
 * Props for the ContentContainer component.
 */
type CardProps = {
    /**
     * The type of the content container.
     * @default 'solid'
     */
    type?: 'translucent' | 'white' | 'dashes' | 'solid';
  
    /**
     * The border-radius of the container.
     * @default 0
     */
    radius?: number;
  
    /**
     * The width of the container.
     * @default '100%'
     */
    width?: string;
  
    /**
     * The height of the container.
     * @default '100%'
     */
    height?: string;
  
    /**
     * The content to be displayed inside the container.
     */
    children: ReactNode;
  };
  
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
   * @param {CardProps} props - Props for the ContentContainer component.
   * @param {string} [props.type='solid'] - The type of the content container (translucent, white, dashes, solid).
   * @param {number} [props.radius=0] - The border-radius of the container.
   * @param {string} [props.width='100%'] - The width of the container.
   * @param {string} [props.height='100%'] - The height of the container.
   * @param {React.ReactNode} props.children - The content to be displayed inside the container.
   * @returns {React.FC} Returns the ContentContainer component.
   */
  const ContentContainer: React.FC<CardProps> = ({
    type = 'solid',
    radius = 0,
    width = '100%',
    height = '100%',
    children,
  }) => {
    /**
     * getCardStyle - Function to determine card styles based on the type.
     *
     * @private
     * @returns {string} - The Tailwind CSS classes for the specified type.
     */
    const getCardStyle = () => {
      switch (type) {
        case 'translucent':
          return 'bg-transparent bg-opacity-50 border';
        case 'white':
          return 'bg-white border';
        case 'dashes':
          return 'border-dashed border-2';
        default:
          return 'bg-gray-200';
      }
    };
  
    return (
      <div
        className={`rounded-${radius} ${getCardStyle()} w-${width} h-${height} p-4`}
      >
        {children}
      </div>
    );
  };
  
  export default ContentContainer;