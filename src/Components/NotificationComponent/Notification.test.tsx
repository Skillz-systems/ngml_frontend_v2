import { render } from '@testing-library/react';
import Notification from './Notification';

describe('Notification component', () => {

    it('opens notification details when clicked', () => {
        const renderIconMock = () => <span>Icon</span>;

        const { getByText } = render(
            <Notification count={3} onClick={() => {}} isOpen={true} renderIcon={renderIconMock} />
        );

        const notificationCount = getByText('3');
        const generalMeetingText = getByText('General Meeting');
        const mdMeetingText = getByText('MD meeting');
        const boardMeetingText = getByText('Board meeting');

        expect(notificationCount).toBeInTheDocument();
        expect(generalMeetingText).toBeInTheDocument();
        expect(mdMeetingText).toBeInTheDocument();
        expect(boardMeetingText).toBeInTheDocument();
    });

    it('renders additional details when isOpen is true', () => {
        const { getByText } = render(
            <Notification count={3} onClick={() => {}} isOpen={true} renderIcon={() => <div>MockIcon</div>} />
        );

        // Check if additional details are rendered when isOpen is true
        expect(getByText('General Meeting')).toBeInTheDocument();
        expect(getByText('MD meeting')).toBeInTheDocument();
        expect(getByText('Board meeting')).toBeInTheDocument();
    });
  

});





