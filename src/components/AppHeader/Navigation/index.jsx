import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Box, Paper, Typography } from "@mui/material";

import { NAVIGATION_LINKS } from "../../../constans";

function Navigation() {
  const [hoverItem, setHoverItem] = useState(undefined);

  return (
    <Box className={styles.navigationContainer}>
      {NAVIGATION_LINKS.map((item) => (
        <>
          <Typography
            key={item.id}
            onMouseEnter={() => setHoverItem(item.id)}
            onMouseLeave={() => {
              setHoverItem(undefined);
            }}
            variant="text"
            className={`${styles.navLink} ${
              hoverItem === item.id ? styles.underline : null
            }`}
          >
            {item.label}
          </Typography>
        </>
      ))}
      <Paper elevation={3} className={styles.button}>
        Report
      </Paper>
    </Box>
  );
}
export default Navigation;
