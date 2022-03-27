
import { Box, Typography } from "@mui/material";
import DietButton from "./DietButton";
import React from "react";



const DietContent = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Work Sans",
          fontWeight: "700",
          color: "white",
          fontSize: { xs: "25px", md: "34px" },
          textAlign: { xs: "center", md:"left" },
        }}
      >
        Diet Tips for the Day
      </Typography>
      <Box
        sx={{
          width: "120px",
          border: "2px solid #34A853",
          backgroundColor: "#34A853",
          marginTop: "18px",
          marginLeft: {xs:'30%', md:'0'}
        }}
      ></Box>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "#1C1C1C",
          textAlign: {xs:"center", md: "left"},
          marginTop: {xs: "34px"}
        }}
      >
        If you eat or drink more than your body needs, 
        you'll put on weight because the energy you do not use 
        is stored as fat. If you eat and drink too little, you'll lose weight.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "#1C1C1C",
          textAlign: {xs:"center", md: "left"},
          marginTop: {xs: "34px"}
        }}
      >
        It's recommended that you eat at least 5 portions of a 
        variety of fruit and veg every day. They can be fresh, frozen, 
        canned, dried or juiced.
      </Typography>
      <Box sx={{ display: { xs:"flex", md:"block"}, justifyContent: "center" }}>
      <DietButton />
      </Box>
    </Box>
  );
};

export default DietContent;
