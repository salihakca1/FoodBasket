  import { createSlice } from '@reduxjs/toolkit';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const initialState = { token: null, user: null };

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setToken: (state, action) => {
        state.token = action.payload;
      },
      logoutUser: (state) => {
        state.token = null;
        state.user = null;

        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userData');
      },
    },
  });

  export const { setUser, setToken, logoutUser } = userSlice.actions;
  export default userSlice.reducer;