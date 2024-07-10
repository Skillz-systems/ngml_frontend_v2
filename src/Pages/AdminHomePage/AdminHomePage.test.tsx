import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import { store } from '../../Redux/store';
import AdminHomePage from './AdminHomePage';

describe('AdminHomePage', () => {
    it('renders the page and key components without crashing', () => {
        render(
            <Provider store={store}>
                <AdminHomePage />
            </Provider>
        );

        expect(screen.getByText('Un-Verified Staff')).toBeInTheDocument();

        expect(screen.getByText('New User Registration')).toBeInTheDocument();
    });


});
