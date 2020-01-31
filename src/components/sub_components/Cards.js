import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

// import seal from "./sealpup.jpg";
const useStyles = makeStyles({
  card: {
    maxWidth: "345px"
  }
});
//changes to animation prior to rebasing here

function ContentCard(props) {
  const classes = useStyles();
  console.log(`This is the link passed: ${props.link}`);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Waving photogenic seal"
          // height="200"
          //   image="https://source.unsplash.com/random" this works online
          //   image={seal} this only works went you import the image above
          image="./sealpup.jpg" //This works since the image was moved to the public folder
          title="Photogenic Seal Pup"
        />
        <CardContent>
          <Typography>{props.title}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          <Link href={props.link}>View Code</Link>
        </Button>
        <Button size="small" color="primary">
          <Link href="#caseStudyYo">Case Study</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ContentCard;
