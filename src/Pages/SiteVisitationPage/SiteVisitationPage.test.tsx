
import { render } from '@testing-library/react';
import SiteVisitationPage from './SiteVisitationPage';

describe('SiteVisitationPage', () => {
   it('renders correctly', () => {
      const { getByText } = render(<SiteVisitationPage />);
      expect(getByText('PICK DATE FOR SITE VISIT')).toBeInTheDocument();
   });

});
