import React from "react";

import styles from "./styles.module.scss";
import { Box, Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleTiming } from "../../redux/dialog/dialogSlice";

function ReportForm() {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  const { firstName, lastName, idNumber, email, phoneNumber } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleTiming());
  };

  return (
    <Box className={styles.reportFormContainer}>
      <Typography className={styles.reportTitle}>
        Report your problem
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.reportForm}>
        <TextField
          variant="filled"
          value={firstName}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          value={lastName}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          value={idNumber}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          value={email}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          value={phoneNumber}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          multiline
          placeholder="Describe your problem"
          maxRows={6}
          className={styles.textField}
        />
        <Button type="submit" className={styles.submitButton}>
          Complete the report
        </Button>
      </form>
    </Box>
  );
}
export default ReportForm;
