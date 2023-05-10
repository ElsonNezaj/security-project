import React from "react";

import { Box } from "@mui/material";

import styles from "./styles.module.scss";
import ContentGrid from "../AppHeader";

function MainContainer() {
  return (
    <Box className={styles.mainContainer}>
      <ContentGrid />
    </Box>
  );
}
export default MainContainer;
