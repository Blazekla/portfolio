import React from "react";

import "typeface-roboto";
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import MenuAppBar from "./components/AppBar";
import HeroBanner from "./components/HeroUnit";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import theme from "./styles/theme";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

//Code below enables responsive font sizes
let theming = createMuiTheme(theme);
theming = responsiveFontSizes(theming);
////

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theming}>
        <CssBaseline />
        <div
          style={{
            backgroundColor: "#333",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
          }}
        >
          <MenuAppBar />
          <div className="content">
            <Container maxWidth="md" className="mainContent">
              <HeroBanner />
              <Container
                id="projects"
                maxWidth="md"
                style={{ paddingTop: "70px" }}
              >
                <Projects />
              </Container>

              <About />
              <Contact />
            </Container>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
