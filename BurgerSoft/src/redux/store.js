import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlicer';
import { setUser, setToken } from './userSlicer'; 

const getUserDataFromStorage = async () => {
  const storedToken = await AsyncStorage.getItem('userToken');
  const storedUserData = await AsyncStorage.getItem('userData');
  console.log('Stored Token:', storedToken);
  console.log('Stored User Data:', storedUserData);
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  return { token: storedToken, user: userData };
};

const initialState = getUserDataFromStorage();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

async function initializeStore() {
  const userData = await getUserDataFromStorage(); 
  if (userData.token && userData.user) {
    store.dispatch(setToken(userData.token));
    store.dispatch(setUser(userData.user));
  }
}

initializeStore();

export default store;
