import { render } from '@testing-library/react';
import SupplierPaymentHistory from './SupplierPaymentHistory';

test('renders SupplierPaymentTable component', async () => {
 const { getByTestId } = render(<SupplierPaymentHistory />);
 const supplierPaymentTableElement = getByTestId('data-grid');
 expect(supplierPaymentTableElement).toBeInTheDocument();
});
