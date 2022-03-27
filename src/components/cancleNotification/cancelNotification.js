import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import cancelimage from "../../assets/cancel-Icon.png";
import "./cancelNotification.css";

export default function ClickAway() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box>
      {open ? (
        <Box className="box-container">
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box
              sx={{
                height: 400,
                borderRadius: "20px",
                boxShadow: 24,
                px: 4,
                pt: 2,
                pb: 3,
                zIndex: 99,
                backgroundColor: "#fff",
              }}
            >
              <span className="material-icons">
                <img src={cancelimage} alt="" />
              </span>
              <p id="modal-description">Subscriber Cancelled</p>
            </Box>
          </ClickAwayListener>
        </Box>
      ) : null}
    </Box>
  );
}
