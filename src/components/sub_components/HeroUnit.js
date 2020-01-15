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
        style={{
          backgroundColor: "inherit",
          paddingTop: "150px",
          marginBottom: "40px"
          // marginTop: "150px"
        }}
      >
        <Typography color="textPrimary">Hi, my name is</Typography>
        <Typography
          variant="h3"
          // align="center"
          color="textSecondary"
          // style={{ backgroundColor: "orange" }}
          // paragraph
        >
          Luis Cristo.
        </Typography>
        <Typography
        // style={{ width: "500px" }}
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
            <Button variant="contained" color="primary">
              Contact
            </Button>
          </Grid>

          {/* <Grid item>
            <Button variant="outlined" color="primary">
              Terciary call to action
            </Button>
          </Grid> */}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HeroUnit;
