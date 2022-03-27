import React from "react"
import { Box,useMediaQuery } from "@mui/material";
import Post from "./post"


export default function MainTwo(){
    const isTabletView = useMediaQuery("(max-width:670px)");
    return (
        <Box
        className="profile-container"
        sx={{
          width: isTabletView ? "100%" : "70vw",
          height: isTabletView ? "125vh" : "100%",
          marginTop: isTabletView ? "0" : "37px",
          marginLeft: isTabletView ? "0" : "auto",
          marginRight: isTabletView ? "0" : "auto",
          backgroundColor: "#E1E4D5",
          borderRadius: "10px",
          padding: isTabletView ? "10px" : "5vh"
        }}
        >
            <Post />
            <Post />
            <Post />
        </Box>
    
    )
}