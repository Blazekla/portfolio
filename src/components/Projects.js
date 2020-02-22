import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ContentCard from "./sub_components/Cards";

import { CSSTransition } from "react-transition-group";
import pageData from "./data/pageData";

function Projects() {
  //use the following to enable the animation on first load//
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 4000);
    return () => clearTimeout(timeout);
  }, []);
  //end of animation hooks//

  return (
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
        style={{
          margin: "0px auto 100px"
        }}
      >
        {pageData.project.map(
          (
            { title, github, external, tech, image, imageName, description },
            id
          ) => {
            return (
              <Grid
                item
                key={id}
                xs={12}
                sm={6}
                md={6}
                style={{ padding: "16px" }}
              >
                <ContentCard
                  title={title}
                  code={github}
                  external={external}
                  technology={tech}
                  image={image}
                  imageName={imageName} //refactor to omit passing down this prop
                  desc={description}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </CSSTransition>
  );
}

export default Projects;
