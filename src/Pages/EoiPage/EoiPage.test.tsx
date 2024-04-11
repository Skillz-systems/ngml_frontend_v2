import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import EoiPage from './EoiPage'; 

describe('EoiPage', () => {
  it('renders EoiRequestTemplate with the correct props', () => {
    const { getByText } = render(<EoiPage />);

    expect(getByText('Provide Company Name')).toBeInTheDocument();
    expect(getByText('Provide an email address')).toBeInTheDocument();
    expect(getByText('Provide a number')).toBeInTheDocument();
    expect(getByText('Approved')).toBeInTheDocument();
    expect(getByText('09th, Nov, 2023; 09:23:44 AM')).toBeInTheDocument();

    
  });
});
