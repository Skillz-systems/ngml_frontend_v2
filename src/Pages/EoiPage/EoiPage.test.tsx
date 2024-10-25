import EoiPage from '@/Pages/EoiPage/EoiPage';
import { store } from '@/Redux/store';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('EoiPage Component', () => {
    it('renders the EoiPage and submits the form', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EoiPage />
                </BrowserRouter>
            </Provider>
        );

       
        expect(screen.getByText('REASON FOR REQUEST')).toBeInTheDocument();
        expect(screen.getByText('Upload')).toBeInTheDocument();

     
        fireEvent.click(screen.getByText('REASON FOR REQUEST'));

       
        await waitFor(() => {
            expect(screen.getByText('Reason For Request')).toBeInTheDocument();
        });

     
        const submitButton = screen.getByText(/Submit EOI Request/i);
        fireEvent.click(submitButton);

      
        await waitFor(() => {
            expect(screen.getByText(/Submitting.../i)).toBeInTheDocument();
        });

    });
});