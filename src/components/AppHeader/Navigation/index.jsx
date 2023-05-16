import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Box, Menu, MenuItem, Paper, Typography } from "@mui/material";

import { NAVIGATION_LINKS } from "../../../constans";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleReportDialog } from "../../../redux/dialog/dialogSlice";
import { handleLogout } from "../../../redux/auth/authSlice";

function Navigation() {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state) => state.auth.userCredentials);
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
        <Paper
          onClick={() => dispatch(handleReportDialog(true))}
          elevation={3}
          className={styles.button}
        >
          Report
        </Paper>
      )}
      {userCredentials && (
        <Typography
          onClick={() => dispatch(handleLogout())}
          className={styles.user}
        >
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
