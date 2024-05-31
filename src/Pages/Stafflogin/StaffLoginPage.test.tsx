import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { store } from '../../Redux/store';
import StaffLoginPage from './StaffLoginPage';

// Mock the useLoginMutation hook
vi.mock('../../Redux/Features/Auth/authService', () => ({
  useLoginMutation: vi.fn(() => [
    vi.fn(() => Promise.resolve({ data: 'test data' })),
    { isLoading: false, error: null }
  ])
}));

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => vi.fn(),
  };
});

describe('StaffLoginPage', () => {
  it('renders login form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <StaffLoginPage />
        </MemoryRouter>
      </Provider>
    );

    // Check if the login form fields are rendered
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('shows validation errors when form is submitted empty', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <StaffLoginPage />
        </MemoryRouter>
      </Provider>
    );

    // Simulate form submission
    fireEvent.click(screen.getByText('Login'));

    // Check if validation messages are displayed
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  it('shows error for invalid email format', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <StaffLoginPage />
        </MemoryRouter>
      </Provider>
    );

    // Enter invalid email and valid password
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: 'password' } });

    // Simulate form submission
    fireEvent.click(screen.getByText('Login'));

    // Check if validation message for invalid email is displayed
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument();
  });

  it('clears form and errors on New Sign In click', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <StaffLoginPage />
        </MemoryRouter>
      </Provider>
    );

    // Enter some data in the form
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: 'password' } });

    // Simulate form submission to generate errors
    fireEvent.click(screen.getByText('Login'));

    // Click on New Sign In button
    fireEvent.click(screen.getByText('New Sign In'));

    // Check if the form is cleared and errors are removed
    expect(screen.getByPlaceholderText('Enter your email')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter your password')).toHaveValue('');
    expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
  });
});