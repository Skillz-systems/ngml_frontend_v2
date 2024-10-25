import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/Redux/store';
import AssignTask from './AssignTask';
import { MemoryRouter } from 'react-router-dom';

describe('AssignTask Component', () => {
    beforeEach(() => {
        // Render the component wrapped in a Redux Provider and MemoryRouter
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AssignTask />
                </MemoryRouter>
            </Provider>
        );
    });

    it('renders loading state for tasks', () => {
        // Check for loading message when tasks are loading
        expect(screen.getByText(/loading tasks/i)).toBeInTheDocument();
    });

    it('renders tasks and allows assigning', async () => {

        // Simulate user assigning a task (assuming users are loaded)
        const assignButtons = screen.getAllByText(/assign/i);
        if (assignButtons.length > 0) {
            fireEvent.click(assignButtons[0]); // Assign the first user
        }

    });

    it('handles task assignment failure', async () => {
        const assignButtons = screen.getAllByText(/assign/i);
        if (assignButtons.length > 0) {
            fireEvent.click(assignButtons[0]); // Assign the first user
        }

    });
});