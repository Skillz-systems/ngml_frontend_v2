// import { fireEvent, render } from '@testing-library/react';
// import CustomerDetail from './CustomerDetail';

// test('renders customer detail form', () => {
//     const { getByPlaceholderText } = render(<CustomerDetail />);

//     // Fill in form inputs
//     fireEvent.change(getByPlaceholderText('Enter Company Registered Name'), { target: { value: 'Example Company' } });
//     fireEvent.change(getByPlaceholderText('Enter Company Email Address'), { target: { value: 'example@example.com' } });
//     fireEvent.change(getByPlaceholderText('Company Phone Number'), { target: { value: '1234567890' } });
//     fireEvent.change(getByPlaceholderText('Enter Company Representative'), { target: { value: 'John Doe' } });
//     fireEvent.change(getByPlaceholderText('Enter Representative Email'), { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(getByPlaceholderText('Ujv Partner'), { target: { value: 'Ujv Partner' } });
//     fireEvent.change(getByPlaceholderText('Industrial'), { target: { value: 'Industrial' } });

//     // Check if form inputs are filled correctly
//     expect(getByPlaceholderText('Enter Company Registered Name')).toHaveValue('Example Company');
//     expect(getByPlaceholderText('Enter Company Email Address')).toHaveValue('example@example.com');
//     expect(getByPlaceholderText('Company Phone Number')).toHaveValue('1234567890');
//     expect(getByPlaceholderText('Enter Company Representative')).toHaveValue('John Doe');
//     expect(getByPlaceholderText('Enter Representative Email')).toHaveValue('john.doe@example.com');
//     expect(getByPlaceholderText('Ujv Partner')).toHaveValue('Ujv Partner');
//     expect(getByPlaceholderText('Industrial')).toHaveValue('Industrial');
// });






import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe   , it } from 'vitest';
import { store } from '../../Redux/store';
import CustomerDetail from './CustomerDetail';

describe('ConnectProject', () => {
    it('renders the page and key components without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CustomerDetail />
                </MemoryRouter>
            </Provider>
        );

    });
});