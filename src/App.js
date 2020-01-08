import React from "react";
import Typography from "@material-ui/core/Typography";
// import "typeface-roboto";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";
import MenuAppBar from "./components/AppBar";
import ContentCard from "./components/sub_components/Cards";
import HeroBanner from "./components/sub_components/HeroUnit";

import TestBar from "./components/sub_components/Test";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <MenuAppBar /> */}
      <TestBar />
      <HeroBanner />
      <About />
      <br />
      <br />
      <br />
      <Projects />

      <br />
      <br />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
