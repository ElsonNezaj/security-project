import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Box, Menu, MenuItem, Paper, Typography } from "@mui/material";

import { NAVIGATION_LINKS } from "../../../constans";

function Navigation() {
  const [hoverItem, setHoverItem] = useState(undefined);
  const [anchorEl, setAnchorEl] = useState(undefined);
  const open = Boolean(anchorEl);

  const handleClick = (e, id) => {
    e.preventDefault();
    setHoverItem(id);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setHoverItem(undefined);
    setAnchorEl(undefined);
  };

  return (
    <Box className={styles.navigationContainer}>
      {NAVIGATION_LINKS.map((item) => (
        <>
          <Typography
            key={item.id}
            onClick={(e) => handleClick(e, item.id)}
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

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={styles.menu}
      >
        {NAVIGATION_LINKS.filter((item) => item.id === hoverItem).map((item) =>
          item.children.map((child) => (
            <MenuItem divider onClick={handleClose} className={styles.menuItem}>
              {child}
            </MenuItem>
          ))
        )}
      </Menu>
    </Box>
  );
}
export default Navigation;
