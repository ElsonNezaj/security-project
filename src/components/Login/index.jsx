import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../redux/auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const [localCredentials, setLocalCredentials] = useState({
    idNUmber: "",
    password: "",
  });

  const handleChange = (value, poisition) => {
    setLocalCredentials(
      localCredentials,
      (localCredentials[poisition] = value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(localCredentials));
  };

  return (
    <Box className={styles.loginContainer}>
      <Box className={styles.logintitle}>
        <Link to="/" className={styles.returnButton}>
          <FaArrowLeft />
          <Typography className={styles.returnText}>Home</Typography>
        </Link>
        <Typography className={styles.loginLabel}>
          Login to your account
        </Typography>
      </Box>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.loginForm}>
        <TextField
          required
          variant="filled"
          placeholder="* Identification/ID"
          name="idNumber"
          onChange={(e) => handleChange(e.target.value, e.target.name)}
          className={styles.loginTextField}
        />
        <TextField
          required
          variant="filled"
          placeholder="* Password"
          type="password"
          name="password"
          onChange={(e) => handleChange(e.target.value, e.target.name)}
          className={styles.loginTextField}
        />
        <Button type="submit" className={styles.submitButton}>
          Login
        </Button>
      </form>
    </Box>
  );
}
export default Login;
