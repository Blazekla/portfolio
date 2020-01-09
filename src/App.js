import React from "react";
// import Typography from "@material-ui/core/Typography";
// import "typeface-roboto";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";
import MenuAppBar from "./components/AppBar";
// import ContentCard from "./components/sub_components/Cards";
import HeroBanner from "./components/sub_components/HeroUnit";
import Container from "@material-ui/core/Container";

import TestBar from "./components/sub_components/test";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAppBar />
      {/* <TestBar /> */}
      <Container>
        <HeroBanner />

        <div
          style={{
            margin: "-60px 30px 0px",
            borderRadius: "6px",
            boxShadow:
              "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Projects />
          {/* Add margins during design phase*/}
          <div style={{ marginTop: "30px", backgroundColor: "red" }}>
            <About />
            <Contact />
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
