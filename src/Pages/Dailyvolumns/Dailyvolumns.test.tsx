import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Dailyvolumns from './Dailyvolumns';
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useLocation: () => ({
    search: '',
    pathname: '',
  }),
}));

vi.mock('../../assets/index', () => ({
  default: {
    upload: 'upload.png',
    cancel: 'cancel.png',
  },
}));

describe('Dailyvolumns Component', () => {
  it('renders without crashing', () => {
    render(<Dailyvolumns />);
    expect(screen.getByText('Daily Volumes History')).toBeInTheDocument();
  });
});