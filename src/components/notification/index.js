import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Notification = () => {
  const isTabletView = useMediaQuery("(max-width:800px)");
  return (
    <Box
      container
      sx={{
        display: "flex",
        flexDirection: isTabletView ? "column" : "row",
        justifyContent: isTabletView ? "center" : "space-between",
        alignItems: "center",
        gap: "2rem",
        backgroundColor: "#8EA739",
        padding: "5rem 5rem",
      }}
    >
      <Box
        item
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "2rem",
            fontWeight: "600",
            fontFamily: "Poppins",
            textAlign: isTabletView ? "center" : "left",
          }}
        >
          Get notified when we update!
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "white",
            maxWidth: "400px",
            fontFamily: "Poppins",
            textAlign: isTabletView ? "center" : "left",
          }}
        >
          Get notified when we add new items to our specials menu, update our
          price list of have promos!
        </Typography>
      </Box>
      <Box
        item
        sx={{
          display: "flex",
          flexDirection: isTabletView ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          sx={{
            width: "300px",
            backgroundColor: "white",
            borderRadius: "5px",
            "&:active": {
              backgroundColor: "white",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Get notified when we update!
        </TextField>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1c1c1c",
            height: "60px",
            maxWidth: "200px",
            fontFamily: "Rubik",
            "&:hover": {
              backgroundColor: "white",
              opacity: [0.9, 0.8, 0.7],
              color: "#8EA739",
            },
          }}
        >
          Get notified
        </Button>
      </Box>
    </Box>
  );
};

export default Notification;
