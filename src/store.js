import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./redux/auth/authSlice";
import dialogSlice from "./redux/dialog/dialogSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    dialog: dialogSlice,
  },
});
