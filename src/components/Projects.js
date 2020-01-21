import React from "react";
import { Container, Grid } from "@material-ui/core";
import ContentCard from "./sub_components/Cards";
import { useTheme } from "@material-ui/core/styles";

const count = [1, 2, 3, 4, 5, 6];
function Projects() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "16px",
          margin: "0px auto 100px"
        }}
      >
        {/* Grid Section Start */}
        <Grid container spacing={8} justify="center">
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
      </Container>
    </React.Fragment>
  );
}

export default Projects;
