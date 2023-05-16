import React from "react";

import { Box } from "@mui/material";

import styles from "./styles.module.scss";
import Appheader from "../AppHeader";
import Landing from "../Landing";
import MainDialog from "../Dialog";

function MainContainer() {
  return (
    <Box className={styles.mainContainer}>
      <Appheader />
      <Landing />
      <MainDialog />
    </Box>
  );
}
export default MainContainer;
