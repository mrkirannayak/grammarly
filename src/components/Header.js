import React from "react";
import { Box } from "@mui/material";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <Box className="logo">
          <Link to="/">
            <img
              src={Logo}
              alt="Grammarly, High With Brilliant Writing"
              title="Grammarly, High With Brilliant Writing"
              width="140"
              height="33"
            />
          </Link>
        </Box>
        <Box className="login">
          <Link to="/inner" className="loginLink">
            Log in
          </Link>
        </Box>
      </header>
    </>
  );
};

export default Header;
