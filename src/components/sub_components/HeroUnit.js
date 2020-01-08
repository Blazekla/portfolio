import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

function HeroUnit() {
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        // style={{ backgroundColor: "green" }}
      >
        <Typography
          component="h1"
          // variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          React Developer
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          // style={{ backgroundColor: "orange" }}
          // paragraph
        >
          Luis Cristo focuses on professional React applications and websites
        </Typography>

        <Grid
          container
          spacing={4}
          justify="center"
          // style={{ backgroundColor: "blue" }}
        >
          <Grid item>
            <Button variant="contained" color="primary">
              Primary call to action
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Secondary call to action
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Terciary call to action
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HeroUnit;

{
  /* <Typography variant="h1" component="h2" gutterBottom align="center">
  Welcome to my page.
</Typography>
<Typography align="center" variant="h4">
  Hire me!
</Typography>
<Typography>THis is the robot Font dawg! Howdy aeiou</Typography> */
}
