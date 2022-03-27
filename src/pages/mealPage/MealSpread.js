import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import classes from "./meal.module.css";
// import axios from "axios";
import { Button, Box, Container } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { meals } from "../../store/slices/meals";

const MealSpread = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector((state) => state.meals);

  
  useEffect(() => {
    dispatch(meals());
  }, [dispatch]);

  return (
    <Box className={classes.flexcontainer}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", xs: "center" },
            padding: "3rem 0",
          }}
        >
          <Box className={classes.foodie}>
            {data && data.meals &&
              data.meals.map((item) => (
                <Cards
                  key={item.id}
                  image={
                    item.cover_img
                      ? item.cover_img
                      : "https://allnigerianfoods.com/wp-content/uploads/ewa-agoyin-recipe-500x500.jpg"
                  }
                  title={item.title}
                  body={item.description}
                />
              ))}
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            className={classes.sidecontainer}
          >
            <div>
              <h4>Meal Categories</h4>
              <div className={classes.foodT}>Swallow</div>
              <div className={classes.foodT}>Cereals</div>
              <div className={classes.foodT}>Porridge</div>
              <div className={classes.foodT}>Chips</div>
              <h4 className={classes.foodT}>Meal Type</h4>
            </div>

            <div className={classes.mealT}>
              <div className={classes.lunch}>Lunch</div>
              <div className={classes.dinner}>Dinner</div>
            </div>

            <div className={classes.darkT}>
              <div className="btn-readmore-align">
                <Button className="white-btn-text">Filter</Button>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default MealSpread;
