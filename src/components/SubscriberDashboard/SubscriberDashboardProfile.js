import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ReactComponent as SmallLessIcon } from "./svg/small-left-caret.svg";
import { ReactComponent as BigLessIcon } from "./svg/big-left-caret.svg";
import { ReactComponent as DropdownIcon } from "./svg/dropdown-caret.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { tickets } from "../../store/slices/ticketsSlice";


const SubscriberDashboardProfile = ({
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
  Text8,
  Text9,
  Text10,
  Text11,
  Text12,
  Text13,
}) => {
  const dispatch = useAppDispatch();
  const ticketList = useAppSelector((state) => state.tickets);
  useEffect(() => {
    dispatch(tickets());
  }, [dispatch]);

  console.log(ticketList);

  return (
    <Box
      style={{
        display: "flex",
        gap: "29px",
        fontFamily: "poppins",
      }}
    >
      <Box
        style={{
          width: "716px",
        }}
      >
        <Box
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 27px 11px 52px",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <Box style={{ fontWeight: "bold" }}>
            {Text2 ? Text2 : "Week's Meal"}
          </Box>
          <Box
            style={{
              width: "185px",
              height: "28px",
              borderRadius: "5px",
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px 36px",
              border: "2px solid #000",
            }}
          >
            <SmallLessIcon />
            <Typography>{Text3 ? Text3 : "25-31/10/2021"}</Typography>
            <SmallLessIcon
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </Box>
        </Box>
        <Box
          style={{
            backgroundColor: "#fff",
            marginTop: "6px",
            padding: "29px 52px",
          }}
        >
          <Box
            style={{
              width: "607px",
              height: "30px",
              borderRadius: "5px",
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              border: "2px solid #000",
              margin: "auto",
            }}
          >
            <BigLessIcon /> <Box>{Text1 ? Text1 : "Wednesday"}</Box>
            <BigLessIcon
              style={{
                transform: "rotate(180deg)",
              }}
            />{" "}
          </Box>

          {Array.from({ length: 2 }, (_, i) => (
            <div style={{ display: "block", width: "100%" }}>
              <Box
                style={{
                  padding: "10px 0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography style={{ textAlign: "left" }}>
                    {Text4 ? Text4 : "11:00 am"}
                  </Typography>
                  <h3>{Text5 ? Text5 : "Brunch"} </h3>
                </Box>

                <Box>
                  <Box
                    style={{
                      background: "rgba(142, 167, 57, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingLeft: "65px",
                      paddingRight: "11px",
                      width: "185px",
                      height: "28px",
                      borderRadius: "20px",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: "bold",
                      marginTop: "40px",
                    }}
                  >
                    <Box>{Text6 ? Text6 : "Amala"}</Box>
                    <DropdownIcon />
                  </Box>
                  <Box
                    style={{
                      background: "rgba(7, 158, 0, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingLeft: "65px",
                      paddingRight: "11px",
                      width: "185px",
                      height: "28px",
                      borderRadius: "20px",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: "bold",
                      marginTop: "7px",
                    }}
                  >
                    <Box>{Text11 ? Text11 : "Egusi Soup"}</Box>
                    <DropdownIcon />
                  </Box>
                </Box>

                <Box
                  style={{
                    width: "188px",
                    marginTop: "40px",
                  }}
                >
                  {" "}
                  {Text7
                    ? Text7
                    : "We are what we Eat"}
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </Box>

      <Box
        style={{
          width: "246px",
        }}
      >
        <Box
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 0",
            borderRadius: "5px 5px 0 0",
            fontWeight: "600",
            height: "66px",
          }}
        >
          {Text8 ? Text8 : "Messages"}
        </Box>
        <Box
          style={{
            width: "246px",
            marginTop: "7px",
          }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <>
              <Box
                style={{
                  backgroundColor: `${
                    i === 0
                      ? "rgba(228, 255, 113, 0.11"
                      : i === 1
                      ? "rgba(131, 207, 128, 0.17)"
                      : "rgba(196, 196, 196, 0.1)"
                  }`,
                  padding: "9px 11px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
                key={i}
              >
                <Typography style={{ textAlign: "left" }}>
                  {Text9 ? Text9 : "19 hours ago"}
                </Typography>
                <Typography style={{ textAlign: "left", fontWeight: "bold" }}>
                  {Text13 ? Text13 : "Subscription!"}
                </Typography>
                <Typography style={{ textAlign: "left" }}>
                  {Text10
                    ? Text10
                    : "A well-balanced diet could improve your mood and your overall health. "}
                  {Text12
                    ? Text12
                    : "You are what you Eat!"}
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriberDashboardProfile;