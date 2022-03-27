import { Box } from "@mui/system";
import Nav from "../../components/nav/Nav";
import React, { useState } from "react";
import Sidebar from "../../components/sideBar/sidebar";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
// import SubscriberDashboardProfile from "../../components/SubscriberDashboard/SubscriberDashboardProfile";
// import MainContent from "../../components/dashboard/mainContent/mainContent";
import SubscriberNotification from "../../components/dashboard/notification/subscriberNotification";
// import SubscriberProfile from "../../components/dashboard/profile/subscriberProfile";

const Dashboard = () => {
  const isTabletView = useMediaQuery("(max-width:900px)");
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div style={{ backgroundColor: "#8EA739", height: "100vh" }}>
      <Nav
        showNotification={true}
        numOfNotification={3}
        showAvatar={true}
        avatar={
          "https://res.cloudinary.com/decameal/image/upload/v1646843048/DecaMealAvatar/avatar_lhnohu.jpg"
        }
      />
      <Box
        style={{
          display: "flex",
          padding: "1em",
        }}
      >
        {isTabletView && (
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setShowSidebar(!showSidebar)}
            color="inherit"
            sx={{
              position: "absolute",
              left: "10px",
              top: "10px",
              zIndex: "100",
            }}
          >
            <ViewSidebarOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        )}
        {!isTabletView && <Sidebar />}
        {showSidebar && isTabletView && (
          <>
            <Sidebar />
          </>
        )}
        <Box
          style={{
            width: "72%",
            marginLeft: "2rem",
          }}
        >
          {/* <MainContent /> */}
          <SubscriberNotification />
          {/* <SubscriberProfile /> */}
          {/* <SubscriberDashboardProfile /> */}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
