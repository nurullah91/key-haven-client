import { createSlice } from "@reduxjs/toolkit";

export type TCartItem = {
  productId: string;
  productTitle: string;
  quantity: number;
  price: number;
  subTotal: number;
};

export type TCartState = {
  items: TCartItem[];
  totalPrice: number;
  totalQuantity: number;
};

const initialState: TCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
