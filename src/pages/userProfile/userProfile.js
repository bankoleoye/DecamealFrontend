import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, styled, useMediaQuery } from "@mui/material";
import {
  ModeEdit,
  Call,
  Email,
  Person,
  Code,
  AddLocationAlt,
} from "@mui/icons-material";

const EditProfileButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(28,28,28,1)",
  "&:hover": {
    backgroundColor: "rgba(28,28,28,0.9)",
  },
}));

const UserProfile = ({
  firstName,
  lastName,
  image,
  userRole,
  phoneNumber,
  email,
  gender,
  stack,
  address,
}) => {
  const isTabletView = useMediaQuery("(max-width:670px)");
  const userFirstName = firstName ? firstName : "Anthony";
  const userLastName = lastName ? lastName : "Obatola";
  const role = userRole ? userRole : "Decadev";
  const userEmail = email ? email : "example@email.com";
  const number = phoneNumber ? phoneNumber : "08000000000";
  const sex = gender ? gender : "Male";
  const userStack = stack ? stack : "Python";
  const imageUrl = image
    ? image
    : "https://res.cloudinary.com/afeezagbaje/image/upload/v1647141584/DevBlogs/prince-akachi-4Yv84VgQkRM-unsplash_gvnrya.jpg";
  const location = address
    ? address
    : "7, Asajon way, Sangotedo, Ajah, Lagos State";
  const name = `${userFirstName} ${userLastName}`;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Box
        className="profile"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          className="profile-container"
          sx={{
            width: isTabletView ? "100%" : "600px",
            height: isTabletView ? "100vh" : "670px",
            marginTop: isTabletView ? "50px" : "97px",
            marginLeft: isTabletView ? "0" : "auto",
            marginRight: isTabletView ? "0" : "auto",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "30%",
            }}
          >
            <Box
              className="profile-blur-image"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "#6B5144",
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "10px 10px 0 0",
                filter: `blur(${"2px"})`,
              }}
            ></Box>
            <Box>
              <Link to="/dashboard/edit-profile">
                <EditProfileButton
                  variant="contained"
                  color="success"
                  sx={{
                    position: "absolute",
                    top: "15px",
                    right: "10px",
                  }}
                >
                  Edit Profile
                </EditProfileButton>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  bottom: isTabletView ? "-50px" : "-90px",
                  right: isTabletView ? "30%" : "35%",
                  borderRadius: "50%",
                  width: isTabletView ? "100px" : "180px",
                  height: isTabletView ? "100px" : "180px",
                  backgroundColor: "gold",
                  backgroundImage: `url(${imageUrl})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
              <ModeEdit
                sx={{
                  position: "absolute",
                  bottom: isTabletView ? "-50px" : "-80px",
                  right: isTabletView ? "33%" : "36%",
                  color: "white",
                  fontSize: isTabletView ? "25px" : "45px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </Box>
          </Box>
          <Box
            className="profile-info"
            sx={{
              width: "100%",
              height: "70%",
              paddingTop: "100px",
            }}
          >
            <Box className="profile-info-header">
              <Typography
                variant="h4"
                component="div"
                sx={{ textAlign: "center", fontWeight: "Bold" }}
              >
                {name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ textAlign: "center", color: "#5D5D5D" }}
              >
                {role}
              </Typography>
            </Box>
            <Box
              className="profile-info-body"
              sx={{
                marginTop: "50px",
                marginLeft: isTabletView ? "0" : "50px",
              }}
            >
              <Box
                className="phone-number"
                sx={{ display: "flex", marginBottom: "5px" }}
              >
                <Call
                  sx={{
                    color: "white",
                    backgroundColor: "#6A6A6A",
                    borderRadius: "2px",
                    marginLeft: "3px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "#5D5D5D", marginLeft: "10px" }}
                >
                  {number}
                </Typography>
              </Box>
              <Box
                className="email"
                sx={{ display: "flex", marginBottom: "5px" }}
              >
                <Email sx={{ color: "#6A6A6A", fontSize: "30px" }} />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "#5D5D5D", marginLeft: "10px" }}
                >
                  {userEmail}
                </Typography>
              </Box>
              <Box
                className="sex"
                sx={{ display: "flex", marginBottom: "5px" }}
              >
                <Person
                  sx={{
                    color: "#6A6A6A",
                    fontSize: "30px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "#5D5D5D", marginLeft: "10px" }}
                >
                  {sex}
                </Typography>
              </Box>
              <Box
                className="stack"
                sx={{ display: "flex", marginBottom: "5px" }}
              >
                <Code
                  sx={{
                    color: "#6A6A6A",
                    fontSize: "30px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "#5D5D5D", marginLeft: "10px" }}
                >
                  {userStack}
                </Typography>
              </Box>
              <Box
                className="address"
                sx={{ display: "flex", marginBottom: "5px" }}
              >
                <AddLocationAlt
                  sx={{
                    color: "#6A6A6A",
                    fontSize: "30px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "#5D5D5D", marginLeft: "10px" }}
                >
                  {location}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default UserProfile;
