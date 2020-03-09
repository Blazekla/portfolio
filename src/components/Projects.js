import React, {
  // useState,
  useEffect,
  useRef
} from "react";
import { Grid } from "@material-ui/core";
import ContentCard from "./sub_components/Cards";
// import { CSSTransition } from "react-transition-group";
import pageData from "./data/pageData";
import Typography from "@material-ui/core/Typography";
import ScrollReveal from "scrollreveal";

function Projects() {
  //use the following to enable the animation on first load//
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsMounted(true), 4000);
  //   return () => clearTimeout(timeout);
  // }, []);
  //end of animation hooks//
  const slideUp = {
    distance: "150%",
    origin: "bottom",
    duration: 1000,
    delay: 200,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    // viewFactor: 1,
    viewOffset: { top: 0, right: 0, bottom: 300, left: 0 }
  };
  const revealContainer = useRef(null);
  useEffect(() => ScrollReveal().reveal(revealContainer.current, slideUp), []);

  return (
    // <CSSTransition
    //   in={isMounted}
    //   timeout={1000}
    //   mountOnEnter
    //   classNames={{
    //     enter: "fadeup-enter",
    //     enterActive: "fadeup-enter-active",
    //     exit: "",
    //     exitActive: ""
    //   }}
    // >
    <div ref={revealContainer}>
      <Typography align="center" variant="h4" color="secondary">
        Projects
      </Typography>
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
    </div>
    // </CSSTransition>
  );
}

export default Projects;
