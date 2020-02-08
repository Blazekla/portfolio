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
    // maxWidth: "345px" Remove since it breaks cards when width is around 550px
  }
});

function ContentCard(props) {
  const classes = useStyles();
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
          <Typography color="secondary">{props.title}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          <Link color="textPrimary" href={props.code} target="_blank">
            View Code
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link color="textSecondary" href={props.external} target="_blank">
            Live Demo
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ContentCard;
