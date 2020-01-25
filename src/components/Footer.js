import React from "react";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

function Copyright() {
  const theme = useTheme();
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: theme.palette.primary.contrastText }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Blazekla/">
        Luis Cristo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    // backgroundColor: "#333",
    // backgroundColor: "#293d5a",
    backgroundColor: "#020c1b",
    padding: theme.spacing(6)
  }
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer id="footeridinside" className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          style={{ color: theme.palette.primary.contrastText }}
        >
          Philosophy
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          style={{ color: theme.palette.primary.contrastText }}
        >
          Live A Focused And Strenuous Life
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default Footer;
