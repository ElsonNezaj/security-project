import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginDialogVisible: false,
  isLoggedIn: false,
  userCredentials: undefined,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    handleLoginDialog: (state, action) => {
      state.isLoginDialogVisible = action.payload;
    },

    handleCreateAccount: (state, action) => {
      state.userCredentials = action.payload;
      localStorage.setItem(
        action.payload.idNumber,
        JSON.stringify(action.payload)
      );
      state.isLoggedIn = true;
    },
  },
});

export const { handleLoginDialog, handleLogin, handleCreateAccount } =
  authSlice.actions;
export default authSlice.reducer;
