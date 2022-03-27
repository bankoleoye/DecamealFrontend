import React from "react"
import { Box,Avatar} from "@mui/material";
import "./index.css"

export default function Post (){
    return (
        <Box className="post-container" sx={{
            paddingTop: 2
        }}> 
            
            <Avatar 
            src="https://res.cloudinary.com/dlur1zfow/image/upload/v1647265278/profile_image_ujnme7.png" 
            alt="Avatar"
            sx={{ width: 56, 
                  height: 56,
                  marginLeft: 4,
            }}/>
            <Box className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore ete dolore 
             magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo 
             consequat. Duis aute irure dolor in reprehenderit.
            </Box>
        </Box>
           

    )
}