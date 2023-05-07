import { Box, Typography } from "@mui/material";
import React from "react";

import lady from "../../images/mainimg.png";

import styles from "./styles.module.scss";

function Landing() {
  return (
    <Box className={styles.landingContainer}>
      <Box className={styles.imageContainer}>
        <img src={lady} className={styles.ladyJustice} alt="lady justice" />
      </Box>
      <Box className={styles.ladingText}>
        <Typography className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
}
export default Landing;
