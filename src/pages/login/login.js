import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { login, clearMsg } from "../../store/slices/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  // Fetching data from store
  const auth = useAppSelector((store) => store.auth);
  const { token, errors, message, loading, data } = auth;

  // Handle already logged in user
  useEffect(() => {
    if (!loading && !errors && !!token && !!data) {
      window.location = "/dashboard";
    }
  }, [loading, token, errors, data]);

  // Handle error and success message
  useEffect(() => {
    if (!loading && !!message && !!errors) {
      setErrMsg(message);
      return;
    }
    if (!loading && !errors && !!message) {
      setSuccessMsg(message);
    }
    dispatch(clearMsg());
  }, [dispatch, message, loading, errors]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginCredentials;
    if (!email || !password) {
      setErrMsg("Email or Password cannot be blank");
      return;
    }
    dispatch(login(loginCredentials)); 
  };

  const handleCredentialChange = (e) => {
    setLoginCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSnackBarClose = () => {
    setErrMsg("");
    setSuccessMsg("");
  };

  return (
    <Box className="lg-container">
      <Box
        className="bg_container"
        sx={{ display: { xs: "none", md: "block" }, marginRight: "5px" }}
      ></Box>
      <Box className="input_container">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "3rem", fontWeight: "600" }}
        >
          Welcome!
        </Typography>
        <Box className="form_container">
          <form className="login_form" onSubmit={handleSubmit}>
            <Box className="password_container">
              <TextField
                fullWidth
                variant="outlined"
                type={"text"}
                className="input_email"
                placeholder="Email"
                name="email"
                onChange={handleCredentialChange}
              />
            </Box>
            <Box className="password_container">
              <TextField
                fullWidth
                variant="outlined"
                type={passwordShown ? "text" : "password"}
                className="input_password"
                placeholder="Password"
                name="password"
                onChange={handleCredentialChange}
              />
              <span
                onClick={() => setPasswordShown(!passwordShown)}
                className="show_password"
              >
                {passwordShown ? "Hide" : "Show"}
              </span>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#1c1c1c",
                height: "60px",
                maxWidth: "500px",
              }}
              className="submit_button"
              disabled={auth.loading}
            >
              Sign in
            </Button>

            <p className="forgot_password">
              <Link className="forgot-password-link" to="/forgot-password">
                Forgot Password?{" "}
              </Link>
            </p>
          </form>
        </Box>
      </Box>

      <Snackbar
        open={!!errMsg || !!successMsg}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleSnackBarClose}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity={!!errMsg ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {errMsg}
          {successMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
