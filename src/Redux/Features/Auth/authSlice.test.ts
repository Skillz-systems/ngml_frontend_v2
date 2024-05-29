import { configureStore } from '@reduxjs/toolkit';
import authReducer, { logout, selectCurrentUser, setCredentials } from './authSlice';

const initialState = {
  token: null,
  user: null,
};


describe('authSlice tests', () => {
  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual({
      token: null,
      user: null,
    });
  });
  it('should handle setCredentials', () => {
    const actual = authReducer(initialState, setCredentials({
      token: 'dummy-token',
      user: { id: '1', email: 'user@example.com', name: 'John Doe' }
    }));
    expect(actual.token).toEqual('dummy-token');
    expect(actual.user).toEqual({ id: '1', email: 'user@example.com', name: 'John Doe' });
  });
  it('should handle logout', () => {
    const actual = authReducer({
      token: 'dummy-token',
      user: { id: '1', email: 'user@example.com', name: 'John Doe' }
    }, logout());
    expect(actual.token).toBeNull();
    expect(actual.user).toBeNull();
  });

  const store = configureStore({ reducer: { auth: authReducer } });
  it('should select the current user', () => {
    const actual = selectCurrentUser(store.getState());
    expect(actual).toBeNull();
    store.dispatch(setCredentials({
      token: 'dummy-token',
      user: { id: '1', email: 'user@example.com', name: 'John Doe' }
    }));
    expect(selectCurrentUser(store.getState())).toEqual({
      id: '1', email: 'user@example.com', name: 'John Doe'
    });
  });

//   it('should select the token', () => {
//     const actual = selectToken(store.getState());
//     expect(actual).toBeNull(); // Expect null for initial state
//     store.dispatch(setCredentials({
//       token: 'dummy-token',
//       user: { id: '1', email: 'user@example.com', name: 'John Doe' }
//     }));
//     expect(selectToken(store.getState())).toEqual('dummy-token');
//   });
});
