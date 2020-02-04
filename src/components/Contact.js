import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Contact() {
  const theme = useTheme();
  return (
    <React.Fragment>
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
        <Typography
          style={{ marginTop: "20px" }}
          paragraph
          style={{ color: theme.palette.primary.contrastText }}
        >
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
    </React.Fragment>
  );
}

export default Contact;
