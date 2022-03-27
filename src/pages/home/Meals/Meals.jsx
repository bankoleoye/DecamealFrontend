import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Cards from "../../../components/Cards/Cards";
import ExploreButton from "./ExploreButton";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { meals} from "../../../store/slices/meals";

const Meals = () => {
  const dispatch = useAppDispatch();
  const mealList = useAppSelector((state) => state.meals);
  useEffect(() => {
    dispatch(meals());
  }, [dispatch]);
  return (
    <Paper
      elevation={0}
      square
      sx={{ background: "linear-gradient(180deg, #34A853 0%, #92A738 100%)" }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: "81px",
          fontWeight: "700",
          paddingTop: "144px",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        Meals for your satisfaction
      </Typography>
      <Container>
        <Grid container spacing={12}>
          {mealList.data && mealList.data.meals
            ? [mealList.data.meals[0], mealList.data.meals[1], mealList.data.meals[2]].map((meal, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Cards
                    image={meal.cover_img}
                    title={meal.title}
                    body={meal.description}
                  />
                </Grid>
              ))
            : ""}
        </Grid>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ExploreButton />
      </Box>
    </Paper>
  );
};

export default Meals;
