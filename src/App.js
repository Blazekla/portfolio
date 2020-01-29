import React from "react";
// import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import { CssBaseline, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import TestBar from "./components/sub_components/test";

import MenuAppBar from "./components/AppBar";
import HeroBanner from "./components/HeroUnit";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import "./styles/projects.css";

// import theme from "./styles/theme";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

// const useStyles = makeStyles(theme);

import { useTheme } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

///Potentially remove the code below////////
// const useStyles = makeStyles(theme => ({
//   /* The animation code */
//   "@keyframes example ": {
//     from: {
//       opacity: 0,
//       top: "50px"
//     },
//     to: {
//       visibility: "visible",
//       opacity: 1,
//       top: 0
//     }
//   },

//   container: {
//     visibility: "hidden",
//     //adding the postion to 'relative' helps to make the shift from bottom up!!
//     // position: "relative",
//     animationName: "$example",
//     animationDuration: "1.5s",
//     "animation-fill-mode": "forwards",
//     animationDelay: "1s",
//     animationTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)"
//   }
// }));
///Potentially remove the code above//////////////////////

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

const theming = createMuiTheme(theme);

function App() {
  // const classes = useStyles();

  const theme = useTheme();
  return (
    <React.Fragment>
      <ThemeProvider
        theme={theming}
        // style={{ backgroundColor: "#546686" }}//This doesn't work
      >
        <CssBaseline
        // style={{ backgroundColor: "#546686" }} //THis doesn't work
        />
        <div
          style={{
            backgroundColor: "#333",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
          }}

          // className={classes.container} this one works!
        >
          {console.log(theming)}
          {/* <div className={classes.container}> */}
          <MenuAppBar />
          {/* </div> */}
          {/* <TestBar /> */}
          <div
            className="content"

            //todo:
            //display as block?
          >
            <div
              className="mainContent"
              style={{
                minHeight: "100vh",
                width: "100%",
                maxWidth: "1600px",
                margin: "0px auto"
              }}
            >
              <HeroBanner />
              <Container maxWidth="md">
                <Projects

                //todo:
                //text-align: center;
                // max-width: 600px;
                // padding: 150px 0px;
                // margin: 0px auto 100px;
                />
              </Container>
              {/* Add margins during design phase*/}

              {/* <About />
              <Contact /> */}
            </div>
            <Footer
              id="howdy"
              //todo:
              //display:flex
              //justify content-center
              //alignt items: center
              //flex direction: column
              //padding 15px
            />
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
