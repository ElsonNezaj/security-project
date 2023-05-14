import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./styles.module.scss";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleCreateAccount } from "../../redux/auth/authSlice";

function CreateAccount() {
  const dispatch = useDispatch();

  const [createState, setCreateState] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleChange = (name, value) => {
    setCreateState(createState, (createState[name] = value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createState.confirmPassword === createState.password) {
      dispatch(handleCreateAccount(createState));
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <Box className={styles.createContainer}>
      <Box className={styles.titleContainer}>
        <Link to="/" className={styles.returnButton}>
          <FaArrowLeft />
          <Typography className={styles.returnText}>Home</Typography>
        </Link>
        <Typography className={styles.createTitle}>
          Create an Account
        </Typography>
      </Box>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.createForm}>
        <TextField
          variant="filled"
          required
          placeholder="* First Name"
          name="firstName"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          required
          placeholder="* Last Name"
          name="lastName"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          required
          placeholder="* Identification / ID"
          name="idNumber"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          required
          placeholder="* E-mail"
          name="email"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          required
          placeholder="* Phone Number"
          name="phoneNumber"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          required
          placeholder="* Password"
          name="password"
          type="password"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />
        <TextField
          variant="filled"
          required
          placeholder="* Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="false"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.textField}
        />

        <Button type="submit" className={styles.submitButton}>
          Create Account
        </Button>
      </form>
    </Box>
  );
}
export default CreateAccount;
