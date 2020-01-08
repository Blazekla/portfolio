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

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAppBar />
      <Typography variant="h1" component="h2" gutterBottom align="center">
        Welcome to my page.
      </Typography>
      <Typography align="center" variant="h4">
        Hire me!
      </Typography>
      <Typography>THis is the robot Font dawg! Howdy aeiou</Typography>
      <br></br>
      <ContentCard />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
