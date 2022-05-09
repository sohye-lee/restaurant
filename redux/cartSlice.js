import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.products.filter(
        (p) =>
          p._id === action.payload._id &&
          _.isEqual(p.extras, action.payload.extras) &&
          p.price === action.payload.price
      )[0];
      if (item) {
        state.products = state.products.map((p) =>
          p._id === action.payload._id
            ? { ...p, quantity: p.quantity + action.payload.quantity }
            : p
        );
      } else {
        state.products.push(action.payload);
      }
      state.cartQuantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const newProducts = state.products.filter((p) => p._id != id);
      console.log(id);
      console.log(newProducts);
      state.cartQuantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      state.products = newProducts;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, deleteProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
