import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AdminHomePage from './AdminHomePage';

describe('AdminHomePage', () => {
    it('renders the page and key components without crashing', () => {
        render(<AdminHomePage />);

        expect(screen.getByText('Welcome John,')).toBeInTheDocument();

        expect(screen.getByText('Un-Verified Staff')).toBeInTheDocument();

        expect(screen.getByText('New User Registration')).toBeInTheDocument();
    });


});
