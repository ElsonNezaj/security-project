import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userCredentials: undefined,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    handleCreateAccount: (state, action) => {
      state.userCredentials = action.payload;
      localStorage.setItem(
        action.payload.idNumber,
        JSON.stringify(action.payload)
      );
      state.isLoggedIn = true;
    },
    handleLogin: (state, action) => {
      const localData = localStorage.getItem(action.payload.idNumber);
      if (!localData) {
        console.log("This user doesn't exist");
      } else {
        const data = JSON.parse(localData);
        if (data.password === action.payload.password) {
          state.userCredentials = data;
          state.isLoggedIn = true;
        } else {
          alert("The password provided is wrong");
        }
      }
    },
    handleLogout: (state) => {
      state.userCredentials = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const { handleLogin, handleCreateAccount, handleLogout } =
  authSlice.actions;
export default authSlice.reducer;
