import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./reset.css";

const ResetPassword = () => {
  return (
    <Box className="container">
      <Box
        className="left-side"
        sx={{ display: { xs: "none", md: "block" }, marginRight: "5px" }}
      ></Box>

      <Box className="right-side">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "3rem", fontWeight: "600" }}
        >
          Reset Password!
        </Typography>
        <Box className="form_container">
          <form className="reset-form">
            <Box className="password-container">
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                className="password"
                placeholder="Old Password"
              />
              <span className="show_password">show</span>
            </Box>
            <Box className="password-container">
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                className="password"
                placeholder="New Password"
              />
              <span className="show_password">show</span>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#1c1c1c", height: "60px", maxWidth: "500px" }}
              className="submit_button"
            >
              Reset
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
