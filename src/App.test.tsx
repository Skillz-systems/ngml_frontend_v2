import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';


type ChildrenProps = {
    children?: React.ReactNode;
  };
  

vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: ChildrenProps) => <div>{children}</div>, 
  Route: ({ children }: ChildrenProps) => <div>{children}</div>, 
  Routes: ({ children }: ChildrenProps) => <div>{children}</div>, 
}));

vi.mock('./Components/Routes/Index', () => ({
    PrivateAdminRoute: ({ children }: ChildrenProps) => <div>{children}</div>,
  routes: {
    AuthRoutes: [],
    AdminRoutes: [],
    ClientRoutes: [],
    StaffRoutes: [],
    SupplierRoutes: [],
  }, 
}));

vi.mock('react-toastify', () => ({
  ToastContainer: () => <div></div>, 
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    
    expect(container).toBeInTheDocument();
  });
});
