import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { UserCartType } from "../../src/types/authTypes";

export const initialCartState: UserCartType[] = [];

export const cartSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    setCart: (
      state: UserCartType[],
      action: PayloadAction<UserCartType[]>
    ) => {
      return [...action.payload];
    },
    addcart: (
      state: UserCartType[],
      action: PayloadAction<UserCartType>
    ) => {
      state.push(action.payload);
    },
  },
});

export const { setCart, addcart } = cartSlice.actions;

export default cartSlice.reducer;
