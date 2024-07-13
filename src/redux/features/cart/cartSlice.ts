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
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId
      );

      if (existingItem) {
        // If item already exists in cart, increase quantity and update subtotal
        existingItem.quantity += newItem.quantity;
        existingItem.subTotal += newItem.subTotal;
      } else {
        // If item does not exist in cart, add it to the cart items array
        state.items.push(newItem);
      }

      // Update total price and quantity in the cart
      state.totalPrice += newItem.subTotal;
      state.totalQuantity += newItem.quantity;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
