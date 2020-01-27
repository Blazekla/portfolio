const transitionStyles = {
  entering: {
    opacity: "0.01",
    transform: "translateY(20px)",
    transition:
      "opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1)"
  },
  entered: {
    opacity: "0.01",
    transform: "translateY(20px)",
    transition:
      "opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
  // exiting:  { opacity: 0 },
  // exited:  { opacity: 0 },
};
//example transitions below

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

//example Transitions above
