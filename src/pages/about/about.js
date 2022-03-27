import "./about.css";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

import React from "react";
import chef1 from "../../assets/chef1woman.png";
import chef2 from "../../assets/firstman.png";
import chef3 from "../../assets/chef2woman.png";
import chef4 from "../../assets/secondman.png";
import humanlike from "../../assets/humanlike.png";
import knife from "../../assets/knife.png";
import Nav from "../../components/nav/Nav"

const AboutPage = () => {
  return (
    <>
      <Nav />

      <Box
        md={{
          height: 912,
        }}
        sx={{
          backgroundImage: `url(${"https://res.cloudinary.com/afeezagbaje/image/upload/v1646698115/DevBlogs/decameal_hero_image_r6pi2z.svg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(52, 168, 83, 0.21)",
          backgroundPosition: "center",
        }}
        className="hero"
      >
        <Container>
          <Box
            style={{
              paddingTop: 276,
              color: "#fff",
            }}
            className="header-content"
          >
            <Box
              className="about-page-title"
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
              }}
            >
              <span className="We">We</span> serve you <br /> Healthy meals
            </Box>
            <Box className="about-page-sub-title">
              We promise you will enjoy and find your favorite meals, eat what
              you want and save your precious time
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#34A853",
                height: "53px",
                maxWidth: "185px",
                marginTop: "25px",
                borderRadius: "7px",
                marginBottom: "238px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
              }}
            >
              Explore Meals
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        style={{
          backgroundColor: "#8EA739",
        }}
      >
        <Container>
          <Grid container spacing={8}>
            <Grid
              item
              md={6}
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  height: "270px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={humanlike} alt="mm" className="picture" />
              </Box>

              <Typography
                style={{
                  color: "rgb(255, 255, 255)",
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginTop: 51,
                }}
              >
                service of Qualified chef
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  height: "270px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={knife} alt="mm" className="chef-like-image picture" />
              </Box>
              <Box>
                <Typography
                  style={{
                    color: "rgb(255, 255, 255)",
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginTop: 41,
                  }}
                >
                  Quality service
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
        <Typography
          style={{
            color: "rgb(255, 255, 255)",
            textAlign: "center",
            fontSize: "340%",
            fontWeight: "bold",
            maxWidth: "100%",
          }}
        >
          Meet our Chefs
        </Typography>
        <Container>
          <Grid
            container
            spacing={8}
            style={{
              marginTop: "200px",
            }}
          >
            <Grid item md={6} xs={12} className="chef-item-grid">
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "290px",
                  position: "relative",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",

                  // alignItems: "flex-end",
                }}
                className="chef-card"
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef1} alt="mm" className="chef-image picture" />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    sx={{
                      position: "relative",
                      margin: "0 auto",
                      width: "100%",
                      fontSize: "15px",
                      paddingBottom: "42px",
                      textAlign: "center",
                    }}
                  >
                    Rose Johnson
                    <br /> Rose is a great cook.
                    <br /> she is able to prepare every meal to its
                    <br /> rhythme
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              className="chef-item-grid picture"
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "287px",
                  position: "relative",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                className="chef-card"
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef2} alt="mm" className="chef2-image" />
                </Box>
                <Box>
                  <Typography
                    style={{
                      position: "relative",
                      margin: "0 auto",
                      width: "100%",
                      fontSize: "15px",
                      paddingBottom: "42px",
                      textAlign: "center",
                    }}
                  >
                    Tobi Law
                    <br /> Tobi is one of the best
                    <br /> chefs and the dishes he prepares are top
                    <br /> notch
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
        <Container>
          <Grid
            container
            spacing={6}
            style={{
              marginTop: "20em",
            }}
          >
            <Grid item md={6} xs={12} className="chef-item-grid">
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "280px",
                  position: "relative",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                className="chef-card"
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef4} alt="mm" className="chef3-image picture" />
                </Box>
                <Box>
                  <Typography
                    style={{
                      position: "relative",
                      margin: "0 auto",
                      width: "100%",
                      fontSize: "15px",
                      paddingBottom: "35px",
                      textAlign: "center",
                    }}
                  >
                    Kingsley
                    <br /> Kingsley is a great cook. He is able to prepare
                    <br />
                    every meal to its rhythm and prepare it
                    <br /> for custermers himself
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              className="chef-item-grid"
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "280px",
                  position: "relative",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
                className="chef-card"
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef3} alt="mm" className="chef4-image picture" />
                </Box>
                <Box>
                  <Typography
                    style={{
                      position: "relative",
                      margin: "0 auto",
                      width: "100%",
                      fontSize: "15px",
                      paddingBottom: "35px",
                      textAlign: "center",
                    }}
                  >
                    Margret
                    <br /> Margret is a great cook. He is able to prepare
                    <br />
                    every meal to its rhythm and prepare it
                    <br /> for custermers herself
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
