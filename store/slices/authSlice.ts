import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { InitialUser } from "../../src/types/authTypes";

const initialState: InitialUser = {
  isAuthenticated: false,
  accessToken: "",
  refreshToken: "",
  user: {
    email: "",
    user_id: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthentication: (
      state: InitialUser,
      action: PayloadAction<InitialUser>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
  },
});

export const {setAuthentication} = authSlice.actions

export default authSlice.reducer