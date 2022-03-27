import React from 'react'
import { Button } from "@mui/material";
const DietButton = () => {
  return (
    <Button
    fullWidth
    type="submit"
    variant="contained"
    sx={{
      backgroundColor: "#1C1C1C",
      height: "53px",
      maxWidth: "148px",
      fontFamily: "Poppins",
      borderRadius: "39px",
      textAlign: "center",
      marginTop: "25px",
    }}
    className="submit_button"
  >
    Explore Menu
  </Button>
  )
}

export default DietButton