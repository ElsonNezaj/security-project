import React from "react";

import styles from "./styles.module.scss";
import { Box, Typography } from "@mui/material";

function Workgroup() {
  return (
    <Box className={styles.workgroupContainer}>
      <Typography className={styles.workgroupText}>Workgroup Page</Typography>
    </Box>
  );
}
export default Workgroup;
