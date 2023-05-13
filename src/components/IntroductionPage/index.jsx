import React from "react";

import styles from "./styles.module.scss";
import { Box, Button, Paper, Typography } from "@mui/material";

function IntroductionPage() {
  return (
    <Box className={styles.introductionContainer}>
      <Box className={styles.leftSide}>
        <Box className={styles.buttonGroup}>
          <Box className={styles.authContainer}>
            <Typography className={styles.authTitle}>
              Login or Create an Account
            </Typography>
            <Box className={styles.authButtons}>
              <Button variant="outlined" className={styles.loginButton}>
                Login
              </Button>
              <Button variant="contained" className={styles.signUpButton}>
                Create an Account
              </Button>
            </Box>
          </Box>
          <Box className={styles.emergencyContainer}>
            <Typography className={styles.emergencyText}>
              Is there an emergency?
            </Typography>
            <Button
              variant="contained"
              color="error"
              className={styles.reportNowButton}
            >
              Report Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Paper elevation={3} className={styles.rightSide}>
        <Typography className={styles.mainTitle}>SPEAK UP</Typography>
        <Typography className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Typography>
        <Typography className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          exercitationem dignissimos rerum eos quaerat explicabo tempora
          aliquid, illo cupiditate ducimus, perspiciatis doloribus repellat!
          Atque rerum magni voluptatem hic! Hic, labore.
        </Typography>
      </Paper>
    </Box>
  );
}
export default IntroductionPage;
