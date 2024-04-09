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

    it('applies default styles to text input', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('border-b', 'border-solid', 'border-2', 'border-gray-300');
        expect(inputElement).toHaveClass(' appearance-none block w-full px-3 py-3 border border-b border-solid border-2 border-gray-300 rounded-[13px] shadow-sm placeholder-gray-400 placeholder:italic pl-12 focus:outline-none focus:ring-gray-700 focus:border-lime-200 sm:text-sm pl-3');
        expect(inputElement).toHaveClass('appearance-none block w-full px-3 py-3 border border-b border-solid border-2 border-gray-300 rounded-[13px] shadow-sm placeholder-gray-400 placeholder:italic pl-12 focus:outline-none focus:ring-gray-700 focus:border-lime-200 sm:text-sm pl-3');
    });

    it('applies customStyle1 to select input', () => {
        render(
            <CustomInput
                type="select"
                label="Select Option"
                value=""
                onChange={() => { }}
                options={['Option 1', 'Option 2']}
                styleVariant="customStyle1"
            />
        );
        const selectElement = screen.getByRole('combobox');

        expect(selectElement).toHaveClass('border border-solid border-lime-500 placeholder:font-[400] font-[500] placeholder:italic placeholder-gray-400 pl-12 rounded-full w-full px-4 py-2 focus:outline-none focus:border-t-2 focus:ring-lime-500 focus:bg-gray-100 pl-3 appearance-none select-none');
    });

    it('applies custom styles to textarea', () => {
        render(<CustomInput type="textarea" label="Description" value="" onChange={() => { }} />);
        const textareaElement = screen.getByRole('textbox');

        expect(textareaElement).toHaveClass('border-b', 'border-solid', 'border-2', 'border-gray-300');
        expect(textareaElement).toHaveClass('appearance-none block w-full px-3 py-3 border border-b border-solid border-2 border-gray-300 rounded-[13px] shadow-sm placeholder-gray-400 placeholder:italic pl-12 focus:outline-none focus:ring-gray-700 focus:border-lime-200 sm:text-sm pl-3');
        expect(textareaElement).toHaveClass('focus:outline-none', 'focus:ring-gray-700', 'sm:text-sm');
    });

    it('applies custom styles to checkbox', () => {
        render(<CustomInput type="checkbox" label="Agree" value={false} onChange={() => { }} />);
        const checkboxElement = screen.getByRole('checkbox');

        expect(checkboxElement).toHaveClass('hidden');
    });

    it('applies custom styles to radio button', () => {
        render(<CustomInput type="radio" label="Radio" value="radioValue" onChange={() => { }} options={['Option1', 'Option2']} />);
        const radioElement = screen.getByLabelText('Option1');

        expect(radioElement).toHaveClass('w-5', 'h-5');
    });

    it('applies default style', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('border-b');
    });

    it('applies customStyle1', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} styleVariant="customStyle1" />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('rounded-full');
    });

    it('applies customStyle2', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} styleVariant="customStyle2" />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('focus:bg-gray-200');
    });

    it('applies customStyle3', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} styleVariant="customStyle3" />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('rounded-full');
        expect(inputElement).toHaveClass('w-full');
    });

    it('applies customStyle4', () => {
        render(<CustomInput type="text" label="Username" value="" onChange={() => { }} styleVariant="customStyle4" />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).not.toHaveClass('border');
    });


});