import { render, screen } from '@testing-library/react';
import StatisticCard from './StatisticCard';

describe('StatisticCard', () => {

    it('renders primary card with label and value', () => {
        render(
            <StatisticCard
                type="primary"
                label="Connect"
                value={100}
                text="Primary Text"
                reportText="Report Text"
                reportIcon={<div>Report Icon</div>}
            />
        );

        const labelElement = screen.getByText('Connect');
        const valueElement = screen.getByText('100');


        expect(labelElement).toBeInTheDocument();
        expect(valueElement).toBeInTheDocument();
    });

    it('renders secondary card with label and value', () => {
        render(
            <StatisticCard
                type="secondary"
                label="Service"
                value={200}
                text="Secondary Text"
                reportText="Report Text"
                reportIcon={<div>Report Icon</div>}
            />
        );

        const labelElement = screen.getByText('Service');
        const valueElement = screen.getByText('200');


        expect(labelElement).toBeInTheDocument();
        expect(valueElement).toBeInTheDocument();

    });

    it('renders tertiary card with icon, text, report text, and report icon', () => {
        const icon = <img src="/path/to/icon.png" alt="icon" />;
        const reportIcon = <img src="/path/to/report-icon.png" alt="report-icon" />;

        render(
            <StatisticCard
                type="tertiary"
                label="Connect"
                value={100}
                icon={icon}
                text="Invoice Advice"
                reportText="Reports"
                reportIcon={reportIcon}
            />
        );

        const iconElement = screen.getByAltText('icon');
        const textElement = screen.getByText('Invoice Advice');
        const reportTextElement = screen.getByText('Reports');
        const reportIconElement = screen.getByAltText('report-icon');

        expect(iconElement).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
        expect(reportTextElement).toBeInTheDocument();
        expect(reportIconElement).toBeInTheDocument();
    });
});