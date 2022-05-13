import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import "swiper/css/bundle";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inner from "./pages/Inner";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E101A",
      light: "#6D758D",
    },
    secondary: {
      main: "#6D758D",
      light: "#0066ff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "42px",
      fontWeight: 700,
      lineHeight: "52px",
      letterSpacing: "-.005em",
      margin: "0",
    },
    h2: {
      fontSize: "29px",
      fontWeight: 700,
      lineHeight: "38px",
      letterSpacing: "-.003em",
      margin: "0",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      margin: "0",
    },
    subtitle1: {
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "24px",
      margin: "0",
    },
    subtitle2: {
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: ".04em",
      margin: "0",
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "32px",
      margin: "0",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <section id="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="inner" element={<Inner />} />
          </Routes>
          <Footer />
        </section>
      </ThemeProvider>
    </>
  );
};

export default App;
