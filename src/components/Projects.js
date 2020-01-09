import React from "react";
// import Typography from "@material-ui/core/Typography";
import {
  Container,
  // Paper,
  // useMediaQuery,
  Grid
  // Card,
  // CardMedia,
  // CardActions,
  // CardContent,
  // Button
} from "@material-ui/core";
// import {
//   createMuiTheme,
//   ThemeProvider,
//   useTheme,
//   makeStyles
// } from "@material-ui/styles";
import ContentCard from "./sub_components/Cards";
// import { green } from "@material-ui/core/colors";

// import "typeface-roboto";
// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: "darkgreen"
//   }
// }));

const count = [1, 2, 3, 4];
function Projects() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("sm"));
  // const matches = useMediaQuery("(min-width:600px)");
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg" style={{ backgroundColor: "inherit" }}>
        {/* Grid Section Start */}
        <Grid
          container
          // direction="row"
          // justify="center"
          // alignItems="flex-start"
          spacing={8}
        >
          {count.map(id => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <ContentCard />
            </Grid>
          ))}
          {/* <Grid item xs={12} sm={6} md={4}>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </Grid> */}
        </Grid>
        {/* Grid secion End */}

        {/* <Typography>{`The theme value of sm is : ${matches}`}</Typography>
        <Paper>Howdy</Paper> */}
      </Container>
    </React.Fragment>
  );
}

export default Projects;
