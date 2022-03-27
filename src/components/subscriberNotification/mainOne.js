import React from "react"
import TextField from "@mui/material/TextField"


export default function MainOne()  {
    return (
        <TextField 
             id="outlined-basic"
             variant="outlined"
             fullWidth
             label="Search meals, messages and timetable."
             sx={{height:90}}
             
        />
    )
}