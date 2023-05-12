import React from "react";

import styles from "./styles.module.scss";
import { Box, Paper, Typography } from "@mui/material";

function Landing() {
  return (
    <Box className={styles.landingContainer}>
      <Box className={styles.leftSide}></Box>
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
export default Landing;
