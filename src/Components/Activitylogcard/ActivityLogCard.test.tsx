import { render, screen } from '@testing-library/react';
import ActivityLogCard from './ActivityLogCard';

describe('ActivityLogCard', () => {
    test('renders card with title, text, and dateTime', () => {
        const title = 'Test Title';
        const text = 'Test Text';
        const dateTime = new Date('2024-02-12T12:00:00');

        render(<ActivityLogCard title={title} text={text} dateTime={dateTime} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        // Use a regular expression to match the format of the date and time
        expect(screen.getByText(/(\d{1,2} \w{3}); (\d{1,2}:\d{2}[ap]m)/i)).toBeInTheDocument();
    });

    test('renders card with button', () => {
        const title = 'Test Title';
        const text = 'Test Text';
        const dateTime = new Date('2024-02-12T12:00:00');
        const buttonLabel = 'Click Me';
        const button = <button>{buttonLabel}</button>;

        render(<ActivityLogCard title={title} text={text} dateTime={dateTime} button={button} />);

        expect(screen.getByText(buttonLabel)).toBeInTheDocument();
    });

    test('renders card without button', () => {
        const title = 'Test Title';
        const text = 'Test Text';
        const dateTime = new Date('2024-02-12T12:00:00');

        render(<ActivityLogCard title={title} text={text} dateTime={dateTime} />);

        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});