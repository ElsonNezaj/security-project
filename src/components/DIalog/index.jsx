import React, { useEffect } from "react";

import styles from "./styles.module.scss";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BiX } from "react-icons/bi";
import {
  closeDialog,
  handleSucceedDialog,
} from "../../redux/dialog/dialogSlice";
import { FaCheck } from "react-icons/fa";
import ReportForm from "../ReportForm";

function MainDialog() {
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((state) => state.dialog.isDialogOpen);
  const isTimingTrue = useSelector((state) => state.dialog.isTimingTrue);
  const isSucceedDialog = useSelector((state) => state.dialog.isSucceedDialog);
  const isReportDialog = useSelector((state) => state.dialog.isReportDialog);

  useEffect(() => {
    setTimeout(() => {
      isTimingTrue && dispatch(handleSucceedDialog(true));
    }, 3000);
  }, [dispatch, isTimingTrue]);

  return (
    <Dialog open={isDialogOpen} className={styles.mainDialog}>
      {!isTimingTrue && (
        <Box
          onClick={() => dispatch(closeDialog())}
          className={styles.closeIcon}
        >
          <BiX />
        </Box>
      )}
      <DialogContent sx={{ minWidth: 500 }} className={styles.dialogContent}>
        {isTimingTrue && (
          <Box className={styles.timing}>
            <CircularProgress />
            <Typography>Processing your report...</Typography>
          </Box>
        )}
        {isSucceedDialog && (
          <Box className={styles.succeedMessage}>
            <Box className={styles.checkBox}>
              <FaCheck />
            </Box>
            <Typography className={styles.message}>
              You will be contacted by our investigators shortly
            </Typography>
          </Box>
        )}
        {isReportDialog && <ReportForm />}
      </DialogContent>
    </Dialog>
  );
}
export default MainDialog;
