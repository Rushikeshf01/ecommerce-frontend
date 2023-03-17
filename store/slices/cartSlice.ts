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
    addItemIntocart: (
      state: UserCartType[],
      action: PayloadAction<UserCartType>
    ) => {
      state.push(action.payload);
    },
    removeItemFromcart: (
      state: UserCartType[],
      action: PayloadAction<number>
    ) => {
      // let cartState = [...state];
      return state = state.filter((item) => item.cartId !== action.payload);
      // state = cartState;
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
    decreaseProductQuntity: (
      state: UserCartType[],
      action: PayloadAction<number>
    ) => {
      const itemIndex = state.findIndex(
        (item) => item.productId == action.payload
      );
      if (itemIndex !== -1) {
        state[itemIndex].quantity -= 1;
      }
    },
  },
});

export const {
  setCart,
  addItemIntocart,
  removeItemFromcart,
  increaseProductQuntity,
  decreaseProductQuntity,
} = cartSlice.actions;

export default cartSlice.reducer;
