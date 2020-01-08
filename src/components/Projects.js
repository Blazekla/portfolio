import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Container,
  Paper,
  useMediaQuery,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
  makeStyles
} from "@material-ui/styles";

import { green } from "@material-ui/core/colors";

// import "typeface-roboto";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "darkgreen"
  }
}));
function Projects() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="xl" style={{ backgroundColor: "green" }}>
        {/* Grid Section Start */}
        <Grid
          container
          // direction="row"
          // justify="center"
          // alignItems="flex-start"
          spacing={8}
        >
          {/* <GriD Comment out container spacing={4}> */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
          {/* </GriD> */}
        </Grid>
        {/* Grid secion End */}

        <Typography>{`The theme value of sm is : ${matches}`}</Typography>
        <Paper>Howdy</Paper>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
