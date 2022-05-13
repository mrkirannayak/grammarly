import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import bannerbg from "../assets/images/bannerbg.png";
import InformationSlider from "./InformationSlider";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#11a683",
  "&:hover": {
    backgroundColor: "#15c39a",
  },
}));

const BannerSection = () => {
  return (
    <>
      <section
        className="bannerSectionWrap"
        style={{
          backgroundImage: "url(" + bannerbg + ")",
        }}
      >
        <Container>
          <Box className="bannerTitle">
            <Typography variant="h1" color="primary.main">
              Aim High With Brilliant Writing
            </Typography>

            <Box className="bannerButton">
              <ColorButton variant="contained" className="button">
                Upgrade to Grammarly Premium
              </ColorButton>
            </Box>
          </Box>
          <InformationSlider />
        </Container>
      </section>
    </>
  );
};

export default BannerSection;
