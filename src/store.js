import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./redux/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
