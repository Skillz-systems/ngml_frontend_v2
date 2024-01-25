// import '@testing-library/jest-dom';
// import { RenderResult, fireEvent, render } from '@testing-library/react';
// import NavigationBar, { NavigationBarProps } from './NavigationBar';
// import { vi } from 'vitest';


// describe('NavigationBar', () => {
//     const mockOnClick = vi.fn();

//     const renderNavigationBar = (props?: NavigationBarProps): RenderResult => {
//         return render(
//             <NavigationBar
//                 links={}
//             />
//         );
//     };

//     it('renders with default props', () => {
//         const { getByText } = renderNavigationBar();

//         expect(getByText('Up')).toBeInTheDocument();
//         expect(getByText('Down')).toBeInTheDocument();
//     });

//     it('handles click event', () => {
//         const { getByText } = renderNavigationBar();

//         fireEvent.click(getByText('Up'));

//         expect(mockOnClick).toHaveBeenCalled();
//     });

//     it('toggles sub-menu visibility', () => {
//         const { getByTestId, getByText, queryByText } = renderNavigationBar({ subMenu: [{ label: 'SubMenu 1' }] });
//         const subMenuToggle = getByTestId('KeyboardArrowDownIcon');
    
//         fireEvent.click(subMenuToggle);
    
//         expect(getByText('SubMenu 1')).toBeInTheDocument(); // Sub-menu should be visible
    
//         fireEvent.click(subMenuToggle);
    
//         expect(queryByText('SubMenu 1')).toBeNull(); // Sub-menu should be hidden
//     });
// });
