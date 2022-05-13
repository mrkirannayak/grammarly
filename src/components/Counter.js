import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box } from "@mui/material";

const Counter = () => {
  return (
    <>
      <Box className="counterItem">
        <Box className="counterBody">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage1 = isVisible ? 76 : 0;
              return (
                <CircularProgressbar
                  value={percentage1}
                  text={`${percentage1}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    pathTransitionDuration: 6,
                    textColor: "#0e101a",
                    pathColor: "#15c39a",
                    trailColor: "#e6e6e8",
                  })}
                />
              );
            }}
          </VisibilitySensor>
        </Box>
        <Box className="counterInfo">
          76% of Grammarly users find writing more enjoyable.
        </Box>
      </Box>
      <Box className="counterItem">
        <Box className="counterBody">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage2 = isVisible ? 85 : 0;
              return (
                <CircularProgressbar
                  value={percentage2}
                  text={`${percentage2}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    pathTransitionDuration: 6,
                    textColor: "#0e101a",
                    pathColor: "#15c39a",
                    trailColor: "#e6e6e8",
                  })}
                />
              );
            }}
          </VisibilitySensor>
        </Box>
        <Box className="counterInfo">
          85% of Grammarly users are now stronger writers.
        </Box>
      </Box>
      <Box className="counterItem">
        <Box className="counterBody">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage3 = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={percentage3}
                  text={`${percentage3}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    pathTransitionDuration: 6,
                    textColor: "#0e101a",
                    pathColor: "#15c39a",
                    trailColor: "#e6e6e8",
                  })}
                />
              );
            }}
          </VisibilitySensor>
        </Box>
        <Box className="counterInfo">
          70% of Grammarly users reported an increased level of writing
          confidence.
        </Box>
      </Box>
    </>
  );
};

export default Counter;
