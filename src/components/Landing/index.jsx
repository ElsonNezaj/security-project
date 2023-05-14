import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { NAVIGATION_LINKS } from "../../constans";
import { Typography } from "antd";

const IntroductionPage = lazy(() => import("../IntroductionPage"));
const CreateAccountPage = lazy(() => import("../CreateAccount"));
const Workgroup = lazy(() => import("../Workgroup"));

function Landing() {
  const userCredentials = useSelector((state) => state.auth.userCredentials);

  const handleMenuPath = (path) => {
    switch (path) {
      case "workgroup":
        return <Workgroup />;
      case "career":
        return <Typography>Career</Typography>;
      default:
        <></>;
        break;
    }
  };

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
          />
          {NAVIGATION_LINKS.map((item) =>
            item.children.map((child) => (
              <Route
                exact
                path={`/${child.path}`}
                element={handleMenuPath(child.path)}
              />
            ))
          )}
        </Routes>
      </Suspense>
    </Box>
  );
}
export default Landing;
