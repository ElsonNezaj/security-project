import React from "react";

import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import NavigationLinks from "../NavigationLinks";
import Login from "../Login";

function AppHeader() {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.flexHeaderContainer}>
        <Box className={styles.logoContainer}>FORSETI PROJECT</Box>
        <Box className={styles.navContainer}>
          <Box className={styles.navigationContainer}>
            <NavigationLinks />
          </Box>
          <Box className={styles.userContainer}>
            <Login />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default AppHeader;
