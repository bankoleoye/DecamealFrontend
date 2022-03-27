import List from "../list/List";
import "./footer.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppStoreImg from "../../assets/img/App-Store-Badge.png";
import GoogleStoreImg from "../../assets/img/googleplay.png";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <footer>
        <div className="footer-container">
          <Container fixed className="footer-list">
            <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
              <Grid item xs={3}>
                <List listTitle="Company" />
                <List listText="About Us" />
                <List listText="Careers" />
                <List listText="Contact Us" />
              </Grid>
              <Grid item xs={3}>
                <List listTitle="Support" />
                <List listText="Help Center" />
                <List listText="Safety Center" />
              </Grid>
              <Grid item xs={3}>
                <List listTitle="Legal" />
                <List listText="Cookies Policy" />
                <List listText="Privacy Policy" />
                <List listText="Terms of Service" />
                <List listText="Dispute Resolution" />
              </Grid>
              <Grid item xs={3}>
                <List listTitle="Install App" />
                <div className="download">
                  <img src={GoogleStoreImg} alt="mm" />
                  <img src={AppStoreImg} alt="mm" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <hr />
        <Grid
          container
          columns={{ xs: 3, sm: 6, md: 12 }}
          className="footer-socials"
        >
          <Grid item xs={6}>
            <p>&copy; 2021 DECAMEAL, All rights reserved</p>
          </Grid>
          <Grid item xs={6}>
            <div className="social-media-accounts">
              <div className="insta">
                <InstagramIcon className="centered" />
              </div>
              <div className="twitter">
                <TwitterIcon className="centered" />
              </div>
              <div className="youtube">
                <YouTubeIcon className="centered" />
              </div>
            </div>
          </Grid>
        </Grid>
      </footer>
    </React.Fragment>
  );
}
