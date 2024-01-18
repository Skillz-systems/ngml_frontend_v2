import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Badge from './Badge';// Import your Badge component

describe('Badge Component', () => {
  test('renders with custom label', () => {
    const { getByText } = render(<Badge type="primary" label="Custom Label" />);
    const badgeElement = getByText(/Custom Label/i);
    expect(badgeElement).toBeInTheDocument();
  });

  test.each([
    ['primary', '#53B052'],
    ['secondary', '#D2F69E'],
    ['transparent', '#E2E4EB'],
    ['outline', 'transparent']
  ])('renders with outline badge type', (badgeType, expectedColor) => {
    const { getByText } = render(
      <Badge
        type={badgeType as 'primary' | 'secondary' | 'transparent' | 'outline'}
        label="Type Test"
      />
    );
    const badgeElement = getByText(/Type Test/i);
    expect(badgeElement).toHaveStyle({
      backgroundColor: expect.stringMatching(expectedColor)
    });
  });

  test('renders with custom styles', () => {
    const { getByText } = render(
      <Badge
        type="primary"
        label="Custom Style Test"
        width="120px"
        height="50px"
        fontSize="18px"
        radius="8px"
        fontWeight="normal"
        icon={<div data-testid="test-icon" />}
        iconHeight="24px"
        iconWidth="24px"
        iconColor="#FF0000"
        columnGap="10px"
        onIconClick={() => {}}
      />
    );
    const badgeElement = getByText(/Custom Style Test/i);
    expect(badgeElement).toHaveStyle({
      width: '120px',
      height: '50px',
      fontSize: '18px',
      borderRadius: '8px',
      fontWeight: 'normal'
    });
  });
});
