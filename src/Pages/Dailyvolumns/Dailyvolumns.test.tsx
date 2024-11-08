import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dailyvolumns from './Dailyvolumns';
import '@testing-library/jest-dom';
import { store } from '@/Redux/store';


vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useLocation: () => ({
    search: '',
    pathname: '',
  }),
}));

describe('Dailyvolumns Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Dailyvolumns />
      </Provider>
    );
    expect(screen.getByText('Daily Volumes History')).toBeInTheDocument();
  });
});
