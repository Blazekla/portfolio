import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { CSSTransition } from "react-transition-group";
import "../styles/projects.css";

import pageData from "./data/pageData";

function HeroUnit() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const theme = useTheme();

  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        style={{
          paddingTop: "100px",
          margin: "0px auto 100px"
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-evenly"
          style={{
            paddingTop: "150px",
            margin: "0px auto 100px"
          }}
        >
          <CSSTransition
            in={isMounted}
            timeout={500}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: "fadeup-enter",
              enterActive: "fadeup-enter-active",
              exit: "",
              exitActive: ""
            }}
          >
            <Typography
              style={{
                transitionDelay: "200ms",
                color: theme.palette.primary.contrastText
              }}
            >
              {pageData.hero.title}
            </Typography>
          </CSSTransition>

          <CSSTransition
            in={isMounted}
            timeout={600}
            mountOnEnter
            unmountOnExit
            classNames="fadeup"
          >
            <Typography
              variant="h3"
              color="secondary"
              paragraph
              style={{
                position: "relative",
                transitionDelay: "300ms"
              }}
            >
              {pageData.hero.name}
            </Typography>
          </CSSTransition>

          <CSSTransition
            in={isMounted}
            timeout={700}
            mountOnEnter
            unmountOnExit
            classNames="fadeup"
          >
            <Typography
              style={{
                color: theme.palette.primary.contrastText,
                transitionDelay: "400ms"
              }}
            >
              {pageData.hero.description}
            </Typography>
          </CSSTransition>
          <Grid
            container
            spacing={4}
            justify="flex-start"
            style={{ marginTop: "20px" }}
          >
            <Grid item>
              <CSSTransition
                in={isMounted}
                timeout={900}
                mountOnEnter
                unmountOnExit
                classNames="fadeup"
              >
                <div
                  style={{
                    transitionDelay: "600ms"
                  }}
                >
                  {/* div element necessary to apply transition since Button component
                has existing transition that conflicts */}
                  <Button variant="contained" color="primary" href="#footer">
                    Contact
                  </Button>
                </div>
              </CSSTransition>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HeroUnit;
