import React, {
  // useState,
  useEffect,
  useRef
} from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { CSSTransition } from "react-transition-group";
import ScrollReveal from "scrollreveal";

function Contact() {
  ////Hooks to enable animation
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsMounted(true), 4500);
  //   return () => clearTimeout(timeout);
  // }, []);

  // const slideUp = {
  //   distance: "150%",
  //   origin: "bottom",
  //   duration: 1000,
  //   delay: 200,
  //   rotate: { x: 0, y: 0, z: 0 },
  //   opacity: 0,
  //   scale: 1,
  //   easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  //   mobile: true,
  //   reset: false,
  //   useDelay: "always",
  //   // viewFactor: 1,
  //   viewOffset: { top: 0, right: 0, bottom: 250, left: 0 }
  // };
  // const revealContainer = useRef(null);
  // useEffect(() => ScrollReveal().reveal(revealContainer.current, slideUp), []);
  ////End of animation hooks

  const theme = useTheme();
  const color = theme.palette.primary.contrastText;
  return (
    // <CSSTransition
    //   in={isMounted}
    //   timeout={300}
    //   mountOnEnter
    //   classNames="fadeup"
    // >
    <div
      id="contact"
      style={{
        backgroundColor: "inherit",
        textAlign: "center",
        marginBottom: "100px"
      }}
      // ref={revealContainer}
    >
      <Typography
        style={{ marginBottom: "10px" }}
        color="secondary"
        variant="h4"
      >
        Contact
      </Typography>
      <Typography paragraph style={{ marginTop: "20px", color: color }}>
        I'm excited to work with you. Looking forward to hearing from you!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="mailto:luiscristodev@gmail.com"
        style={{ padding: "20px 28px", marginTop: "30px" }}
      >
        Say Hello
      </Button>
    </div>
    // </CSSTransition>
  );
}

export default Contact;
