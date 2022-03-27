import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import "./subscriberProfile.css";
import { styled } from "@mui/material/styles";
import { TextField, MenuItem, Select, OutlinedInput } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const SubscriberProfile = ({ buttonText }) => {
    const [selectedGender, setSelectedGender] = useState("Male")
    const [selectedStack, setSelectedStack] = useState("Python")

    const ColorButton = styled(Button)(({ theme }) => ({
        color: "#FFF",
        backgroundColor: "#1C1C1C",
        "&:hover": {
            backgroundColor: "#1C1C1C",
        },
        padding: "15px 40px",
        fontWeight: 700,
        marginTop: 30,
        borderRadius: "7px",
    }));

    const ColorTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#8ea739',

        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#8ea739',
                borderWidth: '2px',
                width: '100%'
            }
        }
    })

    const handleChange = (event) => {

        const { target: { value }, } = event;
        setSelectedGender(
            typeof value === 'string' ? value.split(',') : value,
        );

    };
    const handleStackChange = (event) => {
        const { target: { value }, } = event;
        setSelectedStack(
            typeof value === 'string' ? value.split(',') : value,
        );


    };

    const gender = [

        "Male",


        "Female",

    ]

    const stack = [

        'Python',


        'Node',


        'Java',


        '.Net',


        'Android',


        'iOS',


        'Golang',

    ];

    return (
        <div style={{ backgroundColor: '#E5E5E5' }}>
            <div className='card-container'>
                <div className="flex-card">
                    <div className='photo-section'>
                        <div className='profile-photo-section'>
                            <img
                                src='https://res.cloudinary.com/neemathec/image/upload/v1646608159/Ellipse_1_1_ut69fn.png'
                                alt=''
                                className='profile-photo'

                            />
                            <div class="image-upload upload-icon" style={{ height: '35px', width: "35px", backgroundColor: "#1C1C1C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <label for="file-input">
                                    <EditIcon sx={{ color: "#fff" }} />
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                        </div>
                    </div>
                    <div className='form-section'>
                        <form className="form-profile-section">
                            <div className="form-input-section-1">
                                <ColorTextField id="outlined-basic" variant="outlined" label="First Name" />
                            </div>
                            <div className="form-input-section-1">
                                <ColorTextField id="outlined-basic" variant="outlined" label="Last Name" />
                            </div>
                            <div className="form-input-section-2">
                                <ColorTextField id="outlined-basic" variant="outlined" label="Email" />
                            </div>
                            <div className="form-input-section-2">
                                <ColorTextField id="outlined-basic" variant="outlined" label="Phone Number" />
                            </div>

                            <div className='form-input-section-1'>
                                <div className="gender-field">
                                    <div><label className="input-label">Gender</label> </div>
                                    <Select
                                        id="outlined-select-gender"
                                        label="Gender"
                                        value={selectedGender}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Gender" />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>Select Your gender</em>;
                                            }

                                            return selected;
                                        }}
                                    >
                                        {gender.map((option, idx) => (
                                            <MenuItem key={idx} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div className='form-input-section-1'>
                                <div style={{ fontWeight: 'lighter' }}> <label className="input-label">Stack</label></div>
                                <div className="stack-field">
                                    <Select
                                        id="outlined-select-stack"
                                        label="Stack"
                                        value={selectedStack}
                                        onChange={handleStackChange}
                                        input={<OutlinedInput label="Gender" />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>Select Your stack</em>;
                                            };
                                            return selected;
                                        }}
                                    >
                                        {stack.map((option, idx) => (
                                            <MenuItem key={idx} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>


                            <div className="form-input-section-2">
                                <ColorTextField id="outlined-basic" variant="outlined" label="Address" />
                            </div>
                            <div className="form-input-section-2">
                                <div className='form-button-section'>
                                    <Box sx={{ marginBottom: "3rem" }}>
                                        <ColorButton onClick={() => alert("")}>
                                            {buttonText ? buttonText : "Save"}
                                        </ColorButton>
                                    </Box>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default SubscriberProfile;

