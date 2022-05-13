import { Box, Typography, Container } from "@mui/material";
import React from "react";
import VideoBox from "./VideoBox";
import jobdonebg from "../assets/images/jobdonebg.png";
const GetJobDone = () => {
  return (
    <>
      <section
        className="GetJobDoneWrap"
        style={{
          backgroundImage: "url(" + jobdonebg + ")",
        }}
      >
        <Container>
          <Box className="GetJobDoneBox">
            <Box className="infoBox">
              <Typography variant="h3" color="primary.main">
                Get the Job Done
              </Typography>
              <Typography variant="body1" color="primary.main">
                Effective communication is the key to making things happen.
              </Typography>
            </Box>
            <VideoBox />
          </Box>
        </Container>
      </section>
    </>
  );
};

export default GetJobDone;
