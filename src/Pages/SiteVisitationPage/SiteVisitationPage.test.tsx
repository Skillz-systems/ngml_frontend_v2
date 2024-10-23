
// import { render } from '@testing-library/react';
// import SiteVisitationPage from './SiteVisitationPage';

// describe('SiteVisitationPage', () => {
//    it('renders correctly', () => {
//       const { getByText } = render(<SiteVisitationPage />);
//       expect(getByText('PICK DATE FOR SITE VISIT')).toBeInTheDocument();
//    });

// });



import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe   , it } from 'vitest';
import { store } from '../../Redux/store';
import SiteVisitationPage from './SiteVisitationPage';



describe('ConnectProject', () => {
    it('renders the page and key components without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SiteVisitationPage />
                </MemoryRouter>
            </Provider>
        );

    });
});