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

const theme = {
  palette: {
    primary: { main: "#283c59", contrastText: "#ccd6f6" },
    secondary: { main: "#64ffda", contrastText: "#000000" }
  }
};

const theming = createMuiTheme(theme);

function App() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div
      // style={{ backgroundColor: "rgba(41, 61, 90, 0.99)" }}
      // className={classes.container} this one works!
      // style={{ backgroundColor: classes.container }}
      >
        {/* {console.log(classes.container)} */}
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
