import React from "react";
import { Paper, Box } from "@mui/material";
import MenuContent from "./MenuContent";
import MenuCards from "./MenuCards";
import ExploreButton from "../Meals/ExploreButton"


const MenuPage = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        background: "linear-gradient(180deg, #34A853 0%, #8EA739 0.01%)",
        paddingTop: "80px",
        paddingBottom: "120px",
      }}
    >
      <MenuContent />
      <MenuCards />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ExploreButton />
      </Box>
    </Paper>
  );
};

export default MenuPage;
