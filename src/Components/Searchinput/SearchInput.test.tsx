import { fireEvent, render } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
    const mockOnSearch = vi.fn();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<SearchInput onSearch={mockOnSearch} />);
    });

    it('calls onSearch prop when search button is clicked', () => {
        const { getByAltText } = render(<SearchInput onSearch={mockOnSearch} />);
        fireEvent.click(getByAltText('Search Logo'));
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });

    it('calls onSearch prop when enter key is pressed', () => {
        const { getByRole } = render(<SearchInput onSearch={mockOnSearch} />);
        const input = getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });

    it('displays placeholder text when query is empty', () => {
        const placeholderText = 'Search something...';
        const { getByText } = render(<SearchInput onSearch={mockOnSearch} placeholder={placeholderText} />);
        expect(getByText(placeholderText)).toBeInTheDocument();
    });

    it('displays no search results when no results match the query', () => {
        const { getByRole, queryByText } = render(<SearchInput onSearch={mockOnSearch} />);
        const input = getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Nonexistent' } });
        fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
        expect(queryByText('Test Result 1')).toBeNull();
        expect(queryByText('Test Result 2')).toBeNull();
    });

});