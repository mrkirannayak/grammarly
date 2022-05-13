import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import swoosh from "../assets/images/swoosh.png";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#11a683",
  "&:hover": {
    backgroundColor: "#15c39a",
  },
}));

const UpgradeGrammarlyPremium = () => {
  return (
    <>
      <section
        className="upgradePremiumWrap"
        style={{
          backgroundImage: "url(" + swoosh + ")",
        }}
      >
        <Box className="upgradePremiumBox">
          <Typography variant="h2" color="primary.main">
            Take Your Writing from Good to Great
          </Typography>
          <Typography variant="body1" color="primary.main">
            Unlock Grammarly Premium’s advanced features to up-level your
            communication.
          </Typography>
          <Box className="unlockButton">
            <ColorButton variant="contained" className="button">
              Upgrade to Grammarly Premium
            </ColorButton>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default UpgradeGrammarlyPremium;
