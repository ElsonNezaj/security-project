import React from "react";

import logo from "../../images/mainimg.png";
import styles from "./styles.module.scss";
import { Box, Paper, Typography } from "@mui/material";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function ContentGrid() {
  return (
    <Paper elevation={3} className={styles.headerContainer}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="logo" />
        <Box className={styles.siteName}>
          <Typography className={styles.mainTitle}>FORSETI</Typography>
          <Typography className={styles.subTitle}>Project</Typography>
        </Box>
      </Link>
      <Box className={styles.navigationContainer}>
        <Navigation />
      </Box>
    </Paper>
  );
}
export default ContentGrid;
