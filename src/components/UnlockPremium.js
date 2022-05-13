import React from "react";
import { Box, Typography } from "@mui/material";
import FreeGrammarly from "./FreeGrammarly";
import PremiumGrammarly from "./PremiumGrammarly";

const UnlockPremium = () => {
  return (
    <>
      <section className="unlockPremiumWrap">
        <Box className="unlockPremiumBox">
          <Box className="headingBox">
            <Typography variant="h2" color="primary.main">
              Up-Level Your Communication
            </Typography>
            <Typography variant="body1" color="primary.main">
              Unlock Grammarly Premium’s advanced features and suggestions.
            </Typography>
          </Box>

          <Box className="priceBoxWrap">
            <FreeGrammarly />
            <PremiumGrammarly />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default UnlockPremium;
