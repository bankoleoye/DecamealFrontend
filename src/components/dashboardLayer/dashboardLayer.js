import { Box } from "@mui/system";
import Nav from "../nav/Nav";
import React, { useState } from "react";
import Sidebar from "../sideBar/sidebar";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";

const DashboardLayer = ({ children }) => {
  const isTabletView = useMediaQuery("(max-width:900px)");
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div style={{ backgroundColor: "#8EA739", minHeight: "120vh" }}>
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
            <Sidebar styling={{position: "absolute", top: "10px", width: "250px"}} />
          </>
        )}
        <Box
          style={{
            width: isTabletView ? "100%" : "72%",
            marginLeft: "2rem",
          }}
        >
          { children }
        </Box>
      </Box>
    </div>
  );
};

export default DashboardLayer;
