import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Counter from "./Counter";

const CustomersReport = () => {
  return (
    <>
      <section className="premiumCustomersWrap">
        <Container>
          <Box className="premInfo">
            <Typography variant="h3" color="primary.main">
              Premium Customers Report Better Results
            </Typography>
            <Typography variant="body1" color="primary.main">
              We routinely survey Grammarly users and have found that:
            </Typography>
          </Box>
          <Box className="counterBox">
            <Counter />
          </Box>
        </Container>
      </section>
    </>
  );
};

export default CustomersReport;
