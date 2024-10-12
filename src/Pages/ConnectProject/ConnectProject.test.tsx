// import { fireEvent, render, screen } from '@testing-library/react';
// import ConnectProject from './ConnectProject';

// describe('ConnectProject Component', () => {    

//     test('should update project start date', () => {
//         render(<ConnectProject />);
//         const startDateInput = screen.getByText(/Project Start Date/i);

//         fireEvent.change(startDateInput);

//     });

//     test('should update project end date', () => {
//         render(<ConnectProject />);
//         const endDateInput = screen.getByText(/Project End Date/i);

//         fireEvent.change(endDateInput);

//     });

//     test('renders confirm selection button when dates are selected', () => {
//         render(<ConnectProject />);
//         const startDateInput = screen.getByText(/Project Start Date/i);
//         const endDateInput = screen.getByText(/Project End Date/i);

//         fireEvent.change(startDateInput);
//         fireEvent.change(endDateInput);
//     });

// });



import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe   , it } from 'vitest';
import { store } from '../../Redux/store';
import ConnectProject from './ConnectProject';

describe('ConnectProject', () => {
    it('renders the page and key components without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectProject />
                </MemoryRouter>
            </Provider>
        );

    });
});
