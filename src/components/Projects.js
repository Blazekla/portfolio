import React from "react";
import { Container, Grid } from "@material-ui/core";
import ContentCard from "./sub_components/Cards";
import { useTheme } from "@material-ui/core/styles";
import { Transition, TransitionGroup } from "react-transition-group";

const count = [1, 2, 3, 4, 5, 6];

function Projects() {
  const theme = useTheme();
  return (
    <React.Fragment style={{ color: "pink", backgroundColor: "orange" }}>
      {/* <Container
        maxWidth="lg"
        style={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "16px",
          margin: "0px auto 100px"
        }}
      > */}
      {/* Grid Section Start */}
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="center"
        style={
          {
            // backgroundColor: theme.palette.primary.main,
            // borderRadius: "8px",
            // margin: "0px auto 100px",
          }
        }
      >
        {count.map(id => (
          /* Adding individual content cards for now */
          <Grid item key={id} xs={12} sm={6} md={4} style={{ padding: "16px" }}>
            <ContentCard link={"https://github.com/Blazekla"} />
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
      {/* </Container> */}
    </React.Fragment>
  );
}

export default Projects;
