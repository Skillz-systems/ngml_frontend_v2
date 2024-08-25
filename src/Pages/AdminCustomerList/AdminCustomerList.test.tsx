// import { fireEvent, render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom'; 
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import AdminCustomerList from './AdminCustomerList';
// import rootReducer from '@/Redux/rootReducer';


// const renderWithProviders = (ui: React.ReactElement, { store } = { store: configureStore({ reducer: { customer:  rootReducer } }) }) => {
//     return render(
//         <Provider store={store}>
//             <BrowserRouter>{ui}</BrowserRouter>
//         </Provider>
//     );
// };

// describe('AdminCustomerList', () => {
//     test('renders correctly', () => {
//         renderWithProviders(<AdminCustomerList />);

//         const addCustomerButton = screen.getByText('Add Customer');
//         expect(addCustomerButton).toBeInTheDocument();
//     });

//     test('opens modal when "Add Customer" button is clicked', () => {
//         renderWithProviders(<AdminCustomerList />);

//         const modal = screen.queryByText('Create New Customer');
//         expect(modal).toBeNull();

//         const addCustomerButton = screen.getByText('Add Customer');
//         fireEvent.click(addCustomerButton);

//         const modalTitle = screen.getByText('Create New Customer');
//         expect(modalTitle).toBeInTheDocument();
//     });

//     test('closes modal when "Cancel" button is clicked', () => {
//         renderWithProviders(<AdminCustomerList />);

//         const addCustomerButton = screen.getByText('Add Customer');
//         fireEvent.click(addCustomerButton);

//         const modalTitle = screen.getByText('Create New Customer');
//         expect(modalTitle).toBeInTheDocument();

//         const cancelButton = screen.getByText('Cancel');
//         fireEvent.click(cancelButton);

//         const closedModal = screen.queryByText('Create New Customer');
//         expect(closedModal).toBeNull();
//     });
// });




import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AdminCustomerList from './AdminCustomerList';
import rootReducer from '@/Redux/rootReducer';
import { api } from '@/Redux/api';  

const renderWithProviders = (ui: React.ReactElement) => {
    const store = configureStore({
        reducer: rootReducer,  
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),  
    });

    return render(
        <Provider store={store}>
            <BrowserRouter>{ui}</BrowserRouter>
        </Provider>
    );
};

describe('AdminCustomerList', () => {
    test('renders correctly', () => {
        renderWithProviders(<AdminCustomerList />);

        const addCustomerButton = screen.getByText('Add Customer');
        expect(addCustomerButton).toBeInTheDocument();
    });

    test('opens modal when "Add Customer" button is clicked', () => {
        renderWithProviders(<AdminCustomerList />);

        const modal = screen.queryByText('Create New Customer');
        expect(modal).toBeNull();

        const addCustomerButton = screen.getByText('Add Customer');
        fireEvent.click(addCustomerButton);

        const modalTitle = screen.getByText('Create New Customer');
        expect(modalTitle).toBeInTheDocument();
    });

    test('closes modal when "Cancel" button is clicked', () => {
        renderWithProviders(<AdminCustomerList />);

        const addCustomerButton = screen.getByText('Add Customer');
        fireEvent.click(addCustomerButton);

        const modalTitle = screen.getByText('Create New Customer');
        expect(modalTitle).toBeInTheDocument();

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        const closedModal = screen.queryByText('Create New Customer');
        expect(closedModal).toBeNull();
    });
});



