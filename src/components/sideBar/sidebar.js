import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Logo from "../logo/Logo";
import { Home, AccountCircle } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./sidebar.css";

const Sidebar = ({ styling }) => {
  return (
    <Box className="side-bar" sx={styling}>
      <Box className="top-side-bar">
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "900",
            fontSize: "36px",
            color: "#FFFFFF",
            margin: "35.24px 0",
            borderBottom: "2px solid #8EA739",
          }}
        >
          <Logo logoStyle={{ justifyContent: "center" }} />
        </Typography>
      </Box>

      <Box className="side-bar-nav">
        <Box
          className="dashboard"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <NavLink
            to="/dashboard"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <Home sx={{ width: "15%" }} />
            <Typography>Dashboard</Typography>
          </NavLink>
        </Box>

        <Box
          className="profile"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/dashboard/profile"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <AccountCircle sx={{ width: "15%" }} />
            <Typography>Your Profile</Typography>
          </NavLink>
        </Box>
        <Box
          className="messages"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/dashboard/notifications"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <NotificationsIcon sx={{ width: "15%" }} />
            <Typography>Notifications</Typography>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
