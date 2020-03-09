import React, {
  // useState,
  useEffect,
  useRef
} from "react";
import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
// import { CSSTransition } from "react-transition-group";
import ScrollReveal from "scrollreveal";

function About() {
  ////Hooks to enable animation
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsMounted(true), 4250);
  //   return () => clearTimeout(timeout);
  // }, []);
  /////End of animation hooks
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
    viewOffset: { top: 0, right: 0, bottom: 250, left: 0 }
  };
  const revealContainer = useRef(null);
  useEffect(() => ScrollReveal().reveal(revealContainer.current, slideUp), []);

  // const theme = useTheme();
  // const color = theme.palette.primary.contrastText;
  return (
    // <CSSTransition
    //   in={isMounted}
    //   timeout={300}
    //   mountOnEnter
    //   classNames="fadeup"
    // >
    <div
      id="about"
      style={{
        backgroundColor: "inherit",
        textAlign: "center",
        marginBottom: "100px",
        paddingTop: "70px"
      }}
      ref={revealContainer}
    >
      <Typography
        variant="h4"
        color="secondary"
        style={{ marginBottom: "20px" }}
      >
        About Me
      </Typography>
      <Typography paragraph>
        Ever since I came across computers as a kid, I've been mesmerized by
        their potential. I've always found myself taking opportunites to learn
        more about computers by tinkering and building with them. I have decided
        to take this passion and turn it into a career.
      </Typography>

      <Typography>Here are some technologies I've been using:</Typography>

      <Typography>
        React, ES6+, HTML, CSS, Material-UI, Redux, Axios, Netlify, Node.js,
        Express.
      </Typography>
    </div>
    // </CSSTransition>
  );
}

export default About;
