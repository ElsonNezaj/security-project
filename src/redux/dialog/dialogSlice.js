import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReportDialog: false,
  isTimingTrue: false,
  isSucceedDialog: false,
  isDialogOpen: false,
};

export const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    handleTiming: (state) => {
      state.isDialogOpen = true;
      state.isTimingTrue = true;
      state.isSucceedDialog = false;
      state.isReportDialog = false;
    },
    handleSucceedDialog: (state, action) => {
      state.isSucceedDialog = action.payload;
      state.isDialogOpen = true;
    },
    handleReportDialog: (state, action) => {
      state.isReportDialog = action.payload;
      state.isDialogOpen = true;
    },
    closeDialog: (state) => {
      state.isDialogOpen = false;
      state.isSucceedDialog = false;
      state.isReportDialog = false;
      state.isTimingTrue = false;
    },
  },
});

export const {
  handleTiming,
  handleSucceedDialog,
  handleReportDialog,
  closeDialog,
} = dialogSlice.actions;
export default dialogSlice.reducer;
