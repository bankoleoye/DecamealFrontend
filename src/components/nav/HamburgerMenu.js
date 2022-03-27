import * as React from "react";
import NavElement from "../navElement/NavElement";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

const HamburgerMenu = ({
  showNotification,
  numOfNotification,
  showAvatar,
  avatar,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{
          position: "absolute",
          right: "0",
          top: "0",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography variant="h6" noWrap component="div" textAlign="center">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <NavElement text="Home" color={"black"} />{" "}
            </NavLink>
            <NavLink to="/meals" style={{ textDecoration: "none" }}>
              <NavElement text="Meals" color={"black"} />{" "}
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              <NavElement text="About Us" color={"black"} />{" "}
            </NavLink>
            {showNotification && (
              <Badge
                badgeContent={numOfNotification}
                sx={{
                  marginLeft: "2rem",
                  marginRight: "2rem",
                  color: "white",
                }}
              >
                <NotificationsNoneIcon />
              </Badge>
            )}
            {showAvatar && <Avatar alt="Active User" src={avatar} />}
            {!showNotification && (
              <Button variant="contained" href="/login">
                Login
              </Button>
            )}
            {showNotification && (
              <Button variant="contained" href="/">
                Logout
              </Button>
            )}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
