// import { render, screen } from '@testing-library/react';
// import { describe, expect, it } from 'vitest';
// import TopNavigationBar from './TopNavigationBar';

// describe('TopNavigationBar', () => {
//   it('renders the company logo', () => {
//     render(<TopNavigationBar />);
//     const logoImage = screen.getByAltText('nnpc logo');
//     expect(logoImage).toBeInTheDocument();
//   });

// });

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import TopNavigationBar from './TopNavigationBar';

// You might need to import your root reducer or create a mock one
import rootReducer from '../../Redux/rootReducer'; // Adjust the import path as needed

describe('TopNavigationBar', () => {
  it('renders the company logo', () => {
    const store = configureStore({
      reducer: rootReducer,

    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TopNavigationBar />
        </BrowserRouter>
      </Provider>
    );

    const logoImage = screen.getByAltText('nnpc logo');
    expect(logoImage).toBeInTheDocument();
  });
});
