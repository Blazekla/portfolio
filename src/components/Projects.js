import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import ContentCard from "./sub_components/Cards";
import { useTheme } from "@material-ui/core/styles";
import {
  Transition,
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import pageData from "./data/pageData";

const count = [1, 2, 3, 4, 5, 6];

function Projects() {
  const theme = useTheme();
  //use the following to enable the animation on first load//
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 4000);
    return () => clearTimeout(timeout);
  }, []);

  ////
  ////
  //end of animation hooks//

  return (
    // <Container
    //   maxWidth="lg"
    //   style={{
    //     backgroundColor: theme.palette.primary.main,
    //     borderRadius: "16px",
    //     margin: "0px auto 100px"
    //   }}
    // >

    <CSSTransition
      in={isMounted}
      timeout={1000}
      mountOnEnter
      classNames={{
        enter: "fadeup-enter",
        enterActive: "fadeup-enter-active",
        exit: "",
        exitActive: ""
      }}
    >
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
        {pageData.project.map(({ title, code }, id) => {
          return (
            <Grid
              item
              key={id}
              xs={12}
              sm={6}
              md={4}
              style={{ padding: "16px" }}
            >
              <ContentCard link={code} title={title} />
            </Grid>
          );
        })}
      </Grid>
    </CSSTransition>
    // {/* </Container> */}
  );
}

export default Projects;
