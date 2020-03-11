// import pinterest from "../static/images/Pinterest-project.jpg";
// import mern from "../static/images/MERN-project.jpg";

//Refactor key imageName so it isn't necessary to pass to component
const pageData = {
  hero: {
    title: "Hi, my name is",
    name: "Luis Cristo.",
    description:
      "I will help you create professional and beautiful solutions for all your web development needs."
  },
  project: [
    {
      title: "MERN Shopping List",
      github: "https://github.com/Blazekla/MERN-Shopping-List",
      external: "https://still-brushlands-77127.herokuapp.com/",
      tech: "",
      // image: "../static/images/MERN-project.jpg",
      // image: { mern },
      imageName: "mern",
      description: "#"
    },
    {
      title: "Pinterest Clone",
      github: "https://github.com/Blazekla/pinterest-project",
      external: "https://elastic-kirch-ad2656.netlify.com/",
      tech: "",

      // image: { pinterest },
      imageName: "pinterest",
      // image: "./Pinterest-project.jpg",
      // image: "../static/images/Pinterest-project.jpg",
      description: "#"
    }
    // {
    //   title: "3",
    //   github: "",
    //   external: "",
    //   tech: "",
    //   description: "#"
    // },
    // {
    //   title: "4",
    //   github: "",
    //   external: "",
    //   tech: "",
    //   description: "#"
    // },
    // {
    //   title: "5",
    //   github: "",
    //   external: "",
    //   tech: "",
    //   description: "#"
    // },
    // {
    //   title: "6",
    //   github: "",
    //   external: "",
    //   tech: "",
    //   description: "#"
    // }
  ]
};

export default pageData;
