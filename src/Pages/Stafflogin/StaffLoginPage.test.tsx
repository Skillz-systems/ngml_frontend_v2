import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StaffLoginPage from './StaffLoginPage';

test('renders password reset page with form elements', () => {
  const { getByPlaceholderText, getByLabelText, getByText } = render(<StaffLoginPage />);

  // Check if email and password inputs are rendered
  const emailInput = getByPlaceholderText('Enter your email');
  const passwordInput = getByPlaceholderText('Enter a password');
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  // Check if login button is rendered
  const loginButton = getByText('Login');
  expect(loginButton).toBeInTheDocument();
});

test('validates email input', () => {
  const { getByPlaceholderText, getByText } = render(<StaffLoginPage />);

  const emailInput = getByPlaceholderText('Enter your email');
  const passwordInput = getByPlaceholderText('Enter a password');
  const loginButton = getByText('Login');

  // Test case: empty email
  fireEvent.change(emailInput, { target: { value: '' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(loginButton);
  expect(getByText('Email is required')).toBeInTheDocument();

  // Test case: invalid email format
  fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
  fireEvent.click(loginButton);
  expect(getByText('Invalid email address')).toBeInTheDocument();
});

test('validates password input', () => {
  const { getByPlaceholderText, getByText } = render(<StaffLoginPage />);

  const emailInput = getByPlaceholderText('Enter your email');
  const passwordInput = getByPlaceholderText('Enter a password');
  const loginButton = getByText('Login');

  // Test case: empty password
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: '' } });
  fireEvent.click(loginButton);
  expect(getByText('Password is required')).toBeInTheDocument();
});