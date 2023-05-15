import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Box, Menu, MenuItem, Paper, Typography } from "@mui/material";

import { NAVIGATION_LINKS } from "../../../constans";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  const isLoggedId = useSelector((state) => state.auth.isLoggedId);
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
      {!userCredentials && (
        <Paper elevation={3} className={styles.button}>
          Report
        </Paper>
      )}
      {userCredentials && (
        <Typography className={styles.user}>
          {userCredentials.firstName}&nbsp;{userCredentials.lastName}
        </Typography>
      )}
      {NAVIGATION_LINKS.filter((item) => item.id === hoverItem).map(
        (item) =>
          item.children.length > 0 && (
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className={styles.menu}
            >
              {NAVIGATION_LINKS.filter((item) => item.id === hoverItem).map(
                (item) =>
                  item.children.map((child) => (
                    <Link to={child.path}>
                      <MenuItem
                        divider
                        onClick={handleClose}
                        className={styles.menuItem}
                      >
                        {child.label}
                      </MenuItem>
                    </Link>
                  ))
              )}
            </Menu>
          )
      )}
    </Box>
  );
}
export default Navigation;
