import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { UserCartType } from "../../src/types/authTypes";

export const initialCartState: UserCartType[] = [];

export const cartSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    setCart: (state: UserCartType[], action: PayloadAction<UserCartType[]>) => {
      return [...action.payload];
    },
    addcart: (state: UserCartType[], action: PayloadAction<UserCartType>) => {
      state.push(action.payload);
    },
    increaseProductQuntity: (
      state: UserCartType[],
      action: PayloadAction<number>
    ) => {
      const itemIndex = state.findIndex(
        (item) => item.productId == action.payload
      );
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      }
    },
  },
});

export const { setCart, addcart, increaseProductQuntity } = cartSlice.actions;

export default cartSlice.reducer;
