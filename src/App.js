import React from "react";
// import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import { CssBaseline, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import MenuAppBar from "./components/AppBar";
import HeroBanner from "./components/HeroUnit";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import theme from "./styles/theme";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

import { useTheme } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

const theme = {
  palette: {
    primary: { main: "#283c59", contrastText: "#ccd6f6" },
    secondary: { main: "#64ffda", contrastText: "#000000" },
    background: {
      // paper: "#546686",
      // default: "#020c1b"
      default: "#333"
    }

    //Other colors to use #cee1d5, #b5a282, #e0462b

    //     Color Semantics
    // Bootstrap's UI colors contain semantic information and shouldn't be changed arbitrarily. However we can tweak them to better fit the color palette.

    // Rhino	#324763	Primary
    // Timber Green	#1c3137	Info
    // Goblin	#449056	Success
    // Ochre	#c2801e	Warning
    // Pomegranate	#f44336	Danger

    // background: { paper: "#283c59", default: "#fafafa" }
  }
};

let theming = createMuiTheme(theme);
theming = responsiveFontSizes(theming);

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
            {/* todo: replace div below with container component if max width md? */}
            <Container
              maxWidth="md"
              // className="mainContentTest"
              // style={{
              //   minHeight: "100vh",
              //   // width: "100%",
              //   maxWidth: "1600px",
              //   margin: "0px auto"
              // }}
            >
              {/* <div className="mainContent"> */}
              <HeroBanner />
              <Container maxWidth="md">
                <Projects />
              </Container>

              {/* <About />
              <Contact /> */}
              {/* </div> */}
            </Container>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
