import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";

function About() {
  ////Hooks to enable animation
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 4250);
    return () => clearTimeout(timeout);
  }, []);
  /////End of animation hooks

  const theme = useTheme();
  const color = theme.palette.primary.contrastText;
  return (
    <CSSTransition
      in={isMounted}
      timeout={300}
      mountOnEnter
      classNames="fadeup"
    >
      <div
        id="about"
        style={{
          backgroundColor: "inherit",
          textAlign: "center",
          marginBottom: "100px",
          paddingTop: "70px"
        }}
      >
        <Typography
          variant="h4"
          color="secondary"
          style={{ marginBottom: "20px" }}
        >
          About Me
        </Typography>
        <Typography paragraph>
          Ever since I came across computers as a kid, I've been mesmerized by
          their potential. I've always found myself taking opportunites to learn
          more about computers by tinkering and building with them. I have
          decided to take this passion and turn it into a career.
        </Typography>

        <Typography>Here are some technologies I've been using:</Typography>

        <Typography>
          React, ES6+, HTML, CSS, Material-UI, Redux, Axios, Netlify, Node.js,
          Express.
        </Typography>
      </div>
    </CSSTransition>
  );
}

export default About;
