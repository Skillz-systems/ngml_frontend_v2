import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DailyVolumnTable from './DailyVolumnTable';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { customersApi } from '@/Redux/Features/Customer/customerVolume';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customersApi.middleware),
});

describe('DailyVolumnTable', () => {
  it('renders the data grid', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DailyVolumnTable />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
