import { createAsyncThunk } from '@reduxjs/toolkit';

import login from '../../services/services';

const loginAuth = createAsyncThunk('auth/login', async ({ username, password }) => {
  const response = await login({
    username,
    password
  });
  const data = await response.json();
  localStorage.setItem(
    'auth',
    JSON.stringify({
      authToken: data.authToken,
      user: {
        username: data.user.username,
        id: data.user.id
      }
    })
  );
  return data;
});

export default loginAuth;
