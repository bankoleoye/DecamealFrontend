import { Container, Grid } from "@mui/material";
import Cards from "../../../components/Cards/Cards";
import React from "react";
import { useAppSelector } from "../../../store/hooks";

const MenuCards = () => {
  const mealList = useAppSelector((state) => state.meals);
  return (
    <Container>
      <Grid container spacing={4}>
        {mealList.data && mealList.data.meals
          ? mealList.data.meals.map((meal, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
  );
};

export default MenuCards;
