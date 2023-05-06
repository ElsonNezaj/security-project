import { Dialog } from "@mui/material";
import React from "react";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

function LoginDialog() {
  const isLoginDialogVisible = useSelector(
    (state) => state.login.isLoginDialogVisible
  );
  return (
    <Dialog open={isLoginDialogVisible} className={styles.loginDialog}></Dialog>
  );
}

export default LoginDialog;
