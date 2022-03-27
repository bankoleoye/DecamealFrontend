import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import "./kitchen_profile.css";
import human from "../../assets/header_background_image.png";
import profile from "../../assets/profile_image.png";
import Icon from "@mui/material/Icon";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Chip from "@mui/icons-material/Phone";

const kitchenProfile = () => {
  return (
    <div className="container">
      <Card className="card-body">
        <div className="kitchen_bg_header">
          <img src={human} alt="mm" className="profile_picture" />
          <div className="profile-pic-wrapper">
            <img src={profile} alt="mm" className="kitchen-staff-picture" />
          </div>
        </div>
        <div className="text">
          <h3 style={{ marginBottom: '0.5em' }}>Anthony Obatola</h3>
          <Typography className="staff">kitchen staff</Typography>
          <div className="icon">
            <Typography className="phone">
              <Chip
                icon={<Icon className="fas fa-phone-alt" />}
                label="Call me"
              />
              <span>0801464856765</span>
            </Typography>
            <Typography className="mail">
              <MailOutlineIcon
                icon={<Icon className="mail-icon" />}
                label="mail"
              />
              <span>Anthonyobatola@gmail.com</span>
            </Typography>
            <Typography className="location">
              <FmdGoodIcon
                icon={<Icon className="location_icon" />}
                label="location"
              />
              <span>07, Asajon way, Sangotedo, Ajah, Lagos State</span>
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default kitchenProfile;
