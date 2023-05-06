import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Typography } from "@mui/material";

import { handleLoginDialog } from "../../../redux/login/loginSlice";

import styles from "./styles.module.scss";

function Login() {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state) => state.login.userCredentials);

  return (
    <Box className={styles.loginContainer}>
      {userCredentials.username ? (
        <Typography className={styles.username}>
          {userCredentials.username}
        </Typography>
      ) : (
        <Button
          variant="outlined"
          onClick={() => dispatch(handleLoginDialog(true))}
          className={styles.loginButton}
        >
          LOG IN
        </Button>
      )}
    </Box>
  );
}
export default Login;
