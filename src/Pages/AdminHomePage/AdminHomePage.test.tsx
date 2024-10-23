import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { store } from '../../Redux/store';
import AdminHomePage from './AdminHomePage';

describe('AdminHomePage', () => {
    it('renders the page and key components without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AdminHomePage />
                </MemoryRouter>
            </Provider>
        );

        // expect(screen.getByText('Staff')).toBeInTheDocument();
        expect(screen.getByText('Upcoming Site Visits')).toBeInTheDocument();
    });
});
