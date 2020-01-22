import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { NONAME } from "dns";

const useStyles = makeStyles(theme => ({
  /* The animation code */
  "@keyframes example ": {
    from: {
      // display: "none",
      visibility: "hidden",
      opacity: 0,
      top: "50px"
      // transform: "translate(0px,50px)"
      // backgroundColor: "red"
    },
    to: {
      // display: "
      visibility: "visible",
      opacity: 1,
      top: 0
      // backgroundColor: "yellow"
    }
  },

  container: {
    // width: "100px",
    // height: "100px",
    // backgroundColor: "red",
    // "background-color": "red",
    visibility: "hidden",
    animationName: "$example",
    animationDuration: "1.5s",
    "animation-fill-mode": "forwards",
    animationDelay: "1s",
    // animationTimingFunction: "ease"
    // transitionDelay: "3s",
    animationTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
}));

function HeroUnit() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        style={{
          // backgroundColor: "#283c59",
          paddingTop: "150px",
          margin: "0px auto 100px"
          // marginBottom: "40px"
          // marginTop: "150px"
        }}
      >
        <Typography
          // color="textPrimary"
          style={{ color: theme.palette.primary.contrastText }}
          className={classes.container}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h3"
          color="secondary"
          paragraph
          className={classes.container}
        >
          Luis Cristo.
        </Typography>
        <Typography
          style={{
            color: theme.palette.primary.contrastText,
            transitionDelay: "3s"
          }}
          className={classes.container}
        >
          I will help you create professional and beatiful solutions for all
          your web development needs.
        </Typography>
        <Grid
          container
          spacing={4}
          justify="flex-start"
          // style={{ marginTop: "20px" }}
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.container}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HeroUnit;
