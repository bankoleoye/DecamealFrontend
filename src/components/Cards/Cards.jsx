import "./Cards.css";

import { Button, CardActionArea, } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

function Cards({ image, title, body, stars }) {
  return (
    <div>
      <div className="">
        <Card
          sx={{ maxWidth: 312 }}
          md={{
            maxWidth: 400,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt="food meal"
            />
            <CardContent>
              <p className="startrate">
                {" "}
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </p>
              <Typography gutterBottom variant="h5" component="div">
                <h1 className="food-title">{title}</h1>
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <div className="card-food-describe">{body}</div>

                <div className="btn-readmore-align">
                  <Button className="white-btn-text">Read more</Button>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
