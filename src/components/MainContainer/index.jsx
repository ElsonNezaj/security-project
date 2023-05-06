import React from "react";

import { Box } from "@mui/material";

import styles from "./styles.module.scss";
import AppHeader from "../AppHeader/Header";

function MainContainer() {
  return (
    <Box className={styles.mainContainer}>
      <AppHeader />
    </Box>
  );
}
export default MainContainer;
