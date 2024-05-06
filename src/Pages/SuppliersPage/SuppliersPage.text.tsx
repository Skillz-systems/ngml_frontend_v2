import { render } from '@testing-library/react';
import SuppliersPage from './SuppliersPage'; 

describe('SuppliersPage', () => {
 it('renders without crashing', () => {
    const { container } = render(<SuppliersPage />);
    expect(container).toBeInTheDocument();
 });
});
