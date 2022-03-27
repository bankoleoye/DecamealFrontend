import { Box, Typography } from "@mui/material";

import React from "react";

const MenuContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: "18px",
          fontWeight: "700",
          color: "#fff",
          fontSize: "48px",
          fontFamily: "Work Sans",
        }}
      >
        Our Menu
      </Typography>
      <Typography
        variant="body2"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: "18px",
          fontWeight: "400",
          color: "#1C1C1C",
          fontSize: "16px",
          fontFamily: "Poppins",
        }}
      >
        Our meals are for everyone who loves delicious yummy-cooked 
        no assembly required food.
      </Typography>
      <Box
        sx={{
          width: "120px",
          border: "2px solid #34A853",
          backgroundColor: "#34A853",
          marginBottom: "72px",
        }}
      ></Box>

    </Box>
  );
};

export default MenuContent;
