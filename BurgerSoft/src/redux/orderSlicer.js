import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const initialState = {
  orders: [], 
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, name, price, quantity } = action.payload; 
      const existingItemIndex = state.orders.findIndex((item) => item.productId === productId); 

      if (existingItemIndex !== -1) {
        state.orders[existingItemIndex].quantity += quantity;
      } else {
        state.orders.push({ productId, name, price, quantity });
      }

      AsyncStorage.setItem('cartData', JSON.stringify(state.orders));
    },
    removeFromCart: (state, action) => {
      const { productId, quantity } = action.payload; 
      const existingItemIndex = state.orders.findIndex((item) => item.productId === productId); 

      if (existingItemIndex !== -1) {
        state.orders[existingItemIndex].quantity -= quantity;
        if (state.orders[existingItemIndex].quantity <= 0) {
          state.orders.splice(existingItemIndex, 1);
        }
      }

      AsyncStorage.setItem('cartData', JSON.stringify(state.orders));
    },
    resetOrder: (state) => {
      state.orders = [];
      AsyncStorage.removeItem('cartData'); 
    },
  },
});

export const { addToCart, removeFromCart, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
