import React from "react";
import Box from "@mui/material/Card";
import { Link } from "react-router-dom";
import "./Notification_icon.css";

const NotificationDropDown = () => {
  return (
    <Box className="notification-dropdown-menu">
      <Link to="/dashboard">Dashboard </Link>
      <Link to="/profiles">Profile </Link>
      <Link to="/tickets">Tickets </Link>
      <Link to="/logout">Log-Out </Link>
    </Box>
  );
};

export default NotificationDropDown;
