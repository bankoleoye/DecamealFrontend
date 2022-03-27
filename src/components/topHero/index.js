import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./style.css";
import { Container } from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: "#34A853",
  "&:hover": {
    backgroundColor: "#34A853",
  },
  padding: "15px 40px",
  fontWeight: 700,
  marginTop: 30,
  borderRadius: "7px",
}));

function TopHero({ buttonText, Text1, Text2, Text3, Text4 }) {
  return (
    <>
      <Box className="tophero-container">
        <Box className="parent-container">
          <Container>
            <Box className="food">
              <Box style={{ marginTop: "0" }}>
                <span className="eat">{Text1 ? Text1 : "Eat"}</span>{" "}
                {Text2 ? Text2 : "healthy"}
                <Box>{Text3 ? Text3 : "Natural Food"}</Box>
              </Box>
            </Box>

            <Box
              className="paragraph-text"
              sx={{ textShadow: "2px 2px 5px #000000" }}
            >
              {Text4
                ? Text4
                : "We promise you will enjoy and find your favorite meals, eat what you want and save your precious time"}
            </Box>
            <Box sx={{ marginBottom: "3rem" }}>
              <ColorButton onClick={() => alert("")}>
                {buttonText ? buttonText : "Explore Meals"}
              </ColorButton>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default TopHero;
