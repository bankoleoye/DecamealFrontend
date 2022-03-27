import React from "react";
import { Paper, Box, Container } from "@mui/material";
import DietImage from "./DietImageFile";
import DietContent from "./DietContent";

const DietPage = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        background: "linear-gradient(180deg, #34A853 0%, #8EA739 0.01%)",
        paddingTop: "150px",
        paddingBottom: "120px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "300px",
          }}
        >
          <DietImage />
          <DietContent />
        </Box>
      </Container>
    </Paper>
  );
};

export default DietPage;
