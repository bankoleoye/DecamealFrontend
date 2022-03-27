import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getSavedUserToken } from "../utils";
import DashboardLayer from "../components/dashboardLayer/dashboardLayer";
import { Box } from "@mui/system";

const ProtectedRoute = () => {
  const isAuthenticated = !!getSavedUserToken();
  return isAuthenticated ? (
    <Box>
      <DashboardLayer>
        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </DashboardLayer>
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;