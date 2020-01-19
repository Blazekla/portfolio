import React from "react";
// import Typography from "@material-ui/core/Typography";
// import "typeface-roboto";
import { CssBaseline, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
// import ContentCard from "./components/sub_components/Cards";
import TestBar from "./components/sub_components/test";

import HeroBanner from "./components/HeroUnit";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MenuAppBar from "./components/AppBar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ backgroundColor: "rgba(41, 61, 90, 0.99)" }}>
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
      </div>
    </React.Fragment>
  );
}

export default App;
