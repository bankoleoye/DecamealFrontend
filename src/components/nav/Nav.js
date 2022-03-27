import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../logo/Logo";
import MenuItem from "@mui/material/MenuItem";
import NavElement from "../navElement/NavElement";
import { NavLink } from "react-router-dom";
import NotificationDropDown from "./Notification_icon";
import ProfileDropDown from "./Profile_DropDown";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import navimage from "../../assets/nav_image.png";
import navnotification from "../../assets/bell_notify.png";

const Nav = ({ showNotification, numOfNotification, showAvatar, avatar }) => {

  const handleLogOut = () => {
    localStorage.clear();
    window.location = "/";
  }

  return (
    <AppBar
      sx={{
        backgroundColor: "#0005",
        border: 0,
        padding: 0,
        margin: 0,
        zIndex: 1,
      }}
      elevation={0}
      position="fixed"
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Logo />
          </Typography>
          <HamburgerMenu
            showNotification={showNotification}
            numOfNotification={numOfNotification}
            showAvatar={showAvatar}
            avatar={avatar}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Button sx={{ my: 2, color: "white", display: "flex" }}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <NavElement text="Home" />{" "}
                </NavLink>
                <NavLink to="/meals" style={{ textDecoration: "none" }}>
                  <NavElement text="Meals" />{" "}
                </NavLink>
                <NavLink to="/about" style={{ textDecoration: "none" }}>
                  <NavElement text="About Us" />{" "}
                </NavLink>

                {showNotification && (
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <Badge
                      badgeContent={numOfNotification}
                      sx={{
                        color: "white",
                      }}
                    >
                      <div className="dropdown">
                        <img
                          src={navnotification}
                          alt="ww"
                          style={{
                            marginLeft: "30px",
                            maxWidth: "100%",
                            marginTop: "10px",
                          }}
                        />
                        <div className="dropdown-content">
                          <ProfileDropDown />
                        </div>
                      </div>
                    </Badge>
                    <div className="dropdown">
                      <img
                        src={navimage}
                        alt="profile"
                        style={{ marginLeft: "40px", borderRadius: "100%" }}
                      />
                      <div className="dropdown-content">
                        <NotificationDropDown />
                      </div>
                    </div>
                  </Box>
                )}
                {!showNotification && (
                  <Button
                    style={{
                      marginLeft: "20px",
                      width: "150px",
                      padding: "10px",
                      color: "white",
                    }}
                    variant="contained"
                    color="success"
                    href="/login"
                  >
                    Login
                  </Button>
                )}
                {showNotification && (
                  <Button
                    style={{
                      marginLeft: "20px",
                      width: "150px",
                      padding: "10px",
                      color: "white",
                    }}
                    variant="contained"
                    color="success"
                    href="/"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Button>
                )}
              </Button>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Nav.propTypes = {
  showNotification: PropTypes.bool,
  numOfNotification: PropTypes.number,
  showAvatar: PropTypes.bool,
  avatar: PropTypes.string,
};

export default Nav;
