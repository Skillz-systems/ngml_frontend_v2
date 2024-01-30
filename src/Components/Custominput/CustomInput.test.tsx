import { fireEvent, render, screen } from '@testing-library/react';
import CustomInput from './CustomInput';

describe('CustomInput', () => {
    it('renders input with label', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} />);
        const labelElement = screen.getByText('Username');
        const inputElement = screen.getByRole('textbox');

        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onChange when input value changes', () => {
        const mockOnChange = vi.fn();
        render(<CustomInput type="text" label="Username" value="" onChange={mockOnChange} />);
        const inputElement = screen.getByRole('textbox');

        fireEvent.change(inputElement, { target: { value: 'testUser' } });
        expect(mockOnChange).toHaveBeenCalledWith('testUser');
    });

    it('renders select with options', () => {
        render(
            <CustomInput type="select" label="Select Option" value="" onChange={() => { }} options={['Option 1', 'Option 2']} />
        );
        const labelElement = screen.getByText('Select Option');
        const selectElement = screen.getByRole('combobox');

        expect(labelElement).toBeInTheDocument();
        expect(selectElement).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('calls onChange when select value changes', () => {
        const mockOnChange = vi.fn();
        render(
            <CustomInput type="select" label="Select Option" value="" onChange={mockOnChange} options={['Option 1', 'Option 2']} />
        );
        const selectElement = screen.getByRole('combobox');

        fireEvent.change(selectElement, { target: { value: 'Option 1' } });
        expect(mockOnChange).toHaveBeenCalledWith('Option 1');
    });

    it('renders textarea', () => {
        render(<CustomInput type="textarea" label="Description" value="" onChange={() => { }} />);
        const labelElement = screen.getByText('Description');
        const textareaElement = screen.getByRole('textbox');

        expect(labelElement).toBeInTheDocument();
        expect(textareaElement).toBeInTheDocument();
    });

    it('calls onChange when textarea value changes', () => {
        const mockOnChange = vi.fn();
        render(<CustomInput type="textarea" label="Description" value="" onChange={mockOnChange} />);
        const textareaElement = screen.getByRole('textbox');

        fireEvent.change(textareaElement, { target: { value: 'Test description' } });
        expect(mockOnChange).toHaveBeenCalledWith('Test description');
    });

    it('renders checkbox', () => {
        render(<CustomInput type="checkbox" label="Agree" value={false} onChange={() => { }} />);
        const labelElement = screen.getByText('Agree');
        const checkboxElement = screen.getByRole('checkbox');

        expect(labelElement).toBeInTheDocument();
        expect(checkboxElement).toBeInTheDocument();
    });

    it('renders radio button', () => {
        render(<CustomInput type="radio" label="Radio" value="radioValue" onChange={() => { }} options={['Option1', 'Option2']} />);
        const radioElement = screen.getByLabelText('Option1');
        expect(radioElement).toBeInTheDocument();
        expect(radioElement).toHaveAttribute('type', 'radio');
    });

});