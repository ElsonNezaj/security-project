import React from "react";

import styles from "./styles.module.scss";
import { Box, Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleTiming } from "../../redux/dialog/dialogSlice";

function ReportForm() {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state) => state.auth.userCredentials);

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
          required
          variant="filled"
          value={userCredentials ? userCredentials.firstName : null}
          placeholder="First Name"
          className={styles.textField}
        />
        <TextField
          required
          variant="filled"
          value={userCredentials ? userCredentials.lastName : null}
          placeholder="Last Name"
          className={styles.textField}
        />
        <TextField
          required
          variant="filled"
          value={userCredentials ? userCredentials.idNumber : null}
          placeholder="Identification / ID "
          className={styles.textField}
        />
        <TextField
          required
          variant="filled"
          value={userCredentials ? userCredentials.email : null}
          placeholder="E-mail"
          className={styles.textField}
        />
        <TextField
          required
          variant="filled"
          value={userCredentials ? userCredentials.phoneNumber : null}
          placeholder="Phone Number"
          className={styles.textField}
        />
        <TextField
          required
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
