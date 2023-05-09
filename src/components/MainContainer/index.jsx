import React from "react";

import { Box } from "@mui/material";

import styles from "./styles.module.scss";
import LoginSignupForm from "../LoginSignUp";

function MainContainer() {
  return (
    <Box className={styles.mainContainer}>
      <LoginSignupForm />
    </Box>
  );
}
export default MainContainer;
