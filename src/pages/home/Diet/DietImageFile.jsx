import React from 'react'
import { Box } from "@mui/material"
import OnionJollof from "../../../assets/img/onion-jollof.png"
import Samosa from "../../../assets/img/samosa.png"
import FruitSalad from "../../../assets/img/fruit-salad.png"
const DietImage = () => {
  return (
    <Box sx={{ display: { xs: "none", sm:"none", md:"flex", lg: "flex"}, gap: "2rem" }}>
    <Box>
    <img src={OnionJollof} alt="A bowl of jollof rice" 
    style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}/>
    </Box>
    <Box sx={{ display:"flex", flexDirection: "column",
    justifyContent: "space-between", alignItems: "center",
  }}>
    <img src={Samosa} alt="A bowl of jollof rice"  
    style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
        objectPosition: "center",
      }}/>
    <img src={FruitSalad} alt="A bowl of jollof rice" 
    style={{
      width: "100%",
      height: "240px",
      objectFit: "cover",
      objectPosition: "center",
    }}
    />
    </Box>
     </Box>
  )
}

export default DietImage