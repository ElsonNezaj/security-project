import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const IntroductionPage = lazy(() => import("../IntroductionPage"));
const CreateAccountPage = lazy(() => import("../CreateAccount"));

function Landing() {
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  return (
    <Box className={styles.landingContainer}>
      <Suspense fallback={null}>
        <Routes>
          <Route exact path="/" element={<IntroductionPage />} />
          <Route
            exact
            path="/create-account"
            element={
              userCredentials ? <Navigate to="/" /> : <CreateAccountPage />
            }
          ></Route>
        </Routes>
      </Suspense>
    </Box>
  );
}
export default Landing;
