import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footerWrap">
        <Container>
          <Box className="footerLinks">
            <Box className="footerLinkBox">
              <Typography variant="h3" color="primary.main">
                Get Grammarly
              </Typography>
              <ul>
                <li>
                  <Link className="nav-link" to="/traditional-fetch">
                    Traditional Fetch
                  </Link>
                  <Link to="/inner">Grammarly for Your Desktop</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Windows</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Mac</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly Browser Extension</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Chrome</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Safari</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Firefox</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Edge</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for MS Office</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Google Docs</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for iPhone</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for iPad</Link>
                </li>
                <li>
                  <Link to="/inner">The Grammarly Keyboard</Link>
                </li>
              </ul>
            </Box>
            <Box className="footerLinkBox">
              <Typography variant="h3" color="primary.main">
                Learn More
              </Typography>
              <ul>
                <li>
                  <Link to="/inner">Plans</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly Premium</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly Business</Link>
                </li>
                <li>
                  <Link to="/inner">Grammarly for Education</Link>
                </li>
                <li>
                  <Link to="/inner">Blog</Link>
                </li>
                <li>
                  <Link to="/inner">Tech Blog</Link>
                </li>
                <li>
                  <Link to="/inner">Business Blog</Link>
                </li>
                <li>
                  <Link to="inner">Grammarly API</Link>
                </li>
              </ul>
            </Box>
            <Box className="footerLinkBox">
              <Typography variant="h3" color="primary.main">
                Features
              </Typography>
              <ul>
                <li>
                  <Link to="/inner">Grammar Checker</Link>
                </li>
                <li>
                  <Link to="/inner">Plagiarism Checker</Link>
                </li>
                <li>
                  <Link to="/inner">Essay Checker</Link>
                </li>
                <li>
                  <Link to="/inner">Tone Detector</Link>
                </li>
                <li>
                  <Link to="/inner">Style Guide</Link>
                </li>
                <li>
                  <Link to="/inner">Snippets</Link>
                </li>
                <li>
                  <Link to="/inner">Analytics</Link>
                </li>
                <li>
                  <Link to="/inner">Brand Tones</Link>
                </li>
              </ul>
            </Box>
            <Box className="footerLinkBox">
              <Typography variant="h3" color="primary.main">
                Company
              </Typography>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/inner">About</Link>
                </li>
                <li>
                  <Link to="/inner">Careers &amp; Culture</Link>
                </li>
                <li>
                  <Link to="/inner">Press</Link>
                </li>
                <li>
                  <Link to="/inner">Affiliates</Link>
                </li>
                <li>
                  <Link to="/inner">User Trust Guidelines</Link>
                </li>
                <li>
                  <Link to="/inner">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/inner">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/inner">CA Privacy Notice</Link>
                </li>
                <li>
                  <Link to="/inner">Security</Link>
                </li>
              </ul>
            </Box>
            <Box className="footerLinkBox">
              <Typography variant="h3" color="primary.main">
                Connect
              </Typography>
              <ul>
                <li>
                  <Link to="/inner">Help Center</Link>
                </li>
                <li>
                  <Link to="/inner">Contact Us</Link>
                </li>
                <li>
                  <Link to="/inner">Facebook</Link>
                </li>
                <li>
                  <Link to="/inner">Instagram</Link>
                </li>
                <li>
                  <Link to="/inner">Twitter</Link>
                </li>
                <li>
                  <Link to="/inner">LinkedIn</Link>
                </li>
              </ul>
            </Box>
          </Box>
          <Box className="copyright">2022 © Grammarly Inc.</Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
