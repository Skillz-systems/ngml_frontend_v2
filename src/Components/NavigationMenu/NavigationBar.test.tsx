import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  const mockNavigationLinks = [
    {
      id: 1,
      name: 'Home',
      to: '/',
      icon: 'home-icon.png',
    },
    {
      id: 2,
      name: 'About',
      to: '/about',
      icon: 'about-icon.png',
    },
  ];

  test('renders NavigationBar component with provided navigation links', () => {
    render(<NavigationBar Navigationlinks={mockNavigationLinks} />);
    
    // Ensure UniqueUser component is rendered
    expect(screen.getByAltText('happyavatar')).toBeInTheDocument();

    // Ensure NavigationBarItem components are rendered
    mockNavigationLinks.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test('handles item click correctly', () => {
    render(<NavigationBar Navigationlinks={mockNavigationLinks} />);

    // Click on the first navigation item
    fireEvent.click(screen.getByText('Home'));

    // Ensure that the first item is now active
    expect(screen.getByText('Home').parentElement).toHaveStyle('background-color: rgba(0, 0, 0, 0)');

    // Click on the second navigation item
    fireEvent.click(screen.getByText('About'));

    // Ensure that the second item is now active
    expect(screen.getByText('About').parentElement).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  });
});
