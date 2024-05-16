
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StaffLoginPage from './StaffLoginPage';


describe('StaffLoginPage', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <StaffLoginPage />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/ngml staff login/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders login button', () => {
    render(
      <MemoryRouter>
        <StaffLoginPage />
      </MemoryRouter>
    );
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    render(
      <MemoryRouter>
        <StaffLoginPage />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    // Type in the email and password
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Click the login button
    fireEvent.click(loginButton);

  });
});
