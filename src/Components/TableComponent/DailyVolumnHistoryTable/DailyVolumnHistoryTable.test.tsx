import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import DailyVolumnHistoryTable from './DailyVolumnHistoryTable';
import { store } from '@/Redux/store';


vi.mock('@/Data', () => ({
  DailyVolumnHistoryData: [
    { id: 1, sn: '001', seriesname: 'Series A', datesent: '01/2023', rate: '50', value: '100', amount: '5000' },
  ]
}));

describe('DailyVolumnHistoryTable', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <DailyVolumnHistoryTable customerId={null} customerSiteId={null} />
      </Provider>
    );
  });

  it('displays the correct number of entries', () => {
    render(
      <Provider store={store}>
        <DailyVolumnHistoryTable customerId={null} customerSiteId={null} />
      </Provider>
    );
  });
});
