import React from "react";

import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import IntroductionPage from "../IntroductionPage";

function Landing() {
  return (
    <Box className={styles.landingContainer}>
      <IntroductionPage />
    </Box>
  );
}
export default Landing;
