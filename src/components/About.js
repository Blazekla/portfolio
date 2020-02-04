import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

function About() {
  const theme = useTheme();
  const color = theme.palette.primary.contrastText;
  return (
    <div
      id="about"
      style={{
        backgroundColor: "inherit",
        textAlign: "center",
        marginBottom: "50px"
      }}
    >
      <Typography variant="h4" color="secondary">
        About Me
      </Typography>

      <Typography
        // paragraph
        style={{ color: color }}
      >
        Here are some technologies I've been using:
      </Typography>

      <Typography style={{ color: color }}>
        React, ES6+, HTML, CSS, Material-UI, Netlify, Node.js, Express, etc..
      </Typography>
    </div>
  );
}

export default About;
