import { fireEvent, render, waitFor } from '@testing-library/react';
import FileUploadInput from './FileUploadInput';

describe('FileUploadInput component', () => {
    const mockProps = {
        maxSizeMB: 5,
        required: false,
        title: 'Upload File',
        fileType: ['image/jpeg', 'image/png'],
    };

    test('renders with correct props', () => {
        const { getByText, getByLabelText } = render(<FileUploadInput {...mockProps} />);
        const titleElement = getByText(mockProps.title);
        const inputElement = getByLabelText('Drag and drop or browse');

        expect(titleElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });

    test('displays error message for unsupported file type', () => {
        const { getByLabelText, getByText } = render(<FileUploadInput {...mockProps} />);
        const inputElement = getByLabelText('Drag and drop or browse');

        const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
        Object.defineProperty(inputElement, 'files', { value: [file] });
        fireEvent.change(inputElement);

        const errorMessage = getByText(/File type not allowed:/); // Using a regex for flexible matching
        expect(errorMessage).toBeInTheDocument();
    });

    test('allows file upload and cancellation', () => {
        const { getByLabelText, queryByAltText, getByRole } = render(<FileUploadInput {...mockProps} />);
        const inputElement = getByLabelText('Drag and drop or browse');

        const file = new File(['dummy content'], 'test.png', { type: 'image/png' });
        Object.defineProperty(inputElement, 'files', { value: [file] });
        fireEvent.change(inputElement);

        const cancelBtn = getByRole('button');
        fireEvent.click(cancelBtn);

        expect(queryByAltText('cancel icon')).not.toBeInTheDocument();
    });
});