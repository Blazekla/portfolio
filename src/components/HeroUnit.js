import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function HeroUnit() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        style={{
          // backgroundColor: "#283c59",
          paddingTop: "150px",
          marginBottom: "40px"
          // marginTop: "150px"
        }}
      >
        <Typography
          // color="textPrimary"
          style={{ color: theme.palette.primary.contrastText }}
        >
          Hi, my name is
        </Typography>
        <Typography variant="h3" color="secondary" paragraph>
          Luis Cristo.
        </Typography>
        <Typography style={{ color: theme.palette.primary.contrastText }}>
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
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HeroUnit;
