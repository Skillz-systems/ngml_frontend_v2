import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopNavigationBar from './TopNavigationBar';

describe('TopNavigationBar', () => {
  it('renders the company logo', () => {
    render(<TopNavigationBar />);
    const logoImage = screen.getByAltText('nnpc logo');
    expect(logoImage).toBeInTheDocument();
  });
 
});
