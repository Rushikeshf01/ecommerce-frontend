import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { UserFavoritesType } from "../../src/types/authTypes";

export const initialFavoriteState: UserFavoritesType[] = [];

export const favoriteSlice = createSlice({
  name: "favoriteItems",
  initialState: initialFavoriteState,
  reducers: {
    setFavorites: (
      state: UserFavoritesType[],
      action: PayloadAction<UserFavoritesType[]>
    ) => {
      return [...action.payload]
    },
    addFavorites: (
      state: UserFavoritesType[],
      action: PayloadAction<UserFavoritesType>
    ) => {
      state.push(action.payload);
    },
  },
});

export const { setFavorites, addFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
