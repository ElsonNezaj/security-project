import React from "react";

import { Box } from "@mui/material";

import styles from "./styles.module.scss";
import AppHeader from "../AppHeader/Header";
import Landing from "../Landing";

function MainContainer() {
  return (
    <Box className={styles.mainContainer}>
      <AppHeader />
      <Landing />
    </Box>
  );
}
export default MainContainer;
