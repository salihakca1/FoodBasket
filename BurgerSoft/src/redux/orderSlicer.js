import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [], // Sepet içeriği burada tutulacak
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Sepete ürün eklemek için bu reducer kullanılır
      const { id, name, price, quantity } = action.payload;
      const existingItemIndex = state.orders.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Ürün sepette zaten varsa, miktarı artır
        state.orders[existingItemIndex].quantity += quantity;
      } else {
        // Ürün sepette yoksa, yeni bir öğe olarak ekle
        state.orders.push({ id, name, price, quantity });
      }
    },
    removeFromCart: (state, action) => {
      // Sepetten ürün çıkarmak için bu reducer kullanılır
      const { id, quantity } = action.payload;
      const existingItemIndex = state.orders.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Ürün sepette varsa, miktarı azalt
        state.orders[existingItemIndex].quantity -= quantity;
        if (state.orders[existingItemIndex].quantity <= 0) {
          // Eğer ürünün miktarı sıfırsa, sepetteki öğeyi kaldır
          state.orders.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = orderSlice.actions;
export default orderSlice.reducer;