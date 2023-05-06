import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginDialogVisible: false,
  userCredentials: {
    username: undefined,
    password: undefined,
  },
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    handleLoginDialog: (state, action) => {
      state.isLoginDialogVisible = action.payload;
    },
    handleLogin: (state, action) => {
      state.userCredentials = action.payload;
    },
  },
});

export const { handleLoginDialog, handleLogin } = loginSlice.actions;
export default loginSlice.reducer;
