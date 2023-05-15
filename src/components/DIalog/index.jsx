import React from "react";

import styles from "./styles.module.scss";
import { Box, Dialog, DialogContent } from "@mui/material";
import { useSelector } from "react-redux";

function MainDialog() {
  const isDialogOpen = useSelector((state) => state.dialog.isDialogOpen);
  const isTimingTrue = useSelector((state) => state.dialog.isTimingTrue);
  const isSucceedDialog = useSelector((state) => state.dialog.isSucceedDialog);
  const isReportDialog = useSelector((state) => state.dialog.isReportDialog);
  console.log(isDialogOpen);
  return (
    <Dialog open={isDialogOpen} className={styles.mainDialog}>
      <DialogContent className={styles.dialogContent}>
        <Box className={styles.closeIcon}></Box>
      </DialogContent>
    </Dialog>
  );
}
export default MainDialog;
