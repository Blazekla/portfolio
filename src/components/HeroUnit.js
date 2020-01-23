import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  /* The animation code */
  "@keyframes example ": {
    from: {
      opacity: 0,
      top: "20px"
    },
    to: {
      visibility: "visible",
      opacity: 1,
      top: 0
    }
  },

  container: {
    visibility: "hidden",
    //adding the postion to 'relative' helps to make the shift from bottom up!!
    // position: "relative",
    animationName: "$example",
    animationDuration: "300ms",
    "animation-fill-mode": "forwards",
    animationDelay: "30s",
    animationTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
}));
function HeroUnit() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Container
        maxWidth="md"
        style={{
          paddingTop: "150px",
          margin: "0px auto 100px"
        }}
      > */}
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        style={{
          paddingTop: "150px",
          margin: "0px auto 100px"
        }}
      >
        <div
          className={classes.container}
          style={{ position: "relative", animationDelay: "100ms" }}
        >
          <Typography
            style={{
              color: theme.palette.primary.contrastText
            }}
          >
            Hi, my name is
          </Typography>
        </div>
        <Typography
          variant="h3"
          color="secondary"
          paragraph
          className={classes.container}
          style={{ position: "relative", animationDelay: "200ms" }}
        >
          Luis Cristo.
        </Typography>
        <Typography
          style={{
            color: theme.palette.primary.contrastText,
            position: "relative",
            animationDelay: "300ms"
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
          style={{ marginTop: "20px" }}
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.container}
              style={{ animationDelay: "400ms" }}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default HeroUnit;
