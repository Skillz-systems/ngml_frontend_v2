import { render } from '@testing-library/react';
import CustomerPageDetails from './CustomerPageDetails';

describe('CustomerPageDetails component', () => {
    test('renders without crashing', () => {
        render(<CustomerPageDetails />);
    });

    test('renders StatisticDynamicCardTwo components with correct props', () => {
        const { getByText, getByAltText } = render(<CustomerPageDetails />);

        // Primary StatisticDynamicCardTwo
        expect(getByAltText('firewood icon')).toBeInTheDocument();
        expect(getByText('Consumed Volume')).toBeInTheDocument();

        // Secondary StatisticDynamicCardTwo
        expect(getByAltText('firewood2 icon')).toBeInTheDocument();
        expect(getByText('Yesterday\'s Consumed Volume')).toBeInTheDocument();
    });

    test('renders Chart component with correct props', () => {
        const { getByText } = render(<CustomerPageDetails />);

        expect(getByText('Customer Consumption Chart')).toBeInTheDocument();
    });

    // You can add more specific tests for other functionalities or elements as needed
});