import EoiPage from '@/Pages/EoiPage/EoiPage';
import { store } from '@/Redux/store';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('EoiPage Component', () => {
    it('renders the EoiPage and submits the form', async () => {
        // Render the component inside a Redux Provider and Router context
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EoiPage />
                </BrowserRouter>
            </Provider>
        );

        // Assert that the initial elements are rendered
        expect(screen.getByText('REASON FOR REQUEST')).toBeInTheDocument();
        expect(screen.getByText('Upload')).toBeInTheDocument();

        // Open the modal
        fireEvent.click(screen.getByText('REASON FOR REQUEST'));

        // Wait for the modal to open and check for modal elements
        await waitFor(() => {
            expect(screen.getByText('Reason For Request')).toBeInTheDocument();
        });

        // Simulate filling out a form field (assuming text input)


        // Submit the form
        const submitButton = screen.getByText(/Submit EOI Request/i);
        fireEvent.click(submitButton);

        // Wait for form submission (this can vary depending on your UI feedback)
        await waitFor(() => {
            expect(screen.getByText(/Submitting.../i)).toBeInTheDocument();
        });

        // Expect some success message or result after submission

    });
});