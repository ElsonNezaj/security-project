import React from "react";

import styles from "./styles.module.scss";
import { Box, Typography } from "@mui/material";

function LoginSignupForm() {
  return (
    <Box className={styles.loginSignupContainter}>
      <Box className={styles.headingContainer}>
        <Typography className={styles.mainTitle}>SPEAK UP</Typography>
      </Box>
    </Box>
  );
}
export default LoginSignupForm;
