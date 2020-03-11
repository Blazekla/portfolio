import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import ContentCard from "./sub_components/Cards";

import pageData from "./data/pageData";
import Typography from "@material-ui/core/Typography";
import ScrollReveal from "scrollreveal";

import test from "./data/images";

function Projects() {
  const revealContainer = useRef(null);

  useEffect(() => {
    const slideUp = {
      distance: "40px",
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
    return ScrollReveal().reveal(revealContainer.current, slideUp);
  }, []);

  //Code below to import dynamic images used for project
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  // const patpat = importAll(require.context("../", true, /\.jpg$/));
  const patpat = importAll(require.context("./static/images", false, /\.jpg$/));
  //end of dynamic image import

  return (
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
        {test.map(item => console.log(item.alt))}
        {/* {console.log(test[0])} */}
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
                {test.map(({ title, src, alt, full }, id) => {
                  console.log("trying now...", src);
                  // let requireTest = require(src);
                  // console.log(patpat[full]);
                  console.log(patpat);
                  return (
                    <img key={id} src={patpat[full]} title={title} alt={alt} />
                  );
                })}
                {/* <ContentCard
                  title={title}
                  code={github}
                  external={external}
                  technology={tech}
                  image={image}
                  imageName={imageName} //refactor to omit passing down this prop
                  desc={description}
                  test={test[id].src}
                /> */}
              </Grid>
            );
          }
        )}
      </Grid>
    </div>
  );
}

export default Projects;
