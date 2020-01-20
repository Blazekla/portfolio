import React from "react";

import { Container, Grid } from "@material-ui/core";

import ContentCard from "./sub_components/Cards";

const count = [1, 2, 3, 4, 5, 6];
function Projects() {
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        // style={{ backgroundColor: "inherit" }}
      >
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
