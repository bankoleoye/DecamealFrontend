import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: "2rem" }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={6}
          md={8}
          lg={4}
          sx={{
            height: "400px",
            backgroundColor: "purple",
          }}
        >
          <Item>TIMETABLE</Item>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          lg={4}
          sx={{
            height: "400px",
            backgroundColor: "yellow",
          }}
        >
          <Item>MESSAGES</Item>
        </Grid>
        <Grid
          item
          xs={2}
          md={4}
          lg={8}
          sx={{
            height: "150px",
            backgroundColor: "blue",
          }}
        >
          <Item>STAFF DUTY</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
