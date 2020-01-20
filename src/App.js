import React from "react";
// import Typography from "@material-ui/core/Typography";
// import "typeface-roboto";
import { CssBaseline, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import TestBar from "./components/sub_components/test";

import MenuAppBar from "./components/AppBar";
import HeroBanner from "./components/HeroUnit";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import theme from "./styles/theme";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

// const useStyles = makeStyles(theme);

import { useTheme } from "@material-ui/core/styles";

const theme = {
  palette: {
    primary: { main: "#283c59", contrastText: "#ccd6f6" },
    secondary: { main: "#64ffda", contrastText: "#000000" },
    background: { paper: "#546686", default: "#546686" }

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

const theming = createMuiTheme(theme);

function App() {
  // const classes = useStyles();

  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        style={{ backgroundColor: "#333" }}

        // className={classes.container} this one works!
      >
        <ThemeProvider theme={theming}>
          {console.log(theming)}
          <MenuAppBar />
          {/* <TestBar /> */}

          <HeroBanner />
          <Container>
            <div>
              <Projects />
              {/* Add margins during design phase*/}
              <div style={{ marginTop: "30px", backgroundColor: "red" }}>
                {/* <About />
              <Contact /> */}
              </div>
            </div>
          </Container>
          <Footer />
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
