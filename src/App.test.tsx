import { render, screen } from '@testing-library/react'
import App from './App.tsx'

it('should render a div with a paragraph containing the specified text', () => {
    render(<App />)
    const message = screen.queryByText(/Vite and React/i)
    expect(message).toBeVisible()
})