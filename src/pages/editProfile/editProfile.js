import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Stack,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { ModeEdit } from "@mui/icons-material";

const EditTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#B8D344",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8EA739",
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#B8D344",
      borderWidth: 2,
    },
  },
});

const Input = styled("input")({
  display: "none",
});

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const stacks = [
  {
    value: "Python",
    label: "Python",
  },
  {
    value: "Node",
    label: "Node",
  },
  {
    value: "DotNet",
    label: "DotNet",
  },
  {
    value: "Andriod",
    label: "Andriod",
  },
  {
    value: "Java",
    label: "Java",
  },
  {
    value: "IOS",
    label: "IOS",
  },
];

const EditProfile = ({ image }) => {
  const [gender, setGender] = useState("Male");
  const [stack, setStack] = useState("Python");
  const isTabletView = useMediaQuery("(max-width:670px)");
  const imageUrl = image
    ? image
    : "https://res.cloudinary.com/afeezagbaje/image/upload/v1647141584/DevBlogs/prince-akachi-4Yv84VgQkRM-unsplash_gvnrya.jpg";

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleStackChange = (event) => {
    setStack(event.target.value);
  };

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
            minHeight: isTabletView ? "100vh" : "670px",
            marginTop: isTabletView ? "50px" : "97px",
            marginLeft: isTabletView ? "0" : "auto",
            marginRight: isTabletView ? "0" : "auto",
            padding: "50px 0",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                margin: "0 auto",
                borderRadius: "50%",
                width: isTabletView ? "100px" : "180px",
                height: isTabletView ? "100px" : "180px",
                backgroundColor: "#4B2E21",
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{ position: "absolute", bottom: "5px", right: "-10px" }}
                >
                  <ModeEdit
                    sx={{
                      color: "white",
                      fontSize: isTabletView ? "25px" : "45px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                </IconButton>
              </label>
            </Box>
            <Box
              component="form"
              sx={{ flexGrow: 1, margin: { xs: "50px 15px", sm: "70px" } }}
            >
              <Grid container spacing={{ xs: 3, sm: 5 }}>
                <Grid item xs={12}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 3, sm: 5 }}
                    sx={{ justifyContent: { sm: "space-between" } }}
                  >
                    <EditTextField
                      id="outlined-basic"
                      fullWidth
                      label="First Name"
                      variant="outlined"
                    />
                    <EditTextField
                      id="outlined-basic"
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <EditTextField
                    id="outlined-basic"
                    fullWidth
                    label="Username"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <EditTextField
                    id="outlined-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <EditTextField
                    id="outlined-basic"
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Stack
                    direction={{ xs: "row" }}
                    spacing={{ xs: 3, sm: 10 }}
                    sx={{
                      justifyContent: { sm: "space-between" },
                      width: { xs: "100%", sm: "360px" },
                    }}
                  >
                    <EditTextField
                      id="outlined-select-currency-native"
                      select
                      label="Gender"
                      value={gender}
                      onChange={handleGenderChange}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {genders.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </EditTextField>
                    <EditTextField
                      id="outlined-select-currency-native"
                      select
                      label="Stack"
                      value={stack}
                      onChange={handleStackChange}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {stacks.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </EditTextField>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <EditTextField
                    id="outlined-basic"
                    fullWidth
                    label="Address"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#1C1C1C !important",
                    padding: "10px 50px",
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EditProfile;
