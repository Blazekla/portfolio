import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { CSSTransition } from "react-transition-group";
import "./testtransitions.css";

function HeroUnit() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const theme = useTheme();
  // const items = [one, two, three, four, five];
  return (
    <React.Fragment>
      <CSSTransition
        in={isMounted}
        timeout={750}
        mountOnEnter
        // unmountOnExit
        classNames={{
          enter: "fadeup-enter",
          enterActive: "fadeup-enter-active",
          exit: "",
          exitActive: ""
        }}
        style={{ transitionDelay: "750ms" }}
      >
        {/* <Typography variant="h3" style={{ transitionDelay: "100ms" }}>
          Hi, my name is
        </Typography> */}
        <h1>Howdy dwag!</h1>
      </CSSTransition>

      {/* <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup> */}
    </React.Fragment>
  );
}

export default HeroUnit;
