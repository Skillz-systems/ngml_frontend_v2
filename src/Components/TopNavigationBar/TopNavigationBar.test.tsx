import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TopNavigationBar from './TopNavigationBar';

describe('TopNavigationBar', () => {
  it('renders the company logo', () => {
    render(<TopNavigationBar />);
    const logoImage = screen.getByAltText('nnpc logo');
    expect(logoImage).toBeInTheDocument();
  });
});