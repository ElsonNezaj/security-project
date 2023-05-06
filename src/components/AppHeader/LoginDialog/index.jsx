import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import { Person } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLogin,
  handleLoginDialog,
} from "../../../redux/login/loginSlice";

function LoginDialog() {
  const dispatch = useDispatch();
  const isLoginDialogVisible = useSelector(
    (state) => state.login.isLoginDialogVisible
  );

  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin({ username, password }));
    dispatch(handleLoginDialog(false));
  };

  return (
    <Dialog
      open={isLoginDialogVisible}
      maxWidth="lg"
      onClose={() => dispatch(handleLoginDialog(false))}
      className={styles.loginDialog}
    >
      <CloseIcon
        onClick={() => dispatch(handleLoginDialog(false))}
        className={styles.closeIcon}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <DialogContent className={styles.dialogContent}>
          <Person className={styles.profileIcon} />
          <TextField
            required
            variant="standard"
            size="small"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
          />
          <TextField
            required
            variant="standard"
            type="password"
            size="small"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
          <Button
            variant="contained"
            type="submit"
            className={styles.submitButton}
          >
            Log In
          </Button>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default LoginDialog;
