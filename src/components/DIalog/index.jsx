import React from "react";

import styles from "./styles.module.scss";
import { Box, CircularProgress, Dialog, DialogContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BiX } from "react-icons/bi";
import { closeDialog } from "../../redux/dialog/dialogSlice";

function MainDialog() {
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((state) => state.dialog.isDialogOpen);
  const isTimingTrue = useSelector((state) => state.dialog.isTimingTrue);
  const isSucceedDialog = useSelector((state) => state.dialog.isSucceedDialog);
  const isReportDialog = useSelector((state) => state.dialog.isReportDialog);
  return (
    <Dialog open={isDialogOpen} className={styles.mainDialog}>
      <Box onClick={() => dispatch(closeDialog())} className={styles.closeIcon}>
        <BiX />
      </Box>
      <DialogContent sx={{ minWidth: 500 }} className={styles.dialogContent}>
        {isTimingTrue && (
          <Box className={styles.timing}>
            <CircularProgress />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
export default MainDialog;
