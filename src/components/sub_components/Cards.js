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

import seal from "./sealpup.jpg";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

function ContentCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          //   image="https://source.unsplash.com/random"
          //   image={seal}
          image="./sealpup.jpg"
          title="Photogenic Seal Pup"
        />
        {/* <img src={process.env.PUBLIC_URL + "/sealpup.jpg"} /> */}
        <CardContent>
          <Typography>This is the cutest seal pup</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ContentCard;
