import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import {
  Button,
  Box,
  Container,
  Input,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";

const SearchSection = () => {
  return (
    <Box sx={{ backgroundColor: "#8EA739", paddingTop: "5rem" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: { sm: "2rem 0" },
            }}
          >
            <Input
              id="input-with-icon-adornment"
              sx={{
                backgroundColor: "white",
                borderRadius: "2rem",
                minHeight: "3.5rem",
                maxWidth: "40rem",
                border: "none",
              }}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    {" "}
                    <SearchIcon />{" "}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box
            sx={{
              padding: "2rem 0",
              display: { sm: "flex" },
              justifyContent: "space-between",
              width: { sm: "720px" },
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                paddingBottom: "1rem",
                marginRight: { sm: "2rem" },
                textAlign: "baseline",
                marginTop: "1rem",
              }}
            >
              <Typography sx={{ paddingRight: "1rem" }}>
                Showing 1–8 of 10 results
              </Typography>
              <Typography>
                Show&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ marginRight: "1rem" }}>
                <div className="btn-readmore-align">
                  <Button className="white-btn-text">Filter</Button>
                  <ExpandMoreOutlinedIcon />
                </div>
              </Box>
              <Box className="btn-readmore-align">
                <Button className="white-btn-text">Sort by</Button>
                <ExpandMoreOutlinedIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchSection;
