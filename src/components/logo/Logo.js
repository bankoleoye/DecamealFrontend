import React from "react";
import { ReactComponent as LogoSVG } from "./logo.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          fontWeight: "900",
        }}
      >
        DecaMea
        <span>
          <LogoSVG />
        </span>
      </div>
    </NavLink>
  );
};

export default Logo;
