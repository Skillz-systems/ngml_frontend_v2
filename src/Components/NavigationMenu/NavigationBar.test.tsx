import '@testing-library/jest-dom';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import NavigationBar, { NavigationBarProps } from './NavigationBar';

describe('NavigationBar', () => {
    const mockOnClick = jest.fn();

    const renderNavigationBar = (props?: NavigationBarProps): RenderResult => {
        return render(
            <NavigationBar
                upLabel="Up"
                downLabel="Down"
                leftIcon={<div>Left Icon</div>}
                rightIcon={<div>Right Icon</div>}
                onClick={mockOnClick}
                {...props}
            />
        );
    };

    it('renders with default props', () => {
        const { getByText } = renderNavigationBar();

        expect(getByText('Up')).toBeInTheDocument();
        expect(getByText('Down')).toBeInTheDocument();
    });

    it('handles click event', () => {
        const { getByText } = renderNavigationBar();

        fireEvent.click(getByText('Up'));

        expect(mockOnClick).toHaveBeenCalled();
    });

    it('toggles sub-menu visibility', () => {
        const { getByText } = renderNavigationBar({ subMenu: [{ label: 'SubMenu 1' }] });
        const subMenuToggle = getByText('⌄');

        fireEvent.click(subMenuToggle);

        expect(getByText('SubMenu 1')).toBeInTheDocument();

        fireEvent.click(subMenuToggle);

        expect(() => getByText('SubMenu 1')).toThrow(); // Sub-menu should be hidden
    });
});
