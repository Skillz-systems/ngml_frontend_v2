import { describe, it, expect, vi } from 'vitest';
import { render, screen} from '@testing-library/react';
import SelectedDateTable from './SelectedDateTable';

vi.mock('@mui/material/Modal', () => {
    const MockModal = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
    return {
      __esModule: true,
      default: MockModal,
    };
  });

describe('SelectedDateTable', () => {
  it('renders correctly', () => {
    render(<SelectedDateTable />);
    expect(screen.getByText('COMPANY NAME')).toBeInTheDocument();
  });

  

});
