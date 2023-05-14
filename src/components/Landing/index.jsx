import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./styles.module.scss";
import { Box } from "@mui/material";

const IntroductionPage = lazy(() => import("../IntroductionPage"));

function Landing() {
  return (
    <Box className={styles.landingContainer}>
      <Suspense fallback={null}>
        <Routes>
          <Route exact path="/" element={<IntroductionPage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
export default Landing;
