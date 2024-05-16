import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import NavigationBar from './NavigationBar';

const mockToggleNavigationBar = vi.fn();

const mockNavigationLinks = [
  { id: 1, name: 'Home', to: '/home', icon: 'home-icon-path' },
  { id: 2, name: 'Profile', to: '/profile', icon: 'profile-icon-path' },
];

describe('NavigationBar Component', () => {

  it('should display the correct number of navigation items', () => {
    render(
      <Router>
        <NavigationBar Navigationlinks={mockNavigationLinks} isNavigationBarVisible={true} toggleNavigationBar={mockToggleNavigationBar} />
      </Router>
    );

    const navigationItems = screen.getAllByRole('link');
    expect(navigationItems.length).toBe(mockNavigationLinks.length);
  });

});
