import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, useMediaQuery } from "@mui/material";
import Testimonial from "./testimonial";
import author1 from "../images/author-1.png";
import author2 from "../images/author-2.png";

const Content = ({ showIcons }) => {
  return (
    <>
      {showIcons && (
        <KeyboardArrowLeftIcon sx={{ color: "#979797", fontSize: "7rem" }} />
      )}
      <Testimonial reviewer={"Uche Rhan"} avatar={author1} />
      <Testimonial reviewer={"Hassan Shola"} avatar={author2} />
      {showIcons && (
        <KeyboardArrowRightIcon
          sx={{ color: "#979797", fontSize: "7rem" }}
          className="arrow"
        />
      )}
    </>
  );
};

const TabletView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1EFEF",
        padding: "5rem 0",
      }}
    >
      <Content showIcons={false} />
    </Box>
  );
};
const DesktopView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1EFEF",
        padding: "5rem 0",
      }}
    >
      <Content showIcons={true} />
    </Box>
  );
};

const TestimonialSection = () => {
  const isTabletView = useMediaQuery("(max-width:950px)");
  return <>{isTabletView ? <TabletView /> : <DesktopView />}</>;
};

export default TestimonialSection;
