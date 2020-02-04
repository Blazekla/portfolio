import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";

function Contact() {
  ////Hooks to enable animation
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 4500);
    return () => clearTimeout(timeout);
  }, []);
  ////End of animation hooks

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
        id="contact"
        style={{
          backgroundColor: "inherit",
          textAlign: "center",
          marginBottom: "100px"
        }}
      >
        <Typography
          style={{ marginBottom: "10px" }}
          color="secondary"
          variant="h4"
        >
          Contact
        </Typography>
        <Typography paragraph style={{ marginTop: "20px", color: color }}>
          I'm excited to work with you. Looking forward to hearing from you!
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          href="mailto:luiscristodev@gmail.com"
          style={{ padding: "20px 28px", marginTop: "30px" }}
        >
          Say Hello
        </Button>
      </div>
    </CSSTransition>
  );
}

export default Contact;
