import { Box, Button, Typography } from "@mui/material";
import React from "react";

import styles from "./styles.module.scss";

function NavigationLinks() {
  return (
    <Box className={styles.navigationContainer}>
      <Box className={styles.navigations}>
        <Button variant="text" className={styles.navigationButton}>
          <Typography className={styles.navigationLabel}>SERVICES</Typography>
        </Button>
        <Button variant="text" className={styles.navigationButton}>
          <Typography className={styles.navigationLabel}>
            MORE INFORMATION
          </Typography>
        </Button>
        <Button variant="text" className={styles.navigationButton}>
          <Typography className={styles.navigationLabel}>CONTACT</Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default NavigationLinks;
