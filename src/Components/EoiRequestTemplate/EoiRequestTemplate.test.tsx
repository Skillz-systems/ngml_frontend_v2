// tests/EoiRequestTemplate.test.tsx

import { render, screen } from '@testing-library/react';
import EoiRequestTemplate from './EoiRequestTemplate';

describe('EoiRequestTemplate', () => {
 test('renders correctly and shows "Request Approval" button for new status', () => {
    render(
      <EoiRequestTemplate
        dateTime="2023-04-01 10:00 AM"
        status="New"
        companyName="Example Company"
        companyEmail="example@example.com"
        companyNumber="123456789"
        statusHeading="New"
        statusStyle={{ backgroundColor: 'lightgreen' }}
        approverName=""
        disapprovalReason=""
        handleClose={() => {}}
      />
    );

    expect(screen.getByText('EOI REQUEST')).toBeInTheDocument();

    const requestApprovalButton = screen.getByRole('button', { name: /Request Approval/i });
    expect(requestApprovalButton).toBeInTheDocument();
 });
});
