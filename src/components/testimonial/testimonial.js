import { Box, Rating, Typography } from "@mui/material";

const Testimonial = ({ reviewer, avatar }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "1rem 4rem",
    }}
  >
    <center>
      <img src={avatar} alt="avatar" />
      <Rating
        name="read-only"
        value={4.5}
        readOnly
        precision={0.5}
        sx={{
          color: "#B8D344",
          marginTop: "3rem",
        }}
      />
      <Typography
        variant="p"
        component="p"
        sx={{
          color: "#6a6a6a",
          fontFamily: "Poppins",
          fontSize: "1rem",
          lineHeight: "25.6px",
          maxWidth: "300px",
          margin: "1rem auto",
        }}
      >
        {" "}
        Delicious meals are tasty, appetizing, scrumptious, yummy, 
        luscious, delectable, mouth-watering, fit for a king, delightful, 
        lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming.
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontFamily: "Oleo Script",
          color: "#1c1c1c",
          fontweight: "400px",
        }}
      >
        {" "}
        {reviewer}
      </Typography>
    </center>
  </Box>
);

export default Testimonial;
